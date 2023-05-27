import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  Select,
  Stack,
  Flex,
  GridItem,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

export default function () {
  const authRedirect = useAuthRedirect();

  return (
    <GridItem
      colSpan={{ base: 12, md: 4, lg: 3 }}
      py={4}
      px={{ base: 5, md: 7, xl: 10 }}
    >
      <Box position="sticky" top="6rem">
        <FormControl mt={4}>
          <FormLabel>Search</FormLabel>
          <Flex mb={5}>
            <Input
              me={2}
              variant="primary"
              type="search"
              placeholder="Search (Disabled)"
              isDisabled
            />
            <Button colorScheme="blue">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Flex>
          <FormLabel>Sort by</FormLabel>
          <Select variant="primary" defaultValue="DEFAULT" mb={5} isDisabled>
            <option value="DEFAULT">Default</option>
            <option value="NEWEST">Newest</option>
            <option value="VOTES">Votes</option>
            <option value="OPINIONS">Opinions</option>
            <option value="DUE_DATE">Due Date</option>
          </Select>
        </FormControl>

        <Stack direction="column" alignItems="start" my={2} spacing={3}>
          <Button variant="gray">Forum Rules</Button>
          <Button variant="blue" onClick={() => authRedirect("/forum/new")}>
            Propose a Vote
          </Button>
        </Stack>
      </Box>
    </GridItem>
  );
}
