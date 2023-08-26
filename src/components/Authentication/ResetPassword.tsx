import { Flex, Button, Text, Input, Icon } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { BsDot } from "react-icons/bs";
import { authModalState } from '@/src/atoms/authModalState';

const ResetPassword: React.FC = () => {
    const setModalState = useSetRecoilState(authModalState);

    return (
        <Flex direction='column' width='100%' mb='4' alignItems="center">
            <Text textAlign='center' fontWeight='700' fontSize='10pt' mb='2'>
                Reset your password
            </Text>

            <Text textAlign='center' fontSize='sm' mb='2'>
                Enter the email of your account
            </Text>

            <form onSubmit={() => setModalState(prev => ({
                ...prev,
                open: false
            }))}>

            <Input required name='email' placeholder='Email' type='email'/>

            <Button width='100%' height='36px' mt='2' mb='2' type='submit'>
                Reset Password
            </Button>
            
          </form>

      {/* Change Modals */}
      <Flex alignItems='center' fontSize='9pt' color='blue.500' fontWeight='700' cursor='pointer'>

        <Text onClick={() => setModalState((prev) => ({...prev, view: 'login'}))}>
          Log In
        </Text>

        <Icon as={BsDot} />

        <Text onClick={() => setModalState((prev) => ({...prev, view: 'login'}))}>
          Sign Up
        </Text>

      </Flex>
    </Flex>
  )
}
export default ResetPassword;