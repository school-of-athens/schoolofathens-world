import { Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useObjectKeys from "../../../hooks/useObjectKeys";

export default function ({ vote }) {
  const navigate = useNavigate();
  const voteOptions = useObjectKeys(vote.options);

  return (
    <>
      {voteOptions && (
        <Box
          onClick={() => navigate(`${vote.id}`)}
          borderTop="2px"
          _last={{
            borderBottom: "2px",
            borderColor: "gray.300",
          }}
          _hover={{
            backgroundColor: "gray.50"
          }}
          borderColor="gray.300"
          py={7}
          px={5}
          cursor="pointer"
        >
          <Heading
            size={{ base: "sm", lg: "md" }}
            className="text-center vote-title"
          >
            {vote.title}
          </Heading>

          <Box className="vote-stats">
            {vote.totalVotes} votes | {vote.totalOpinions} opinions
          </Box>

          <Box className="vote-text">
            <Heading size={{ base: "xs", lg: "sm" }}>{voteOptions[0]}</Heading>
            <Heading size={{ base: "xs", lg: "sm" }}>{voteOptions[1]}</Heading>
          </Box>

          <Box className="vote-bar">
            <Box className="vote-bar-left">
              <p>
                {vote.totalVotes
                  ? Math.round(
                      (vote.options[voteOptions[0]].votes / vote.totalVotes) *
                        100
                    )
                  : 0}
                % ({vote.options[voteOptions[0]].votes}/{vote.totalVote || 0})
              </p>
            </Box>
            <Box className="vote-bar-right">
              <p>
                {vote.totalVotes
                  ? Math.round(
                      (vote.options[voteOptions[1]].votes / vote.totalVote) *
                        100
                    )
                  : 0}
                % ({vote.options[voteOptions[1]].votes}/{vote.totalVote || 0})
              </p>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
