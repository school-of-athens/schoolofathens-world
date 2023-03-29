import { useState } from "react";
import { acropolisAtAthens } from "../data/projectFiles";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

const Compose = () => {
  const [currentInput, setCurrentInput] = useState();
  const [input, setInput] = useState();

  return (
    <>
      <Box w="100%" position="relative">
        <Image
          bgColor="gray.200"
          w="100%"
          minH="50vh"
          maxH="75vh"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="75%">
            <input className="form-control" type="file" accept="image/*" />
          </Box>
        </Box>
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

      <Box className="container" my={8}>
        <Box bgColor="gray.200" minH="10rem" borderRadius="xl" p={5}>
          <FormControl>
            <FormLabel>Select your input type</FormLabel>
            <Select placeholder="Select option" bgColor="white" mb={5}>
              <option value="option1">Subtitle</option>
              <option value="option2">Paragraph</option>
              <option value="option3">Quote</option>
              <option value="option3">Image</option>
              <option value="option3">Video</option>
              <option value="option3">Podcast</option>
            </Select>
            <Box>
              <Input value="Here's your subtitle" bgColor="white" />
            </Box>
            <Box>
              <Textarea bgColor="white" mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Textarea>
            </Box>
            <Box>
              <Textarea>Quote content</Textarea>
              <Input placeholder="author" />
              <Input placeholder="source" />
            </Box>
            <Box>
              <input className="form-control" type="file" accept="image/*" />
            </Box>
            <Box>
              <Input placeholder="video link" />
            </Box>
            <Box>
              <input className="form-control" type="file" accept="image/*" />
            </Box>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Compose;
