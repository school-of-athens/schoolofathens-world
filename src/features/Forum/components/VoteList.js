import VoteBinary from "./VoteBinary";
import VoteMultiple from "./VoteMultiple";

export default function ({ voteList }) {
  return (
    <div className="col-lg-9 col-md-8 col-12 pt-5">
      {voteList.map((vote) => {
        return <VoteBinary vote={vote} />;
      })}
    </div>
  );
}
