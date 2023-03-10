
import VoteBinary from "./VoteBinary";
import VoteMultiple from "./VoteMultiple";

export default function () {
  return (
        <div className="col-lg-9 col-md-8 col-12 pe-4">
          <VoteBinary />
          <VoteMultiple />
          <VoteBinary />
          <VoteMultiple />
          <VoteBinary />
          <VoteMultiple />
        </div>
  );
}
