import { useState, useEffect } from "react";
import getVote from "../../../services/getVote";

const useVoteAndOpinions = (voteId) => {
  const [voteData, setVoteData] = useState({
    introduction: "",
    title: "",
    options: [
      { title: "", summary: "", votes: 0 },
      { title: "", summary: "", votes: 0 },
    ],
  });
  // set up a list of lists, representing opinions
  const [opinionList, setOpinionList] = useState([]);

  const getVoteAsync = async () => {
    const temp = await getVote(voteId);
    setVoteData(temp);
  };

  useEffect(() => {
    getVoteAsync();
  }, []);

  //   voteDocData.options.forEach((option) => {
  //     getOpinion(option.title);
  //   });

  // const getOpinion = async (optionTitle) => {
  //   const unfilteredOpinions = await getDocs(
  //     collection(db, "votes", voteId, optionTitle)
  //   );
  //   const filteredOpinions = unfilteredOpinions.docs.map((o) => {
  //     return { ...o.data(), id: o.id };
  //   });

  //   setOpinions((prev) => {
  //     return [...prev, filteredOpinions];
  //   });
  // };

  return [voteData, opinionList];
};

export default useVoteAndOpinions;
