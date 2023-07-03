import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spinner,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import useToxicity from "../hooks/useToxicity";
import { useState } from "react";

function TextToxicity() {
  const [inputText, setInputText] = useState("");
  const [textToCheck, setTextToCheck] = useState("");
  const { loading, isToxic, setThreshold, threshold } =
    useToxicity(textToCheck);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setTextToCheck(inputText);
  };

  return (
    <Box bg="gray.200">
      <Flex
        className="container"
        minH="calc(100vh - 8rem)"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          bg={loading ? "blue.100" : isToxic ? "red.100" : "green.100"}
          p={8}
          borderRadius="lg"
          border="2px solid"
          borderColor={loading ? "blue.300" : isToxic ? "red.300" : "green.300"}
        >
          <Heading mb={8}>Check if your text is toxic</Heading>
          <FormControl>
            <FormLabel htmlFor="threshold-input" ms={1}>
              Set the threshold (0-1):
            </FormLabel>
            <NumberInput
              variant="primary"
              value={threshold}
              onChange={(value) => setThreshold(value)}
              max={1}
              min={0}
              step={0.1}
              clampValueOnBlur={false}
            >
              <NumberInputField
                background="white"
                border="2px solid"
                borderColor="gray.300"
                _hover={{
                  borderColor: "gray.400",
                }}
                _focus={{
                  borderColor: "blue.400",
                }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel htmlFor="text-input" mt={3} ms={1}>Enter your message:</FormLabel>
            <Flex justifyContent="space-between" mb={4}>
              <Input
                variant="primary"
                type="text"
                id="text-input"
                value={inputText}
                autoComplete="off"
                onChange={(e) => setInputText(e.target.value)}
                me={2}
              />
              <Button variant="light" px={5} onClick={handleButtonClick}>
                Check toxicity
              </Button>
            </Flex>
            {loading && (
              <Flex alignItems="center" color="blue.700">
                <Spinner me={2} />
                Loading...
              </Flex>
            )}
            {!loading && !isToxic && (
              <Flex alignItems="center" color="green.700">
                <CheckIcon me={2} />
                Your text is clean!
              </Flex>
            )}
            {!loading && isToxic && (
              <Flex alignItems="center" color="red.700">
                <CloseIcon me={2} />
                Your text is toxic!
              </Flex>
            )}
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
}

export default TextToxicity;
