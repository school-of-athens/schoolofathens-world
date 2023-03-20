import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../services/firebase";

const useVoteList = () => {
  const [voteList, setVoteList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getVotes = async () => {
    try {
      const voteListUnfiltered = await getDocs(collection(db, "votes"));
      const voteListFiltered = voteListUnfiltered.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setVoteList(voteListFiltered);

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVotes();
  }, []);

  return [voteList, isLoading];
};

export default useVoteList;
