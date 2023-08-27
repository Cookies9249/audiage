import { Divider, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { FaTiktok, FaTwitter, FaFacebook, FaReddit, FaInstagram, FaYoutube } from 'react-icons/fa';

const BottomBar:React.FC = () => {

    const router = useRouter();
    
    return (
        <Flex padding='16px 0px' bg='brand.100' color='white' align='center' justify='center' pb='60px'>
            <Flex width='48%' direction='column' align='center' justify='center'>

                <Text mt={6}>Made with NextJS</Text>
                <Stack spacing={12} direction='row' mt={8}>
                    <Text fontWeight={700} cursor='pointer'
                        onClick={() => router.push('/#')}
                    >Audiage</Text>

                    <Text cursor='pointer'>Terms of Use</Text>
                    <Text cursor='pointer'>Privacy Policy</Text>
                    
                    
                    <Stack spacing={4} direction='row' fontSize='16pt'>
                        <Icon as={FaTiktok} cursor='pointer' onClick={() => router.push('https://www.tiktok.com/')}/>
                        <Icon as={FaTwitter} cursor='pointer' onClick={() => router.push('https://twitter.com/')}/>
                        <Icon as={FaFacebook} cursor='pointer' onClick={() => router.push('https://www.facebook.com/')}/>
                        <Icon as={FaReddit} cursor='pointer' onClick={() => router.push('https://www.reddit.com/')}/>
                        <Icon as={FaInstagram} cursor='pointer' onClick={() => router.push('https://www.instagram.com/')}/>
                        <Icon as={FaYoutube} cursor='pointer' onClick={() => router.push('https://youtube.com/')}/>
                    </Stack>

                </Stack>

                <Divider m='20px 0px' borderColor='white'/>

                <Flex direction='row' cursor='pointer'>
                    <Icon as={BsGlobe2} mr={2} mt={1}/>
                    <Text>English (US)</Text>
                </Flex>

            </Flex>
        </Flex>
    )
}
export default BottomBar;