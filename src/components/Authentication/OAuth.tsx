import { authModalState } from '@/src/atoms/authModalState';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const OAuth:React.FC = () => {
    const setModalState = useSetRecoilState(authModalState);
    
    return (
        <>
        <Flex direction='column' width='100%' mb='4'>
            <Button variant='solid_white' mb='2'>
                <Image src='images/googlelogo.png' height='20px' mr='4'/>
                Continue with Google
            </Button>

            {/* Other Method Sign In */}
            <Button variant='solid_white' onClick={() => setModalState(prev => ({
                ...prev,
                open: false,
            }))}>
                Another Provider
            </Button>
        </Flex>
        <Text color='gray.500' fontWeight='700'>OR</Text>
        </>
    )
}
export default OAuth;