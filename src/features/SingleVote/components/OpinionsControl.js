import { NewOpinionButtton } from "../../NewOpinion";

export default function OpinionsControl({ onOpen }) {
  return (
    <div className="vote-toolbar">
      <div className="vote-toolbar--sortby">
        <h5>Sort by</h5>
        <select className="form-select" aria-label="select" defaultValue="NEWEST">
          <option value="NEWEST">
            Newest
          </option>
          <option value="VOTES">Most Upvotes</option>
          <option value="OPINIONS">Oldest</option>
        </select>
      </div>
      <NewOpinionButtton onOpen={onOpen} />
    </div>
  );
}
