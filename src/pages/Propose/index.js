import "./Propose.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Icon1CircleFill,
  Icon2CircleFill,
  Icon3CircleFill,
  CheckCircleFill,
} from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageOne = ({ nextPage }) => {
  return (
    <div className="new-vote--form px-2 px-md-5">
      <h1 className="">Propose a New Vote</h1>
      <label for="title" className="form-label">
        What's the Title of Your Vote?
      </label>
      <input className="form-control" type="text" id="title" />
      <label for="introduction" className="form-label">
        Give a Brief Introduction
      </label>
      <textarea className="form-control" id="introduction" rows="5"></textarea>
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

const PageTwo = ({ nextPage }) => {
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
      <input className="form-control" type="text" id="option1" />
      <label for="introduction" className="form-label">
        Give a Brief Summary of Opinions
      </label>
      <textarea className="form-control" id="introduction" rows="5"></textarea>
      <label for="option2" className="form-label">
        Vote Option 2
      </label>
      <input className="form-control" type="text" id="option2" />
      <label for="introduction" className="form-label">
        Give a Brief Summary of Opinions
      </label>
      <textarea className="form-control" id="introduction" rows="5"></textarea>
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

const PageThree = ({ nextPage }) => {
  return (
    <div className="new-vote--form px-2 px-md-5">
      <h1 className="">Vote & View Restrictions</h1>
      <div class="alert alert-warning d-flex align-items-center" role="alert">
        <FontAwesomeIcon
          icon="fa-solid fa-circle-exclamation"
          className="me-3"
        />
        Sorry, this function is still under development. If you have set up your vote, please click propose.
      </div>

      <label for="vote-restriction" className="form-label">
        View Restrictions
      </label>
      <select className="form-select" disabled>
        <option selected>Public</option>
      </select>

      <label for="vote-restriction" className="form-label">
        Vote Restrictions
      </label>
      <select className="form-select" disabled>
        <option selected>Public</option>
      </select>

      <label for="options" className="form-label">
        Due Date
      </label>
      <input className="form-control" type="date" id="options" disabled/>
      <div className="text-center">
        <button
          type="button"
          className="btn submit--btn px-4"
          onClick={() => nextPage()}
        >
          Propose
        </button>
      </div>
    </div>
  );
};

export default function NewVote() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="container-fluid new-vote py-5 px-2 px-md-5">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-12">
          <div className="todo-list">
            <div className="todo-list--item" onClick={(e) => setCurrentPage(1)}>
              {currentPage > 1 ? (
                <CheckCircleFill color="#007bff" size={30} />
              ) : (
                <Icon1CircleFill color="#007bff" size={30} />
              )}
              <h3>Basic Info</h3>
            </div>

            <div className="todo-list--item" onClick={(e) => setCurrentPage(2)}>
              {currentPage > 2 ? (
                <CheckCircleFill color="#007bff" size={30} />
              ) : (
                <Icon2CircleFill color="#007bff" size={30} />
              )}
              <h3>Options</h3>
            </div>

            <div className="todo-list--item" onClick={(e) => setCurrentPage(3)}>
              {currentPage > 3 ? (
                <CheckCircleFill color="#007bff" size={30} />
              ) : (
                <Icon3CircleFill color="#007bff" size={30} />
              )}
              <h3>Restrictions</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-12">
          {currentPage === 1 && <PageOne nextPage={nextPage} />}
          {currentPage === 2 && <PageTwo nextPage={nextPage} />}
          {currentPage === 3 && <PageThree nextPage={nextPage} />}
          {currentPage === 4 && <Navigate to="/forum" />}
        </div>
      </div>
    </div>
  );
}
