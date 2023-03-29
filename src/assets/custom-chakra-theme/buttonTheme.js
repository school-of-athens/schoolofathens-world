import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const gray = defineStyle({
  background: 'gray.50',
  color: 'black',
  fontWeight: '500',
  fontSize: "md",
  border: "2px solid",
  borderColor: "gray.300",
  paddingY: 4,
  paddingX: "0.875rem",
  minW: "6rem",

  _hover: {
    background: 'gray.200',
    borderColor: "gray.400"
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
  paddingX: "0.875rem",
  minW: '6rem',

  _hover: {
    background: '#1E66CC'
  }
});

const light = defineStyle({
  background: 'white',
  color: '#1E66CC',
  fontWeight: '500',
  fontSize: "md",
  border: "2px solid",
  borderColor: "gray.300",
  paddingY: 4,
  paddingX: 3,
  minW: "6rem",

  _hover: {
    background: 'gray.100',
    borderColor: "gray.400"
  }
});

const ghostGray = defineStyle({
  background: 'transparent',
  color: 'black',
  fontWeight: '500',
  height: "fit-content",

  _hover: {
    background: 'gray.300'
  }
});

const buttonTheme = defineStyleConfig({
  variants: { gray, blue, ghostGray, light },
});

export default buttonTheme;