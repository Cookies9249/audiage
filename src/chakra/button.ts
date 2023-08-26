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
      _hover: { bg: "brand.100" },
    },
    outline_brand: {
      color: "brand.100",
      border: "1px solid",
      borderColor: "brand.100",
    },
    outline_black: {
      width: "80px",
      color: "gray.600",
      border: "1px solid",
      borderColor: "gray.700",
    },
    solid_white: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};