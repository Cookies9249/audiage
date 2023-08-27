import { Button, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import NavbarMenu from './NavbarMenu';
import { SmallAddIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';
import { authModalState } from '@/src/atoms/authModalState';
import { useSetRecoilState } from 'recoil';

const AuthButtons:React.FC = () => {

    const router = useRouter();
    const setModalState = useSetRecoilState(authModalState);

    return (
        <Stack spacing={4} direction='row'>
            <Button colorScheme='blue' onClick={() => router.push('/upload')}>
                <SmallAddIcon fontSize='18pt'/>
                Upload
            </Button>

            <Button variant='solid_brand' onClick={() => setModalState({ open: true, view: 'login' })}>
                Log In
            </Button>
            
            <Button variant='outline_brand' onClick={() => setModalState({ open: true, view: 'signup' })}>
                Sign Up
            </Button>
            
            <NavbarMenu/>
        </Stack>
    )
}
export default AuthButtons;