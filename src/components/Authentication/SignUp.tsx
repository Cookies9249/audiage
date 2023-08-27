import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalState';

const SignUp:React.FC = () => {
    const setModalState = useSetRecoilState(authModalState);
    
    return (<>

        <Input required name='email' placeholder='Email' type='email'
            mb={2} fontSize='10pt'
            _placeholder={{ color: 'gray.500' }}
            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
        />
        <Input required name='password' placeholder='Password' type='password'
            mb={2} fontSize='10pt'
            _placeholder={{ color: 'gray.500' }}
            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
        />
        <Input required name='confirm' placeholder='Confirm Password' type='confirm'
            mb={2} fontSize='10pt'
            _placeholder={{ color: 'gray.500' }}
            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
        />

        <Button variant='solid_brand' width='100%' height='36px' mt={2} mb={4} type='submit'
            onClick={() => setModalState(prev => ({ ...prev, open: false }))}
        >
            Sign Up
        </Button>

        <Flex fontSize='9pt' justifyContent='center'>
            <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setModalState(
                prev => ({
                    ...prev,
                    view: 'login'
                })
            )}>Log In</Text>
        </Flex>
    </>)
}
export default SignUp;