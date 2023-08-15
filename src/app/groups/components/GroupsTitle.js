import { Heading, Box, Flex, Link, Button, Input } from "@chakra-ui/react";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { schoolOfAthensCropped } from "@/data/projectFiles";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <Flex
      bgImage={schoolOfAthensCropped}
      bgSize="cover"
      width="100%"
      alignItems="center"
      borderBottom="3px solid"
      borderBottomColor="gray.300"
    >
      <Box
        width="100%"
        backdropFilter="brightness(0.7)"
        py={24}
        textAlign="center"
      >
        <Heading color="white" size="2xl">
          Find Your Groups
        </Heading>

        <Flex mt={8} className="container">
          <Input
            me={2}
            variant="primary"
            type="search"
            placeholder="Search (Disabled)"
          />
          <Button variant="blue" minW="0">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Flex>
        <Heading color="white" size="md" my={4}>OR</Heading>
        <Link as={NextLink} href="/groups/create">
          <Button variant="blue">
            Start a New Group
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
