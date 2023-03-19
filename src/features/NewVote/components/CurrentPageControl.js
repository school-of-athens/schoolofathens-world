
import VoteBasicInfo from "./VoteBasicInfo";
import VoteOptions from "./VoteOptions";
import VoteRestrictions from "./VoteRestrictions";
import { Navigate } from "react-router-dom";

const CurrentPageControl = ({ currentPage, setCurrentPage, newVote, setNewVote }) => {
  return (
    <div className="col-lg-9 col-md-8 col-12">
      {currentPage === 1 && (
        <VoteBasicInfo
          setCurrentPage={setCurrentPage}
          setNewVote={setNewVote}
          newVote={newVote}
        />
      )}
      {currentPage === 2 && (
        <VoteOptions
          setCurrentPage={setCurrentPage}
          setNewVote={setNewVote}
          newVote={newVote}
        />
      )}
      {currentPage === 3 && (
        <VoteRestrictions
          setCurrentPage={setCurrentPage}
          setNewVote={setNewVote}
          newVote={newVote}
        />
      )}
      {currentPage === 4 && <Navigate to="/forum" />}
    </div>
  );
};

export default CurrentPageControl;
