import "../assets/SingleVote.css";
import { useParams } from "react-router-dom";
import {
  OpinionsControl,
  VoteHead,
  OpinionList,
  useVoteAndOpinions,
} from "../features/SingleVote";
import { NewOpinionModal } from "../features/NewOpinion";
import { useDisclosure } from "@chakra-ui/react";
import useScrollToTop from "../hooks/useScrollToTop";

const SingleVote = () => {
  const { voteId } = useParams();
  const [voteData, opinionList] = useVoteAndOpinions(voteId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useScrollToTop();

  return (
    <>
      {voteData && (
        <>
          {/* NewOpinion is a modal that will pop up when the button is clicked */}
          <NewOpinionModal
            voteOptions={Object.keys(voteData.options).sort()}
            voteId={voteId}
            isOpen={isOpen}
            onClose={onClose}
          />

          {/* VoteHead contains all the information of the vote */}
          <VoteHead voteData={voteData} />
          {/* VoteToolbar contains a sort by element and a button to publish a new opinion */}
          <OpinionsControl onOpen={onOpen} />
          <OpinionList
            voteOptions={Object.keys(voteData.options).sort()}
            opinionList={opinionList}
          />
        </>
      )}
    </>
  );
};

export default SingleVote;
