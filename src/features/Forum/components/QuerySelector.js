import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Heading, Select, Stack, Flex } from "@chakra-ui/react";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

export default function () {
  const authRedirect = useAuthRedirect();

  return (
    <Box
      className="col-lg-3 col-md-4 col-12 py-4"
      px={{ base: 5, md: 7, xl: 10 }}
    >
      <Box className="query-selector">
        <Heading size="sm" my={2} ms={1}>
          Search
        </Heading>

        <Flex mb={5}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search (Disabled)"
            disabled
          />
          <Button colorScheme="blue">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Flex>
        <Heading size="sm" my={2} ms={1}>
          Sort by
        </Heading>
        <Select defaultValue="DEFAULT" mb={5}>
          <option value="DEFAULT">Default</option>
          <option value="NEWEST">Newest</option>
          <option value="VOTES">Votes</option>
          <option value="OPINIONS">Opinions</option>
          <option value="DUE_DATE">Due Date</option>
        </Select>

        <Stack direction="column" alignItems="start" my={2} spacing={3}>
          <Button variant="gray">Forum Rules</Button>
          <Button variant="blue" onClick={() => authRedirect("/forum/new")}>
            Propose a Vote
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
