'use client'

import BottomBar from "@/src/components/Navbar/BottomBar";
import UploadForm from "@/src/components/Upload/UploadForm"
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";

export default function UploadPage() {
    return (
        <Flex direction='column' justify='center'>

            <Flex direction='row'>

                <Flex align='center' direction='column' bg='brand.200' width='50%' color='white' pt='250px'>
                    <Box position='sticky' top='200px'>
                        <Text fontSize='36pt' fontWeight={700}>Welcome to Audiage!</Text>
                        <Text fontSize='16pt'>Upload your audio file. Get results in seconds.</Text>
                    </Box>
                </Flex> 

                <Flex p='12px' width='60%' maxWidth='1000px' mt='50px' mb='150px' align='center' direction='column'>
                    <UploadForm/>
                </Flex>

            </Flex>

            <BottomBar/>
      
        </Flex>
    )
}
