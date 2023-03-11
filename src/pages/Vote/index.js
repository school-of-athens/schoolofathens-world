import "./Vote.css";
import VoteToolbar from "./VoteToolbar";
import VoteHead from "./VoteHead";
import { aristotle } from "../../project-files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { db, AuthContext, StyleContext } from "../../config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import NewOpinion from "./NewOpinion";

export default function () {

  const { voteId } = useParams();
  const { sendToast } = useContext(StyleContext);
  const [voteData, setVoteData] = useState({introduction: "", title: "", options: [{title: "", summary: "", votes: 0}, {title: "", summary: "", votes: 0}]});
  const [opinions, setOpinions] = useState([{}, {}]);

  const getVoteData = async () => {
    try {
      const voteDoc = await getDoc(doc(db, "votes", voteId));
      setVoteData(voteDoc.data());
      sendToast("success", "Vote data loaded successfully.");
    }
    catch(error) {
      sendToast("error", `An error has occured: ${error.message}`)
    }
  };

  useEffect(() => {
    getVoteData();
  }, []);

  return (
    <>
      <NewOpinion voteOptions={voteData.options} />
      <VoteHead voteData={voteData} />
      <VoteToolbar />
      <div className="container vote-body">
        <div className="row">
          <div className="col-12 col-md-6 opinion-list pe-4">
            <div className="opinion-card">
              <div className="opinion-card--user">
                <img src={aristotle} />
                Username
              </div>
              <div className="opinion-card--text">
              <h5>Subtitle (Optional)</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </div>
              <div className="opinion-card--info">
                <span>Published 2023-3-11 01:45</span>
                <span className="opinion-card--upvote" onClick={(e) => e.target.children[0].classList.toggle("blue")}><FontAwesomeIcon icon="fa-solid fa-circle-up" className="icon-grey"/>0 upvotes</span>
              </div>

            </div>
            <div className="opinion-card">
              <div className="opinion-card--user">
                <img src={aristotle} />
                Username
              </div>
              <div className="opinion-card--text">
              <h5></h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              </div>
              <div className="opinion-card--info">
                <span>Published 2023-3-11 01:45</span>
                <span className="opinion-card--upvote" onClick={(e) => e.target.children[0].classList.toggle("blue")}><FontAwesomeIcon icon="fa-solid fa-circle-up" className="icon-grey"/>0 upvotes</span>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-6 opinion-list ps-4">
          <div className="opinion-card">
              <div className="opinion-card--user">
                <img src={aristotle} />
                Username
              </div>
              <div className="opinion-card--text">
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              </div>
              <div className="opinion-card--info">
                <span>Published 2023-3-11 01:45</span>
                <span className="opinion-card--upvote" onClick={(e) => e.target.children[0].classList.toggle("blue")}><FontAwesomeIcon icon="fa-solid fa-circle-up" className="icon-grey"/>0 upvotes</span>
              </div>

            </div>
            <div className="opinion-card">
              <div className="opinion-card--user">
                <img src={aristotle} />
                Username
              </div>
              <div className="opinion-card--text">
              <h5>Subtitle (Optional)</h5>
              <p>Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </div>
              <div className="opinion-card--info">
                <span>Published 2023-3-11 01:45</span>
                <span className="opinion-card--upvote" onClick={(e) => e.target.children[0].classList.toggle("blue")}><FontAwesomeIcon icon="fa-solid fa-circle-up" className="icon-grey"/>0 upvotes</span>
              </div>

            </div>
            <div className="opinion-card">
              <div className="opinion-card--user">
                <img src={aristotle} />
                Username
              </div>
              <div className="opinion-card--text">
              <p>Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </div>
              <div className="opinion-card--info">
                <span>Published 2023-3-11 01:45</span>
                <span className="opinion-card--upvote" onClick={(e) => e.target.children[0].classList.toggle("blue")}><FontAwesomeIcon icon="fa-solid fa-circle-up" className="icon-grey"/>0 upvotes</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
