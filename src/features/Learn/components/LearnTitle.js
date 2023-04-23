import {
  Heading,
  Button,
  ButtonGroup,
  Box,
  Flex,
  Container,
  Text,
} from "@chakra-ui/react";
import useAuthRedirect from "../../../hooks/useAuthRedirect";
import { funeralOrnationCropped } from "../../../data/projectFiles";

export default function () {
  const authRedirect = useAuthRedirect();

  return (
    <Flex
      bgImage={funeralOrnationCropped}
      bgSize="cover"
      className="bg-dark"
      width="100%"
      alignItems="center"
    >
      <Box width="100%" backdropFilter="brightness(0.7)" py="5rem">
        <Box className="container" color="white">
          <Heading fontSize="2.5rem">Share Your Insights</Heading>
          <Heading size="md" mt={4} fontWeight="400">
            Take an idea, leave an idea.
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
}
