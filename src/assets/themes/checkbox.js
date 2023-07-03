import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const ghost = definePartsStyle({
  colorScheme: "gray",
  control: defineStyle({
    rounded: "full",
    borderColor: "gray.300",
    mx: 1,
    size: "sm",
  }),
  icon: defineStyle({}),
  container: defineStyle({
    p: 1,
    rounded: "lg",
    border: "2px solid",
    borderColor: "gray.300",
    colorScheme: "gray",
    _checked: {
      bg: "blue.50",
      borderColor: "blue.300",
    },
    _hover: {
        bg: "blue.50",
        borderColor: "blue.300",
    },
  }),
  label: defineStyle({
    fontSize: "1rem"
  }),
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { ghost },
});
