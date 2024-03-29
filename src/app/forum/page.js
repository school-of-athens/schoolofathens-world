"use client";

import VoteList from "./components/VoteList";
import useVoteList from "./hooks/useVoteList";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ForumContainer from "./components/ForumContainer";
import ForumTitle from "./components/ForumTitle";

const Forum = () => {
  const [voteList, isLoading] = useVoteList();
  const { width } = useWindowDimensions();

  return (
    <>
      <ForumContainer>
        <ForumTitle />
        <VoteList voteList={voteList} isLoading={isLoading} />
      </ForumContainer>
    </>
  );
};

export default Forum;
