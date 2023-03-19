import { AuthContext } from "../../config";
import { useContext, useState } from "react";
import { signOut } from "firebase/auth";

const Modal = ({ title, message }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Test Tutke
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">afdasfasfasfdsafadsf</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function () {
  const [modals, setModals] = useState([]);

  const handleClick = () => {
    setModals((prev) => [
      ...prev,
      { title: "Test Title", message: "Test Content" },
    ]);
  };

  return (
    <>
      <div
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
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
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <label for="opinion-title" className="form-label">
                  Give a Title of Your Opinion (optional)
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
      </div>
    </>
  );
}
