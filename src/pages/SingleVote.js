
import "../assets/SingleVote.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {
  VoteToolbar,
  VoteHead,
  NewOpinionModal,
  OpinionCard,
  useVoteAndOpinions,
} from "../features/SingleVote";
import { useDisclosure } from "@chakra-ui/react";

const SingleVote = () => {
  const { voteId } = useParams();
  const [voteData, opinionList] = useVoteAndOpinions(voteId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* NewOpinion is a modal that will pop up when the button is clicked */}
      <NewOpinionModal voteOptions={voteData.options} voteId={voteId} isOpen={isOpen} onClose={onClose} />
      {/* VoteHead contains all the information of the vote */}
      <VoteHead voteData={voteData} />
      {/* VoteToolbar contains a sort by element and a button to publish a new opinion */}
      <VoteToolbar onOpen={onOpen} />
      <div className="container vote-body">
        {/* OpinionList is a list with two rows */}
        {/* TODO: build a selector for which option to display */}
        <div className="row">
          <div className="col-12 col-md-6 opinion-list pe-4">
            {opinionList[0]
              ? opinionList[0].map((opinion) => {
                  return <OpinionCard {...opinion} />;
                })
              : "Loading..."}
          </div>
          <div className="col-12 col-md-6 opinion-list ps-4">
            {opinionList[1]
              ? opinionList[1].map((opinion) => {
                  return <OpinionCard {...opinion} />;
                })
              : "Loading..."}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVote;
