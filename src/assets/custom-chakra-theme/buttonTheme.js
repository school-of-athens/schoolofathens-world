import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const gray = defineStyle({
  background: 'gray.50',
  color: 'black',
  fontWeight: '500',
  fontSize: "md",
  border: "2px solid",
  borderColor: "gray.300",
  paddingY: 4,
  paddingX: 3,

  _hover: {
    background: 'gray.200'
  }
});

const blue = defineStyle({
  background: '#2A84EE',
  color: 'white',
  fontWeight: '500',
  fontSize: "md",
  border: "2px solid",
  borderColor: "#2A84EE",
  paddingY: 4,
  paddingX: 3,
  minW: '5rem',

  _hover: {
    background: '#1E66CC'
  }
});

const buttonTheme = defineStyleConfig({
  variants: { gray, blue },
});

export default buttonTheme;