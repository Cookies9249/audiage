// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import { Button } from './button'

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#645CBB", // 400
      200: '#A084DC', // 300
      300: '#BFACE2', // 200
      400: '#EBC7E6', // 100
      500: '#e6e2f4'
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
  }
})