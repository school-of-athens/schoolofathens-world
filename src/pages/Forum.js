import { Progress } from "@chakra-ui/react";
import {
  ForumTitle,
  ForumBody,
  VoteList,
  QuerySelector,
  useVoteList,
} from "../features/Forum";
import ContainerGrid from "../layouts/ContainerGrid";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Forum = () => {
  const [voteList, isLoading] = useVoteList();
  const { width } = useWindowDimensions();

  return (
    <>
      {isLoading && (
        <Progress
          size="xs"
          colorScheme="blue"
          isIndeterminate
          position="sticky"
          top="4rem"
          zIndex={10}
        />
      )}
      <ForumTitle />
      <ContainerGrid>
        {width > 768 ? (
          <>
            {voteList ? <VoteList voteList={voteList} /> : <></>}
            <QuerySelector />
          </>
        ) : (
          <>
            <QuerySelector />
            {voteList ? <VoteList voteList={voteList} /> : <></>}
          </>
        )}
      </ContainerGrid>
    </>
  );
};

export default Forum;
