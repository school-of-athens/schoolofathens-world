import { useState } from "react";
import { acropolisAtAthens } from "../data/projectFiles";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

const Compose = () => {
  const [inputOption, setInputOption] = useState("p");
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
          src={acropolisAtAthens}
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
        {/* <Input border="none !important" value="Here's Your Title">
        border: none !important;
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    border-top: 3px solid !important;
    border-bottom: 3px solid !important;
    border-radius: 0;
    line-height: 1.4;
    text-align: center;
        </Input> */}
      </Flex>

      <Box className="container" my={8}>
        <Box
          bgColor="gray.200"
          minH="10rem"
          borderRadius="xl"
          p={5}
          textAlign="center"
        >
          <FormControl>
            <FormLabel>Select your input type</FormLabel>
            <Select
              placeholder="Select option"
              bgColor="white"
              my={3}
              value={inputOption}
              onChange={(e) => setInputOption(e.target.value)}
            >
              <option value="st">Subtitle</option>
              <option value="p">Paragraph</option>
              <option value="q">Quote</option>
              <option value="img">Image</option>
              <option value="v">Video</option>
              <option value="ado">Audio</option>
            </Select>
            {inputOption === "st" && (
              <Box>
                <Input value="Here's your subtitle" bgColor="white" />
              </Box>
            )}
            {inputOption === "p" && (
              <Box>
                <Textarea
                  bgColor="white"
                  mt={2}
                  onChange={(e) => {
                    setTimeout(() => {
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }, 0);
                  }}
                  overflow="hidden"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Textarea>
              </Box>
            )}
            {inputOption === "q" && (
              <Box>
                <Textarea bgColor="white">Quote content</Textarea>
                <Input bgColor="white" placeholder="author" mt={2} />
                <Input bgColor="white" placeholder="source" mt={2} />
              </Box>
            )}
            {inputOption === "img" && (
              <Box>
                <input className="form-control" type="file" accept="image/*" />
              </Box>
            )}
            {inputOption === "v" && (
              <Box>
                <Input bgColor="white" placeholder="Video Link" />
              </Box>
            )}
            {inputOption === "ado" && (
              <Box>
                <input className="form-control" type="file" accept="image/*" />
              </Box>
            )}
          </FormControl>
          <Button variant="blue" mt={4}>
            Add
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Compose;
