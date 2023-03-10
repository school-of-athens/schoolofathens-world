export default function VoteToolbar() {
  return (
    <div className="vote-toolbar">
      <div className="vote-toolbar--sortby">
        <h5>Sort by</h5>
        <select className="form-select" aria-label="select">
          <option selected value="NEWEST">
            Newest
          </option>
          <option value="VOTES">Most Upvotes</option>
          <option value="OPINIONS">Oldest</option>
        </select>
      </div>
      <button
        type="button"
        className="btn btn-blue"
        data-bs-toggle="modal"
        data-bs-target="#newOpinion"
      >
        Share Your Opinion
      </button>
    </div>
  );
}
