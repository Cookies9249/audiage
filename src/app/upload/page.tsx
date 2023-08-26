'use client'

import UploadForm from "@/src/components/Upload/UploadForm"
import { Flex, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";

export default function UploadPage() {
  return (
    <Flex justify='center' padding='16px 0px'>

      <Flex p='12px' width='95%' maxWidth='1000px' mt='50px' align='center' direction='column'>

        <UploadForm/>

      </Flex>
      
    </Flex>
  )
}
