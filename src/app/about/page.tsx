'use client'

import { FaReddit } from "react-icons/fa";
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <Flex justify='center' padding='16px 0px' direction='column'>
 
          <Flex p='12px' width='95%' maxWidth='1200px' mt='50px' mb='100px' align='center' justify='center' direction='column'>

              <Flex direction='column' bg='gray.50' borderRadius='10' width='160px' p='2'>
                  <Text textAlign='center' fontSize='9pt' fontWeight='600' mb='1' mt='12'>Title</Text>
                  <Text textAlign='center' fontSize='8pt' color='gray.500'>Text</Text>
              </Flex>          


          </Flex>
    </Flex>
  )
}
