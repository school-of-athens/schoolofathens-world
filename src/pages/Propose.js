import "../assets/Propose.css";
import { useState, useContext, useEffect } from "react";
import Bulletin from "../components/Bulletin";
import { AuthContext } from "../context/AuthContext";
import {
  CurrentPageControl,
  StepControl,
  useNewVote,
} from "../features/NewVote";

const Propose = () => {
  const { auth, authRedirect } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [newVote, setNewVote] = useNewVote();

  useEffect(() => {
    authRedirect();
    setNewVote((prev) => {
      return { ...prev, userId: auth?.currentUser?.uid };
    });
  }, []);

  return (
    <div className="container-fluid new-vote py-5 px-2 px-md-5">
      <div className="row">
        <StepControl
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <CurrentPageControl
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          newVote={newVote}
          setNewVote={setNewVote}
        />
      </div>
    </div>
  );
};

export default Propose;
