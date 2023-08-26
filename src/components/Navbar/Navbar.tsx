import { Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import { useRouter } from 'next/navigation';
import { DiCodeigniter } from 'react-icons/di'
import AuthModal from '../Authentication/AuthModal';

const Navbar: React.FC = () => {

    const router = useRouter();

    return (
        <Flex justify='center' height='80px' padding='12px' position='sticky' top='0px' bg='white'>

            <Flex justify='space-between' width='90%'>

                <>
                    <Flex color='brand.100' cursor='pointer' mt='5px' onClick={() => router.push('/')}>
                        <Icon as={DiCodeigniter} fontSize='30pt' mr={2} mb={1}/>
                        <Text fontSize='20pt' fontWeight={800} mt={1}>
                            AUDIAGE
                        </Text>
                    </Flex>

                    <Stack spacing={10} direction='row' align='center' justify='center' border='1px' borderColor='gray.300' borderRadius='15px' p='0px 12px' mt={2} height='42px'>
                        <Button variant='ghost' fontWeight={400} onClick={() => router.push('/')}>Home</Button>
                        <Button variant='ghost' fontWeight={400} onClick={() => router.push('/about')}>About Us</Button>
                        <Button variant='ghost' fontWeight={400}>Contact</Button>
                    </Stack>
                </>
                
                {/* Auth stuffs */}
                <Flex align='center' justify='center' cursor='pointer'>
                    <AuthModal/>
                    <AuthButtons/>
                </Flex>

            </Flex>

        </Flex>
    )
}
export default Navbar;