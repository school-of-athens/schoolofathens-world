

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ({ nextPage, setNewVote, newVote }) {
    return (
      <div className="new-vote--form px-2 px-md-5">
        <h1 className="">Set Up the Options of Your Vote</h1>
        <div class="alert alert-warning d-flex align-items-center" role="alert">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-exclamation"
            className="me-3"
          />
          Sorry, currently we only support vote with two options.
        </div>
        <label for="option1" className="form-label">
          Vote Option 1
        </label>
        <input className="form-control" type="text" id="option1" value={newVote.options[0].title} onChange={(e) => setNewVote((prev) => {
            const newOption = prev.options;
            newOption[0].title = e.target.value;
            return {...prev, options: newOption};
        })}/>
        <label for="introduction" className="form-label">
          Give a Brief Summary of Opinions
        </label>
        <textarea className="form-control" id="introduction" rows="5" onChange={(e) => setNewVote((prev) => {
            const newOption = prev.options;
            newOption[0].summary = e.target.value;
            return {...prev, options: newOption};
        })}>{newVote.options[0].summary}</textarea>
        <label for="option2" className="form-label">
          Vote Option 2
        </label>
        <input className="form-control" type="text" id="option2" value={newVote.options[1].title} onChange={(e) => setNewVote((prev) => {
            const newOption = prev.options;
            newOption[1].title = e.target.value;
            return {...prev, options: newOption};
        })} />
        <label for="introduction" className="form-label">
          Give a Brief Summary of Opinions
        </label>
        <textarea className="form-control" id="introduction" rows="5" onChange={(e) => setNewVote((prev) => {
            const newOption = prev.options;
            newOption[1].summary = e.target.value;
            return {...prev, options: newOption};
        })}>{newVote.options[1].title}</textarea>
        <div className="text-center">
        <button
            type="button"
            className="btn btn-primary px-4 me-3 submit--btn"
            disabled
          >
            Add Option <i>(disabled)</i>
          </button>
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