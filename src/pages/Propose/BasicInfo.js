



export default function({ nextPage, setNewVote, newVote }) {





    return (
      <div className="new-vote--form px-2 px-md-5">
        <h1 className="">Propose a New Vote</h1>
        <label for="vote-title" className="form-label">
          What's the Title of Your Vote?
        </label>
        <input className="form-control" type="text" id="vote-title" onChange={(e) => setNewVote((prev) => {return {...prev, title: e.target.value}})} value={newVote.title}/>
        <label for="introduction" className="form-label">
          Give a Brief Introduction
        </label>
        <textarea className="form-control" id="introduction" rows="5" onChange={(e) => setNewVote((prev) => {return {...prev, introduction: e.target.value}})} value={newVote.introduction}></textarea>
        <div className="text-center">
          <button
            type="button"
            className="btn submit--btn px-4"
            onClick={() => nextPage()}
          >
            Next
          </button>
        </div>
      </div>
    );
  };