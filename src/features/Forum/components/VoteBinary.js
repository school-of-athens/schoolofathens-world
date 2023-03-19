
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ({vote}) {

  const navigate = useNavigate();

  return (
    // the container of the vote preview is linked to its individual page
    <div className="single-vote container" onClick={() => navigate(`${vote.id}`)}>

      {/* Vote title */}
      <Heading size="lg" className="text-center vote-title">{vote.title}</Heading>

      {/* vote stats: how many people has voted and shared their opinions */}
      <div className="vote-stats">
        {vote.totalVotes} votes | {vote.totalOpinions} opinions
      </div>

      {/* options title */}
      <div className="vote-text">
        <Heading size="md">{vote.options[0].title}</Heading>
        <Heading size="md">{vote.options[1].title}</Heading>
      </div>

      {/* vote bar */}
      <div className="vote-bar">
        <div className="vote-bar-left">
          <p>{vote.totalVotes? Math.round(vote.options[0].votes / vote.totalVotes * 100) : 0}% ({vote.options[0].votes}/{vote.totalVote || 0})</p>
        </div>
        <div className="vote-bar-right">
          <p>{vote.totalVotes? Math.round(vote.options[1].votes / vote.totalVote * 100) : 0}% ({vote.options[1].votes}/{vote.totalVote || 0})</p>
        </div>
      </div>
    </div>
  );
}
