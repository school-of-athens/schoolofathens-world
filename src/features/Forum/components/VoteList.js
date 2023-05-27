import VoteBinary from "./VoteBinary";
import VoteMultiple from "./VoteMultiple";
import { GridItem } from "@chakra-ui/react";

export default function ({ voteList }) {
  return (
    <GridItem
      colSpan={{ base: 12, md: 8, lg: 9 }}
      pt={12}
      pe={0}
      ps={{ base: 0, lg: 10 }}
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
