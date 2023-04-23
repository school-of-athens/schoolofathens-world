import { Box } from "@chakra-ui/react";

const ForumBody = ({ children }) => {
  return (
    <Box className="container">
      <Box className="row vote-list mb-4">{children}</Box>
    </Box>
  );
};

export default ForumBody;
