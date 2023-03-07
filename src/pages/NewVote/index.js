import "./NewVote.css";

export default function NewVote() {
  return (
    <div className="container new-vote py-5 px-2 px-md-5">
      
      <div className="container new-vote--form px-2 px-md-5">
      <h1 className="">This is a new vote</h1>
        <label for="title" class="form-label">
          What's the Title of Your Vote?
        </label>
        <input class="form-control" type="text" id="title" />
        <label for="introduction" class="form-label">
          Give a Brief Introduction
        </label>
        <textarea class="form-control" id="introduction" rows="5"></textarea>

        <label for="options" class="form-label">
          Vote Options
        </label>
        <input class="form-control" type="text" id="options" />
        <label for="vote-restriction" class="form-label">
          View Restrictions
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Public</option>
          <option value="1">Members of CM</option>
          <option value="2">Members of AP CSA</option>
          <option value="3">Members of Nowhere</option>
        </select>

        <label for="vote-restriction" class="form-label">
          Vote Restrictions
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Public</option>
          <option value="1">Members of CM</option>
          <option value="2">Members of AP CSA</option>
          <option value="3">Members of Nowhere</option>
        </select>

        <label for="options" class="form-label">
          Due Date
        </label>
        <input class="form-control" type="date" id="options" />
        <div className="text-center">
        <button type="button" class="btn submit--btn px-4"> Submit
        </button>
        </div>
                
         
      </div>
    </div>
  );
}
