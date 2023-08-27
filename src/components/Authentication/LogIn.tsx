import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalState';

const LogIn:React.FC = () => {
    const setModalState = useSetRecoilState(authModalState);
    
    return (<>

        <Input name='email' placeholder='Email' type='email'
            mb={2} fontSize='10pt'
            _placeholder={{ color: 'gray.500' }}
            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
        />
        <Input name='password' placeholder='Password' type='password'
            mb={2} fontSize='10pt'
            _placeholder={{ color: 'gray.500' }}
            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
        />
        
        <Button variant='solid_brand' width='100%' height='36px' mt={2} mb={4} type='submit'
            onClick={() => setModalState(prev => ({ ...prev, open: false }))}
        >
            Log In
        </Button>

        {/* Change modals */}
        <Flex fontSize='9pt' justifyContent='center' mb='2'>
            <Text mr={1}>Forgot your password?</Text>
            <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setModalState(
                prev => ({
                    ...prev,
                    view: 'reset'
                })
            )}>Reset Password</Text>
        </Flex>

        <Flex fontSize='9pt' justifyContent='center'>
            <Text mr={1}>Don&apos;t have an account?</Text>
            <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setModalState(
                prev => ({
                    ...prev,
                    view: 'signup'
                })
            )}>Sign Up</Text>
        </Flex>

    </>)
}
export default LogIn;