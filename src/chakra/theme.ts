// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import { Button } from './button'
import { Input } from "./input"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#F56565",
    },
  },
  styles: {
    global: () => ({
        body: {
            bg: "white",
        },
    }),
  },
  components: {
    Button,
    Input,
  }
})