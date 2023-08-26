// Template from https://v1.chakra-ui.com/docs/components/overlay/modal
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalState';
import OAuth from './OAuth';
import ResetPassword from './ResetPassword';
import LogIn from './LogIn';
import SignUp from './SignUp';

const AuthModal:React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  // Close modal
  const handleClose = () => {
    setModalState((prev) => ({
        ...prev,
        open: false,
    }))
  }
  
  return (
    <>
    {/* modalState controls the state of modal */}
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>

            {modalState.view === 'login' && 'Log In'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'reset' && 'Reset Password'}

          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody display='flex' flexDirection='column' alignItems='center' justifyContent='center' pb='6'>
            <Flex direction='column' align='center' justify='center' width='70%'>

                {modalState.view === 'login' && <>
                  <OAuth/>
                  <LogIn/>
                </>}
                {modalState.view === 'signup' && <>
                  <OAuth/>
                  <SignUp/>
                </>}
                {modalState.view === 'reset' && <>
                  <ResetPassword/>
                </>}

                {/* {(modalState.view === 'login' || modalState.view === 'signup') ? (
                
                    <OAuth/>


                ) : <ResetPassword/>} */}

            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AuthModal;