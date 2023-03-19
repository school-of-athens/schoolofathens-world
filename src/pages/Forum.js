import "../assets/Forum.css";
import {
  ForumTitle,
  ForumBody,
  VoteList,
  QuerySelector,
  useVoteList
} from "../features/Forum";
import { useState, useEffect } from "react";

const Forum = () => {

    const voteList = useVoteList();

  return (
    <>
      <ForumTitle />
      <ForumBody>
      <QuerySelector />
        <VoteList voteList={voteList} />
      </ForumBody>
    </>
  );
};

export default Forum;
