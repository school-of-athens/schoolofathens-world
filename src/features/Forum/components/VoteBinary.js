import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import getSortedObjectKeys from "../../../utils/getSortedObjectKeys";

export default function ({ voteData }) {
  const navigate = useNavigate();
  const options = getSortedObjectKeys(voteData.options);

  return (
    <Box
      onClick={() => navigate(`${voteData.id}`)}
      position="relative"
      borderTop="2px"
      _last={{
        borderBottom: "2px",
        borderColor: "gray.300",
      }}
      _hover={{
        backgroundColor: "gray.50",
      }}
      borderColor="gray.300"
      pt={7}
      pb={4}
      px={5}
      cursor="pointer"
    >
      <Heading
        size={{ base: "sm", lg: "md" }}
        textAlign="center"
        fontWeight="bold"
      >
        <span style={{ color: "var(--chakra-colors-gray-400)" }}>
          {voteData.type} |{" "}
        </span>
        {voteData.title}
      </Heading>

      <Box
        marginBottom="1rem"
        marginTop="0.75rem"
        width="100%"
        textAlign="center"
      >
        {voteData.totalVotes} votes | {voteData.totalOpinions} opinions
      </Box>

      {options.length && (
        <>
          <Box
            display="flex"
            fontWeight="bold"
            justifyContent="space-between"
            margin-bottom="1rem"
          >
            <Heading size={{ base: "xs", lg: "sm" }}>{options[0]}</Heading>
            <Heading size={{ base: "xs", lg: "sm" }}>{options[1]}</Heading>
          </Box>
          <Box
            mt={2}
            height="2rem"
            backgroundColor="transparent"
            width="100%"
            position="relative"
            borderRadius="full"
            overflow="hidden"
          >
            <Flex
              width={`${
                voteData.totalVotes > 0
                  ? Math.min(Math.max(
                      (voteData.options[options[0]].votes /
                        voteData.totalVotes) *
                        100,
                      15
                    ), 85)
                  : 50
              }%`}
              height="100%"
              bg={
                voteData.options[options[0]].votes >
                voteData.options[options[1]].votes
                  ? "blue.200"
                  : "gray.300"
              }
              position="absolute"
              left="0"
              paddingLeft={6}
              justifyContent="start"
              alignItems="center"
            >
              <Text m={0} fontSize={{base: "sm", md: "md", lg: "lg"}}>
                {voteData.totalVotes
                  ? Math.round(
                      (voteData.options[options[0]].votes /
                        voteData.totalVotes) *
                        100
                    )
                  : 0}
                %
              </Text>
            </Flex>

            <Flex
              width={`${
                voteData.totalVotes > 0
                  ? Math.min(Math.max(
                      (voteData.options[options[1]].votes /
                        voteData.totalVotes) *
                        100,
                      15
                    ), 85)
                  : 50
              }%`}
              height="100%"
              bg={
                voteData.options[options[1]].votes >=
                voteData.options[options[0]].votes
                  ? "blue.200"
                  : "gray.300"
              }
              position="absolute"
              right="0"
              paddingRight={6}
              justifyContent="end"
              alignItems="center"
            >
              <Text m={0} fontSize={{base: "sm", md: "md", lg: "lg"}}>
                {voteData.totalVotes
                  ? Math.round(
                      (voteData.options[options[1]].votes /
                        voteData.totalVotes) *
                        100
                    )
                  : 0}
                %
              </Text>
            </Flex>
          </Box>
        </>
      )}

      <Text mt={3} mb={0} fontSize="sm">
        {voteData.viewRestriction || voteData.voteRestriction
          ? "Restricted"
          : "Public"}{" "}
        {"  "} | {"  "}
        {voteData.dueDate ? "Due date: " + voteData.dueDate : "No due date"}
      </Text>
    </Box>
  );
}
