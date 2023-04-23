import VoteBinary from "./VoteBinary";
import VoteMultiple from "./VoteMultiple";
import { Box } from "@chakra-ui/react";

export default function ({ voteList }) {
  return (
    <Box className="col-lg-9 col-md-8 col-12" pt={12} pe={0} ps={{base: 0, lg: 10}}>
      {voteList.map((vote) => {
        return <VoteBinary vote={vote} />;
      })}
    </Box>
  );
}
