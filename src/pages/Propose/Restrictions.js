
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../config";
import { addDoc, collection } from "firebase/firestore";
import { StyleContext } from "../../config";
import { useContext } from "react";

export default function ({ setCurrentPage, setNewVote, newVote }) {


    const { sendToast } = useContext(StyleContext);

    // add the vote to /votes/voteId
    const uploadVote = async () => {
        try {
            await addDoc(collection(db, "votes"), newVote);
            sendToast("success", "Your vote has been added.");

            // return to forum
            setCurrentPage(4);
        }
        catch(error) {
            sendToast("error", `An error has occured: ${error.message}`);
        }
    };

    const handleSubmit = () => {

        // check that all the inputs are filled
        if (newVote.title && newVote.introduction) {

            let valid = true;

            // loop through the options to see where is empty
            for (let i = 0; i < newVote.options.length; i++) {
                if (!(newVote.options[i].title && newVote.options[i].summary)) {
                    sendToast("error", `Option ${i + 1} is incomplete.`);
                    valid = false;
                    setCurrentPage(2);
                }
            }

            if (valid) {
                uploadVote();
            }
        }
        else {
            sendToast("error", "Basic info incomplete.");
            setCurrentPage(1);
        }
    };


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
            onClick={handleSubmit}
          >
            Propose
          </button>
        </div>
      </div>
    );
  };