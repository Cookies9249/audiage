import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalState';

const LogIn:React.FC = () => {
    const setModalState = useSetRecoilState(authModalState);
    
    return (
        <form onSubmit={() => setModalState(prev => ({
            ...prev,
            open: false
        }))}>

            <Input required name='email' placeholder='Email' type='email'/>
            <Input required name='password' placeholder='Password' type='password'/>
            
            <Button width='100%' height='36px' mt='2' mb='2' type='submit'>
                Log In
            </Button>

            <Flex fontSize='9pt' justifyContent='center' mb='2'>
                <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setModalState(
                    prev => ({
                        ...prev,
                        view: 'reset'
                    })
                )}>Reset Password</Text>
            </Flex>

            <Flex fontSize='9pt' justifyContent='center'>
                <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setModalState(
                    prev => ({
                        ...prev,
                        view: 'signup'
                    })
                )}>Log In</Text>
            </Flex>
        </form>
    )
}
export default LogIn;