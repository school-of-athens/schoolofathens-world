import "./Forum.css";

import ForumTitle from "./ForumTitle";
import VoteList from "./VoteList";
import QuerySelector from "./QuerySelector";

export default function () {
  return (
    <>
      <ForumTitle />
      <div className="row px-3 vote-list mb-4">
        <QuerySelector />
        <VoteList />
      </div>
    </>
  );
}
