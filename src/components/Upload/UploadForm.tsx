import { Alert, AlertIcon, Button, Divider, Flex, Icon, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import fetch from 'node-fetch';
import useDolbyAPI from '@/src/hooks/useDolbyAPI';
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, BsFiletypeMp3 } from 'react-icons/bs';

const formTabs = ['Option 1', 'Option 2', 'Option 3']

const UploadForm:React.FC = () => {

    const [error, setError] = useState(false);
    const selectedFileRef = useRef<HTMLInputElement>(null);

    const [play, setPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const uploadFile = () => {
        try {
            // Code here
                    
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    const toggleAudio = () => {
        if (play) {
            audioRef.current?.pause();
            setPlay(false);
        }
    }

    return (
        <Flex direction='column' bg='white' borderRadius='4' mt='2' width='80%'>

            <Flex justify='center' align='center' direction='column' width='100%'>
                <Text fontSize='32pt' fontWeight={700}>Welcome to Audiage!</Text>
                <Text fontSize='16pt'>Upload your audio file. Get results in seconds.</Text>
            </Flex>

            {/* Step 1 */}
            <Stack spacing={4} direction='row' fontWeight={700} mt={8}>
                <Icon as={Bs1Circle} fontSize='24pt'/>
                <Text fontSize='16pt'>Select the Mode</Text>
            </Stack>

            <Flex justify='center' mt={6}>

                <Stack spacing={4} direction='row' width='80%'>
                    <Text mt='6px'>What mode would you like to use?</Text>
                    
                    <Select width='40%' placeholder='Select option'
                        _placeholder={{ color: 'gray.500' }}
                        _hover={{ border: '2px solid', borderColor: 'brand.100' }}
                        _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
                    >
                        <option value='option1'>Automatic Mode</option>
                        <option value='option2'>Manual Mode</option>
                    </Select>
                </Stack>
            </Flex>
            <Divider mt={6}/>

            {/* Step 2 */}
            <Stack spacing={4} direction='row' fontWeight={700} mt={8}>
                <Icon as={Bs2Circle} fontSize='24pt'/>
                <Text fontSize='16pt'>Select Customizations</Text>
            </Stack>

            <Flex justify='center' mt={6}>

                <Stack spacing={4} direction='row' width='80%'>
                    <Text>Age</Text>
                    <Select placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Stack>
            </Flex>
            <Divider mt={6}/>

            {/* Step 3 */}
            <Stack spacing={4} direction='row' fontWeight={700} mt={6}>
                <Icon as={Bs3Circle} fontSize='24pt'/>
                <Text fontSize='16pt'>Upload Files</Text>
            </Stack>

            <Flex justify='center' mt={6}>
                <Flex direction='column' justify='center' align='center' p={20} border='1px dashed' borderColor='gray.700' width='80%' borderRadius='4'>

                    <Icon as={BsFiletypeMp3} color='brand.100' fontSize='48pt' mb={4}/>

                    <Button variant='solid_brand' height='28px' onClick={() => selectedFileRef.current?.click()}>
                        Upload
                    </Button>
                    <input id='song' ref={selectedFileRef} type='file' accept='.mp3' hidden/>
                </Flex>
            </Flex>
            <Divider mt={6}/>
            
            {/* <audio ref={audioRef} src={''}/> */}

            {/* Step 4 */}
            <Stack spacing={4} direction='row' fontWeight={700} mt={8}>
                <Icon as={Bs4Circle} fontSize='24pt'/>
                <Text fontSize='16pt'>Enhance my Audio!</Text>
            </Stack>


            <Flex justify='center' mt={6}>
                <Button variant='solid_brand' width='90%' height='36px' mt={2} mb={4} type='submit'>
                    Download
                </Button>
            </Flex>
            
        </Flex>
    )
}
export default UploadForm;