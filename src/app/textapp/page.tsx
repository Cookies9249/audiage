'use client'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


const TestPage:React.FC = () => {

    const [micState, setMicState] = useState('Initial');
    const [audioURL, setAudioURL] = useState('');
    let mediaRecorder: MediaRecorder | null = null;

    // Set up audio recorder
    if (navigator.mediaDevices) {
        console.log('mediaDevices supported');
    }

    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {

        mediaRecorder = new MediaRecorder(stream);
        let chunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
        }

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
            chunks = [];
            const url = window.URL.createObjectURL(blob);
            setAudioURL(url);
            console.log(url);
        }
        
    }).catch(error => {
        console.log('Following error has occured : ', error)
    })

    const handleRecordAudio = () => {
        mediaRecorder!.start();
        setMicState('Record');
    }

    const handleStopRecordAudio = () => {
        mediaRecorder!.stop();
        setMicState('Download');
    }
    
    return (
        <>
        { micState === 'Initial' &&  (
            <Button onClick={handleRecordAudio}>Start Recording</Button>
        )}
        { micState === 'Record' && (
            <>
            <Text>Recording...</Text>
            <Button onClick={handleStopRecordAudio}> Stop Recording</Button>
            </>
        )}
        { micState === 'Download' && (
            <>
            <audio src={audioURL}/>
            <Button onClick={handleRecordAudio}>Record Again</Button>
            </>
        )}

        <Button onClick={() => console.log(mediaRecorder!.state)}>Check status</Button>

        </>
    )
}
export default TestPage;