import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    border: "2px solid",
    borderColor: "gray.800",
  },
})

const inputTheme = defineMultiStyleConfig({ baseStyle });

export default inputTheme;