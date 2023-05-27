import VoteBinary from "./VoteBinary";
import VoteMultiple from "./VoteMultiple";
import { GridItem } from "@chakra-ui/react";

export default function ({ voteList }) {
  return (
    <GridItem
      colSpan={{ base: 12, md: 8 }}
      pt={12}
      px={0}
      minH="50vh"
    >
      {voteList.map((voteData) => {
        return Object.keys(voteData.options).length > 2 ? (
          <VoteMultiple voteData={voteData} key={voteData.id} />
        ) : (
          <VoteBinary voteData={voteData} key={voteData.id} />
        );
      })}
    </GridItem>
  );
}
