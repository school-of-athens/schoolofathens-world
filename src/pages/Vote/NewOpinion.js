import { AuthContext } from "../../config";
import { useContext, useState } from "react";

export default function ({voteOptions}) {
  return (
    <div
      className="modal fade"
      id="newOpinion"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Share Your Opinion
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label for="vote-option" className="form-label">
              I support:
            </label>
            <select className="form-select" id="vote-option">
              <option selected>Select which side you support...</option>
              <option>{voteOptions[0].title}</option>
              <option>{voteOptions[1].title}</option>
            </select>
            <label for="opinion-title" className="form-label">
              Give a title of your opinion (optional)
            </label>
            <input className="form-control" type="text" id="opinion-title" />
            <label for="opinion-text" className="form-label">
              Share your opinion with us
            </label>
            <textarea
              className="form-control"
              id="opinion-text"
              rows="5"
            ></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Discard
            </button>
            <button type="button" className="btn btn-primary">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
