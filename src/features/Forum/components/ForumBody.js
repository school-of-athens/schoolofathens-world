import { Box, Container, Grid } from "@chakra-ui/react";

const ForumBody = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(12, 1fr)" className="vote-list mb-4">
        {children}
      </Grid>
    </Container>
  );
};

export default ForumBody;
