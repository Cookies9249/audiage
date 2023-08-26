'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import Navbar from '../components/Navbar/Navbar'
import { theme } from '../chakra/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <RecoilRoot>
        <ChakraProvider theme={theme}>

          <Navbar/>
          <main>{children}</main>
        
        </ChakraProvider>
      </RecoilRoot>
    </CacheProvider>
  )
}