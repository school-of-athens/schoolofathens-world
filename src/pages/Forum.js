import { Progress } from "@chakra-ui/react";
import "../assets/Forum.css";
import {
  ForumTitle,
  ForumBody,
  VoteList,
  QuerySelector,
  useVoteList,
} from "../features/Forum";

const Forum = () => {
  const [voteList, isLoading] = useVoteList();

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
        <QuerySelector />
        {voteList ? <VoteList voteList={voteList} /> : <></>}
      </ForumBody>
    </>
  );
};

export default Forum;
