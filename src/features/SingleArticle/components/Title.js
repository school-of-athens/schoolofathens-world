import { acropolisAtAthens } from "../../../data/projectFiles";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const Title = () => {
  return (
    <>
      <Box w="100%">
        <Image
          src={acropolisAtAthens}
          w="100%"
          maxH="50vh"
          objectFit="cover"
        />
      </Box>
      <Flex justifyContent="center">
        <Heading
          maxW="75%"
          my={4}
          px={5}
          py={1}
          size="2xl"
          textAlign="center"
          lineHeight="1.4"
          borderLeft="none"
          borderRight="none"
          borderColor="gray.300"
          borderWidth="0.25rem"
        >
          Here's Your Title
        </Heading>
      </Flex>
    </>
  );
};

export default Title;
