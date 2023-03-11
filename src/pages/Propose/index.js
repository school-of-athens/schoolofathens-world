import "./Propose.css";
import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Icon1CircleFill,
  Icon2CircleFill,
  Icon3CircleFill,
  CheckCircleFill,
} from "react-bootstrap-icons";

import BasicInfo from "./BasicInfo";
import Options from "./Options";
import Restrictions from "./Restrictions";
import { AuthContext } from "../../config";
import Notice from "../../components/Notice";

export default function NewVote() {

  const { auth } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [newVote, setNewVote] = useState({
    title: "",
    introduction: "",
    topics: [],
    totalVotes: 0,
    totalOpinions: 0,
    options: [
      {
        title: "",
        summary: "",
        votes: 0,
      },
      {
        title: "",
        summary: "",
        votes: 0,
      },
    ],
    voteRestrictions: [],
    viewRestrictions: [],
    dueDate: null,
    userId: auth?.currentUser?.uid
  });

  if (!auth?.currentUser) {
    return (
      <Notice text={"You must sign in to propose a vote."} />
    );
  }
  else if (!auth?.currentUser.emailVerified) {
    return (
      <Notice text={"You must verify your email before proposing a vote. Please sign up again."} />
    );
  }

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
          {currentPage === 1 && (
            <BasicInfo
              nextPage={nextPage}
              setNewVote={setNewVote}
              newVote={newVote}
            />
          )}
          {currentPage === 2 && (
            <Options
              nextPage={nextPage}
              setNewVote={setNewVote}
              newVote={newVote}
            />
          )}
          {currentPage === 3 && (
            <Restrictions
              setCurrentPage={setCurrentPage}
              setNewVote={setNewVote}
              newVote={newVote}
            />
          )}
          {currentPage === 4 && <Navigate to="/forum" />}
        </div>
      </div>
    </div>
  );
}
