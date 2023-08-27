import { Button, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import { useRouter } from 'next/navigation';
import { DiCodeigniter } from 'react-icons/di'
import AuthModal from '../Authentication/AuthModal';

const Navbar: React.FC = () => {

    const router = useRouter();

    return (
        <Flex justify='center' height='80px' padding='12px' position='sticky' top='0px' bg='white' zIndex={9999}>

            <Flex justify='space-between' width='90%'>

                <>
                    <Flex color='brand.100' cursor='pointer' mt='5px' mr={6} minWidth='220px' justify='center' onClick={() => router.push('/')}>
                        <Image src='/images/audiage.png'/>
                    </Flex>

                    <Stack spacing={5} direction='row' align='center' justify='center'
                        border='1px' borderColor='gray.300' borderRadius='15px' p='0px 12px' mt={2} height='42px'
                        display={{ base: 'none', md: 'none', lg: 'none', xl: 'unset' }}
                    >
                        <Button variant='ghost' fontWeight={400} onClick={() => router.push('/')}>Home</Button>
                        <Button variant='ghost' fontWeight={400} onClick={() => router.push('/#About')}>About</Button>
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