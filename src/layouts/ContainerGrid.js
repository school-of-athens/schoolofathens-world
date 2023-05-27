
import { Container, Grid } from "@chakra-ui/react";

function ContainerGrid({ children }) {
    return (
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(12, 1fr)" pb={4}>
            {children}
          </Grid>
        </Container>
    );
  };

export default ContainerGrid;