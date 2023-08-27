import { Flex, Button, Text, Input, Icon } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { BsDot } from "react-icons/bs";
import { authModalState } from '@/src/atoms/authModalState';

const ResetPassword: React.FC = () => {
    const setModalState = useSetRecoilState(authModalState);

    return (
        <Flex direction='column' width='100%' mb='4' alignItems="center">
            <Text textAlign='center' fontSize='sm' mb='2'>
                Please enter the email of your account
            </Text>


            <Input required name='email' placeholder='Email' type='email'
                mb={2} fontSize='10pt'
                _placeholder={{ color: 'gray.500' }}
                _hover={{ border: '2px solid', borderColor: 'brand.100' }}
                _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
            />

            <Button variant='solid_brand' width='100%' height='36px' mt={2} mb={4} type='submit'
                onClick={() => setModalState(prev => ({ ...prev, open: false }))}
            >
                Reset Password
            </Button>

            {/* Change Modals */}
            <Flex fontSize='9pt' justifyContent='center' mb={2}>
                <Text mr={1}>Remember your password?</Text>
                <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setModalState(
                    prev => ({
                        ...prev,
                        view: 'login'
                    })
                )}>Log In</Text>
            </Flex>

            <Flex fontSize='9pt' justifyContent='center'>
                <Text mr={1}>Don't have an account?</Text>
                <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setModalState(
                    prev => ({
                        ...prev,
                        view: 'signup'
                    })
                )}>Sign Up</Text>
            </Flex>

        </Flex>
    )
}
export default ResetPassword;