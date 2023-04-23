import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Flex,
  Heading,
  Select,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

const LearnControl = () => {
  const authRedirect = useAuthRedirect();

  return (
    <Flex
      justifyContent="space-between"
      borderTop="2px"
      borderBottom="2px"
      borderColor="gray.300"
      px={8}
      py={3}
      position="sticky"
      top="4rem"
      zIndex={1}
      bgColor="white"
    >
      <Box>
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search (Disabled)"
            disabled
          />
          <Button colorScheme="blue">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
          <Heading size="sm" whiteSpace="nowrap" ms={4} me={3}>
            Sort by
          </Heading>
          <Select defaultValue="NEWEST">
            <option value="NEWEST">Newest</option>
            <option value="VOTES">Most Upvotes</option>
            <option value="OPINIONS">Oldest</option>
          </Select>
        </Flex>
      </Box>
      <ButtonGroup spacing={4} alignSelf="end">
        <Button variant="gray">Community Rules</Button>
        <Button variant="blue" onClick={() => authRedirect("compose")}>
          Compose
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default LearnControl;
