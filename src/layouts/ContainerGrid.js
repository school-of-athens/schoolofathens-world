import { Box, Grid } from "@chakra-ui/react";

function ContainerGrid({ children }) {
  return (
    <Box className="container">
      <Grid templateColumns="repeat(12, 1fr)" pb={4}>
        {children}
      </Grid>
    </Box>
  );
}

export default ContainerGrid;
