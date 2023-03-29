import { Image, Box, Flex, Text } from "@chakra-ui/react";
import { acropolisAtAthens } from "../../../data/projectFiles";

const Img = () => {
  return (
    <Flex className="container" alignItems="center" flexDirection="column"  my={5}>
      <Image src={acropolisAtAthens} objectFit="cover" borderRadius="0.5rem" />
      <Text color="gray.500" fontSize="sm" mt={2}>Image Caption: small</Text>
    </Flex>
  );
};

export default Img;
