import { Heading, Box, Flex, Container } from "@chakra-ui/react";
import { viewOfRomanForumCropped } from "../../../data/projectFiles";

export default function () {
  return (
    <Flex
      bgImage={viewOfRomanForumCropped}
      bgSize="cover"
      backdropFilter="brightness(0.75)"
      width="100%"
      alignItems="center"
    >
      <Box width="100%" backdropFilter="brightness(0.7)" py="6rem">
        <Container maxW="container.xl">
          <Heading color="white" fontSize="2.5rem">
            Forum Romanum
          </Heading>
        </Container>
      </Box>
    </Flex>
  );
}
