import { Container, Grid, GridItem, Text, Box } from "@chakra-ui/react";
import OpinionCard from "./OpinionCard";
import getSortedObjectKeys from "../../../utils/getSortedObjectKeys";

const OpinionList = ({ voteData, opinionsData }) => {
  const options = getSortedObjectKeys(voteData.options);

  return (
    <Box width="100%" bg="gray.50">
      <Container maxW="container.xl">
        {/* OpinionList is a list with two rows */}
        {/* TODO: build a selector for which option to display */}
        <Grid templateColumns="repeat(12, 1fr)" minH="40vh" mb={2}>
          <GridItem
            colSpan={{ base: 12, md: 6 }}
            my={8}
            borderRight="3px dashed"
            borderColor="gray.200"
            me="-1.5px"
            pe={6}
          >
            {opinionsData[options[0]].length ? (
              opinionsData[options[0]].map((opinion) => {
                return <OpinionCard opinion={opinion} key={opinion.id} />;
              })
            ) : (
              <Text textAlign="center" mt={6}>
                There is currently no opinion supporting this option.
              </Text>
            )}
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }} my={8} ps={6}>
            {opinionsData[options[1]].length ? (
              opinionsData[options[1]].map((opinion) => {
                return <OpinionCard opinion={opinion} key={opinion.id} />;
              })
            ) : (
              <Text textAlign="center" mt={6}>
                There is currently no opinion supporting this option.
              </Text>
            )}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default OpinionList;
