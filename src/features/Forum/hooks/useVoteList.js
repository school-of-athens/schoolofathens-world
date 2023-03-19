import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../services/firebase";

const useVoteList = () => {
  const [voteList, setVoteList] = useState([]);

  const getVotes = async () => {
    try {
      const voteListUnfiltered = await getDocs(collection(db, "votes"));
      const voteListFiltered = voteListUnfiltered.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setVoteList(voteListFiltered);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getVotes();
  });

  return voteList;
};

export default useVoteList;
