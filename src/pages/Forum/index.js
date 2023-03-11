import "./Forum.css";

import ForumTitle from "./ForumTitle";
import VoteList from "./VoteList";
import QuerySelector from "./QuerySelector";
import { getDocs, collection } from "firebase/firestore";
import { db, StyleContext } from "../../config";
import { useContext, useState, useEffect } from "react";

export default function () {

  const { sendToast } = useContext(StyleContext);
  const [voteList, setVoteList] = useState([]);

  const getVotes = async () => {
    try {
      const voteListUnfiltered = await getDocs(collection(db, "votes"));
      const voteListFiltered = voteListUnfiltered.docs.map((doc) => {
        return {...doc.data(), id: doc.id};
      });
      sendToast("success", "List of votes loaded.");
      setVoteList(voteListFiltered);
    }
    catch(error) {
      sendToast("error", `An error has occured: ${error.message}`);
    }
  };

  useEffect(() => {
    getVotes();
  }, []);

  return (
    <>
      <ForumTitle />
      <div className="row ps-3 vote-list mb-4">
        <QuerySelector />
        <VoteList voteList={voteList} />
      </div>
    </>
  );
}
