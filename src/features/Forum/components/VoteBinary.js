import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useObjectKeys from "../../../hooks/useObjectKeys";

export default function ({ vote }) {
  const navigate = useNavigate();
  const voteOptions = useObjectKeys(vote.options);

  return (
    <>
      {voteOptions && (
        <div
          className="single-vote container"
          onClick={() => navigate(`${vote.id}`)}
        >
          {/* Vote title */}
          <Heading size="lg" className="text-center vote-title">
            {vote.title}
          </Heading>

          {/* vote stats: how many people has voted and shared their opinions */}
          <div className="vote-stats">
            {vote.totalVotes} votes | {vote.totalOpinions} opinions
          </div>

          {/* options title */}
          <div className="vote-text">
            <Heading size="md">{voteOptions[0]}</Heading>
            <Heading size="md">{voteOptions[1]}</Heading>
          </div>

          {/* vote bar */}
          <div className="vote-bar">
            <div className="vote-bar-left">
              <p>
                {vote.totalVotes
                  ? Math.round(
                      (vote.options[voteOptions[0]].votes / vote.totalVotes) *
                        100
                    )
                  : 0}
                % ({vote.options[voteOptions[0]].votes}/{vote.totalVote || 0})
              </p>
            </div>
            <div className="vote-bar-right">
              <p>
                {vote.totalVotes
                  ? Math.round(
                      (vote.options[voteOptions[1]].votes / vote.totalVote) *
                        100
                    )
                  : 0}
                % ({vote.options[voteOptions[1]].votes}/{vote.totalVote || 0})
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
