"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function PostType({ postType, setPostType, setEditor }) {
  return (
    <Container
      maxW="container.sm"
      minH="calc(100vh - 8rem)"
      w="full"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading>Post Type: </Heading>
      <Select
        variant="primary"
        mt={4}
        value={postType}
        onChange={(e) => {
          setPostType(e.target.value);
        }}
      >
        <option value="DISCUSSION">Discussion</option>
        <option value="ARTICLE">Article</option>
      </Select>
      <Box textAlign="center">
        <Button
          variant="blue"
          mt={4}
          onClick={() => {
            setEditor(true);
          }}
        >
          Next
        </Button>
      </Box>
      <Box bg="blue.100" mt={4} p={4} borderRadius="md">
        <Heading size="md" mb={2}>
          What's the difference?
        </Heading>
        <Text mb={2}>
          Discussion posts are for asking questions and sharing opinions.
        </Text>
        <Text m={0}>
          Article posts are for sharing articles and other resources.
        </Text>
      </Box>
    </Container>
  );
}
