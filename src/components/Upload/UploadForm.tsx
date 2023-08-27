import { Alert, AlertIcon, Button, Divider, Flex, Icon, Input, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import fetch from 'node-fetch';
import useDolbyAPI from '@/src/hooks/useDolbyAPI';
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, BsFiletypeMp3, BsFiletypeWav } from 'react-icons/bs';

const formTabs = ['Option 1', 'Option 2', 'Option 3']

const UploadForm:React.FC = () => {

    // Configurations
    const [selectedMode, setSelectedMode] = useState<string>('automatic');
    const [selectedAge, setSelectedAge] = useState<string>();
    const [selectedRange, setSelectedRange] = useState({
        min: '',
        max: '',
    });

    // Uploading audio files
    const selectedFileRef = useRef<HTMLInputElement>(null);
    const [selectedFileName, setSelectedFileName] = useState<string>();
    const [selectedFileData, setSelectedFileData] = useState<string>();

    // On upload, store name and data
    const onUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        // If there is a file, read data
        if (event.target.files?.[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            if (readerEvent.target?.result) {
                setSelectedFileName(event.target.files?.[0].name)
                setSelectedFileData(readerEvent.target.result as string);
            }
        }
    }

    const onDownloadFile = () => {
        //
    }

    // Change text inputs
    const onTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSelectedRange(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };

    // On remove, remove name and data from storage
    const onRemoveFile = () => {
        if (selectedFileData) {
            setSelectedFileName('');
            setSelectedFileData('');
        }
    }

    useEffect(() => {
        console.log(selectedFileData);
    }, [selectedFileData]);

    return (<>
        <Button onClick={onDownloadFile}>Test</Button>
        <Flex direction='column' borderRadius='4' mt='2' width='80%'>

            {/* Step 1 */}
            <Stack spacing={4} direction='row' fontWeight={700} mt={8}>
                <Icon as={Bs1Circle} fontSize='24pt'/>
                <Text fontSize='16pt'>Select the Mode</Text>
            </Stack>

            <Flex justify='center' mt={6}>

                <Flex direction='row' width='84%'>
                    <Text mt='6px' mr={4}>What mode would you like to use?</Text>
                    
                    <Select width='40%' defaultValue='automatic'
                        _placeholder={{ color: 'gray.500' }}
                        _hover={{ border: '2px solid', borderColor: 'brand.100' }}
                        _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
                        onChange={(event) => setSelectedMode(event.target.value)}
                    >
                        <option value='automatic'>Automatic Mode</option>
                        <option value='manual'>Manual Mode</option>
                    </Select>
                </Flex>
            </Flex>
            <Divider mt={6}/>

            {/* Step 2 */}
            <Stack spacing={4} direction='row' fontWeight={700} mt={8}>
                <Icon as={Bs2Circle} fontSize='24pt'/>
                <Text fontSize='16pt'>Select Customizations</Text>
            </Stack>

            <Flex justify='center' mt={6}>

                {selectedMode == 'automatic' && <>
                    <Flex direction='row' width='84%'>
                        <Text mt='6px' mr={4}>I want to filter for</Text>
                        <Select width='40%' placeholder='Select group'
                            _placeholder={{ color: 'gray.500' }}
                            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
                            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
                            onChange={(event) => setSelectedAge(event.target.value)}
                        >
                            <option value='adolescent'>Adolescent</option>  
                            <option value='adult'>Adult</option>
                            <option value='senoir'>Senior</option>
                        </Select>
                    </Flex>
                </>}

                {selectedMode == 'manual' && <>
                
                    <Flex direction='row' width='84%'>
                        <Text mt='6px' width='45%'>I want to filter frequencies from</Text>
                        <Input width='18%' name='min'
                            _placeholder={{ color: 'gray.500' }}
                            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
                            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
                            onChange={onTextChange}
                        />
                        <Text mt='6px' mr={2} ml={2} width='8%'>Hz to</Text>

                        <Input width='18%' name='max'
                            _placeholder={{ color: 'gray.500' }}
                            _hover={{ border: '2px solid', borderColor: 'brand.100' }}
                            _focus={{ outline: 'none', border: '2px solid', borderColor: 'brand.100' }}
                            onChange={onTextChange}
                        />

                        <Text mt='6px' mr={2} ml={2}>Hz</Text>
                    </Flex>
                </>}

            </Flex>
            <Divider mt={6}/>

            {/* Step 3: Upload files */}
            <Stack spacing={4} direction='row' fontWeight={700} mt={6}>
                <Icon as={Bs3Circle} fontSize='24pt'/>
                <Text fontSize='16pt'>Upload Files</Text>
            </Stack>

            <Flex justify='center' mt={6}>

                <Flex direction='column' justify='center' align='center' p='80px' border='1px dashed' borderColor='gray.700' width='84%' borderRadius='4'>

                    { selectedFileData ? <>
                        <Text fontSize='11pt' mb={2}>{`Uploaded ${selectedFileName}`}</Text>
                        <audio controls>
                            <source src={selectedFileData} type="audio/mpeg"/>
                        </audio>
                        <Button variant='outline_brand' height='28px' mt={4} onClick={onRemoveFile}>
                            Remove
                        </Button>
                    </> : <>
                        <Flex direction='row'>
                            <Icon as={BsFiletypeMp3} color='brand.100' fontSize='48pt' mb={4} mr={4} mt='10px'/>
                            <Icon as={BsFiletypeWav} color='brand.100' fontSize='48pt' mb={4} mt='10px'/>
                        </Flex>

                        <Button variant='solid_brand' height='28px' mb='10px' onClick={() => selectedFileRef.current?.click()}>
                            Upload
                        </Button>
                        <input id='song' ref={selectedFileRef} type='file' accept='.mp3,.wav' hidden onChange={onUploadFile}/>
                    </>}

                </Flex>

            </Flex>
            <Divider mt={6}/>

            {/* Step 4: Download */}
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
    </>)
}
export default UploadForm;