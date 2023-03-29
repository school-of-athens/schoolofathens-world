import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    border: "solid",
    borderWidth: "2px",
    borderColor: "gray.800",
  },
});

const inputTheme = defineMultiStyleConfig({ baseStyle });

export default inputTheme;
