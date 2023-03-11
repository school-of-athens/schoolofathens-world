
import { useNavigate } from "react-router-dom";

export default function ({vote}) {

  const navigate = useNavigate();

  return (
    <div className="single-vote container" onClick={() => navigate(`/vote/${vote.id}`)}>
      <h2 className="text-center vote-title">
        {vote.title}
      </h2>

      <div className="vote-stats">
        {vote.totalVotes} votes | {vote.totalOpinions} opinions
      </div>
      <div className="vote-text justify-content-between">
        <h3>{vote.options[0].title}</h3>
        <h3>{vote.options[1].title}</h3>
      </div>
      <div className="vote-bar">
        <div className="vote-bar-left">
          <p>{vote.totalVotes? Math.round(vote.options[0].votes / vote.totalVotes * 100) : 0}% ({vote.options[0].votes}/{vote.totalVote || 0})</p>
        </div>
        <div className="vote-bar-right">
          <p>{vote.totalVotes? Math.round(vote.options[1].votes / vote.totalVote * 100) : 0}% ({vote.options[1].votes}/{vote.totalVote || 0})</p>
        </div>
      </div>

      <div className="vote-note">{vote.voteRestrictions.length? "Vote restrictions is currently not supported" : "Public"} | {vote.dueDate? "" : "No Due Date"}</div>
    </div>
  );
}
