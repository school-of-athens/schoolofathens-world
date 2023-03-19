import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    border: "2px solid black",

    _focus: {
        outline: "none",
    }
  },
})

const selectTheme = defineMultiStyleConfig({ baseStyle })

export default selectTheme;