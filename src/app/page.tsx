'use client'

import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { Button, Divider, Flex, Square, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { useRouter } from "next/navigation";

const features = [
  { 'title': 'Enhance recordings for clarity.', 'body': 'Audiage gives you the tools that you need to improve audio recordings with a simple and easy-to-use interface.' },
  { 'title': 'Filter frequencies to lower hearing damage.', 'body': 'Filtering audio with Audiage allows you to remove high, damaging frequencies that can harm your hearing.' },
  { 'title': 'Convenient and flexible access.', 'body': 'Access Audiage through the Internet on a phone, tablet, laptop, or computer. The app even offers a downloaded version  for easy offline access.' },
  { 'title': 'Get results in seconds.', 'body': 'Audiage is app that can be used anytime. Customize your audio configuration settings, upload your audio file, and instantly access the final result.' },
  { 'title': 'Save and reaccess your data.', 'body': 'Save your uploaded and refined audio files and access them through an account. Audiage uses a secure infrastructure to keep your data safe.'},
]

export default function HomePage() {
  const router = useRouter();

  return (<>
    <Flex justify='center' padding='16px 0px'>
 
          <Flex p='12px' width='95%' maxWidth='1200px' mt='60px' mb='100px' justify='space-between' direction='row'>
            
            <Flex width='41%' direction='column'>
              <Text fontSize='36pt' fontWeight='700' mb={4}>
                The New Innovative Solution to Counter Hearing Loss.
              </Text>

              <Text fontSize='15pt' fontWeight='400' mb={6}>
                Experience sound like never before with Audiage - the revolutionary app designed to enrich your hearing and transform your auditory world.
              </Text>

              <Stack spacing={4} direction='row' pt={4}>
                <Button variant='solid_brand' width='180px' height='42px' onClick={() => router.push('/upload')}>
                  Try it now
                  <ChevronRightIcon fontSize='16pt' ml={1}/>
                </Button>
                <Button variant='solid_brand' width='180px' height='42px' onClick={() => router.push('/about')}>
                  <ExternalLinkIcon fontSize='14pt' mr={2}/>
                  Learn more
                </Button>
              </Stack>
            </Flex>
            <Flex width='50%' direction='column' border='1px solid black' borderRadius='50px' m='20px 0px' bg='red.100'>
                Image
            </Flex>
        </Flex>

    </Flex>


    <Flex justify='center' align='center' padding='16px 0px' bg='red.300' color='white'>
 
        <Flex p='12px' width='95%' maxWidth='1200px' mt='60px' mb='100px' justify='center' align='center' direction='column'>

            <Text fontSize='33pt' fontWeight='700' mt={12} mb={10}>
               Features and Capabilities
            </Text>

            <Wrap justify='center'>
            { features.map(item => (
                <WrapItem key={item.title}>
                    <Flex direction='column' color='white' justify='center' align='center' p={8}>
                        <Flex width='280px' height='280px' bg='red.200'>
                        </Flex>

                        <Flex direction='column' width='280px' mt={6}>
                            <Text fontSize='14pt' fontWeight='700' mb={4}>
                                {item.title}
                            </Text>
                            <Text fontSize='12pt' fontWeight='400'>
                                {item.body}
                            </Text>
                        </Flex>
                    </Flex>
                </WrapItem>
            ))}
            </Wrap>

            <Text fontSize='22pt' fontWeight='700' mt={12}>
               Get Audiage for Free Today.
            </Text>

            <Stack spacing={4} direction='row' pt={6}>
                <Button variant='solid_brand' width='180px' height='42px' onClick={() => router.push('/upload')}>
                  Try it now
                  <ChevronRightIcon fontSize='16pt' ml={1}/>
                </Button>
                <Button variant='solid_brand' width='180px' height='42px' onClick={() => router.push('/about')}>
                  <ExternalLinkIcon fontSize='14pt' mr={2}/>
                  Learn more
                </Button>
            </Stack>
            

        </Flex>
    </Flex>

        {/* 
        
        x% of adults suffer from hearing loss
        x number of people are impacted by ... 
        x% of students use unhealthly audio practices

        
        */}

<Flex justify='center' align='center' padding='16px 0px' bg='red.300' color='white'>
 
 <Flex p='12px' width='95%' maxWidth='1200px' mt='60px' mb='100px' justify='center' align='center' direction='column'>

     <Text fontSize='33pt' fontWeight='700' mt={12} mb={10}>
        Features and Capabilities
     </Text>

     <Wrap justify='center'>
     { features.map(item => (
         <WrapItem key={item.title}>
             <Flex direction='column' color='white' justify='center' align='center' p={8}>
                 <Flex width='280px' height='280px' bg='red.200'>
                 </Flex>

                 <Flex direction='column' width='280px' mt={6}>
                     <Text fontSize='14pt' fontWeight='700' mb={4}>
                         {item.title}
                     </Text>
                     <Text fontSize='12pt' fontWeight='400'>
                         {item.body}
                     </Text>
                 </Flex>
             </Flex>
         </WrapItem>
     ))}
     </Wrap>

     <Text fontSize='22pt' fontWeight='700' mt={12}>
        Get Audiage for Free Today.
     </Text>

     <Stack spacing={4} direction='row' pt={6}>
         <Button variant='solid_brand' width='180px' height='42px' onClick={() => router.push('/upload')}>
           Try it now
           <ChevronRightIcon fontSize='16pt' ml={1}/>
         </Button>
         <Button variant='solid_brand' width='180px' height='42px' onClick={() => router.push('/about')}>
           <ExternalLinkIcon fontSize='14pt' mr={2}/>
           Learn more
         </Button>
     </Stack>
     

 </Flex>
</Flex>


    <Flex direction='column' align='center' justify='center' padding='16px 0px' bg='red.300'>
        <Stack spacing={10} direction='row'>
            <Text>Audiage</Text>
            <Text>Terms and Conditions</Text>
            <Text>Logos Here (twitter facebook, indeed, insta, youtube)</Text>
        </Stack>

        <Flex width='50%' m='20px 0px'>
            <Divider/>
        </Flex>

        <Text>English (US)</Text>
    </Flex>
  </>)
}
