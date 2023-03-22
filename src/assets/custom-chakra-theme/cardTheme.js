import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    border: "2px",
    borderTopColor: "gray.300",
    borderLeftColor: "gray.300",
    borderRightColor: "gray.300",
    borderBottomColor: "gray.300",

    _hover: {
      bgColor: "gray.100",
      borderTopColor: "blue.400",
      borderLeftColor: "blue.400",
      borderRightColor: "blue.400",
      borderBottomColor: "blue.400",
    },
  },
  header: {},
  body: {},
  footer: {},
});

const cardTheme = defineMultiStyleConfig({ baseStyle });

export default cardTheme;
