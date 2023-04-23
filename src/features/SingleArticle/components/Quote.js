import { Box, Flex, Text } from "@chakra-ui/react";

const Quote = () => {
  return (
    // <div class="quote">
    //   <i class="fa-solid fa-quote-left fa-2xl"></i>
    //   <p class="quote-text">To be, or not to be, that is the question.</p>
    //   <div class="quote-author-source">
    //     <p>
    //       <span class="quote-author">William Shakespeare</span>,
    //       <span class="quote-source">Hamlet</span>.
    //     </p>
    //   </div>
    // </div>
    <Flex
      borderLeftWidth="0.5rem"
      borderColor="gray.500"
      px={8}
      py={4}
      bgColor="gray.100"
      flexDir="column"
      mt={6}
      mb={5}
    >
      <Text lineHeight="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Text alignSelf="end">
        Author, <i>Source</i>
      </Text>
    </Flex>
  );
};

export default Quote;
