import { Progress } from "@chakra-ui/react";
import "../assets/Forum.css";
import {
  ForumTitle,
  ForumBody,
  VoteList,
  QuerySelector,
  useVoteList,
} from "../features/Forum";
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
          className="under-nav"
        />
      )}
      <ForumTitle />
      <ForumBody>
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
      </ForumBody>
    </>
  );
};

export default Forum;
