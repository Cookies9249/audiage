import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "15px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: { boxShadow: "none" },
    width: "110px",
  },
  variants: {
    solid_brand: {
      color: "white",
      bg: "brand.100",
      _hover: { color: 'brand.500' },
    },
    outline_brand: {
      color: "brand.100",
      border: "2px solid",
      borderColor: "brand.100",
      _hover: { bg: 'brand.500' }
    },
    outline_white: {
      color: "white",
      border: "2px solid",
      borderColor: "white",
      _hover: { bg: '#aa8de6' }
    },
    outline_black: {
      width: "80px",
      color: "gray.600",
      border: "2px solid",
      borderColor: "gray.700",
      _hover: { bg: 'gray.100' },
    },
    solid_white: {
      height: "36px",
      border: "2px solid",
      borderColor: "gray.300",
      width: '100%',
      _hover: {
        border: '2px solid', borderColor: 'brand.100',
      },
    },
  },
};