import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    borderWidth: "2px",
    bgColor: "white",
    borderTopColor: "gray.300",
    borderLeftColor: "gray.300",
    borderRightColor: "gray.300",
    borderBottomColor: "gray.300",
    borderRadius: "xl",
    overflow: "hidden",
    w: "100%",

    _hover: {
      bgColor: "gray.100",
      borderTopColor: "#2A84EE",
      borderLeftColor: "#2A84EE",
      borderRightColor: "#2A84EE",
      borderBottomColor: "#2A84EE",
    },
  },
  header: {
    py: 1,
    px: 0
  },
  body: {
    pb: 0,
    pt: 2,
    px: 1
  },
  footer: {
    justifyContent: "space-between",
    w: "100%",
    pt: 1,
    pb: 2,
  },
});

const plain = defineStyle({
  container: {
    boxShadow: "none",
    py: 3,
    px: 6,

    _hover: {
      bgColor: "white",
      borderTopColor: "gray.300",
      borderLeftColor: "gray.300",
      borderRightColor: "gray.300",
      borderBottomColor: "gray.300",
    },
  },
  footer: {
    borderTop: "2px solid",
    borderColor: "gray.300",
    px: 1,
    mt: 3,
    pb: 0,
  }
});

const gray = defineStyle({
  // define the part you're going to style
  container: {
    borderWidth: "2px",
    bgColor: "white",
    borderTopColor: "gray.300",
    borderLeftColor: "gray.300",
    borderRightColor: "gray.300",
    borderBottomColor: "gray.300",
    borderRadius: "0.5rem",

    _hover: {
      bgColor: "gray.100",
      borderTopColor: "gray.400",
      borderLeftColor: "gray.400",
      borderRightColor: "gray.400",
      borderBottomColor: "gray.400",
    },
  },
});

const borderBottom = defineStyle({
  container: {
    borderBottomWidth: "0.25rem",
    borderBottomColor: "gray.400",
    borderRadius: "0.5rem",

    _hover: {
      bgColor: "gray.100",
      borderTopColor: "#2A84EE",
      borderLeftColor: "#2A84EE",
      borderRightColor: "#2A84EE",
      borderBottomColor: "#2A84EE",
    },
  },
});

const borderTop = defineStyle({
  container: {
    borderTopWidth: "0.25rem",
    borderTopColor: "gray.400",
    borderRadius: "0.5rem",

    _hover: {
      bgColor: "gray.100",
      borderTopColor: "#2A84EE",
      borderLeftColor: "#2A84EE",
      borderRightColor: "#2A84EE",
      borderBottomColor: "#2A84EE",
    },
  },
});

const cardTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { plain, gray, borderBottom, borderTop },
});

export default cardTheme;
