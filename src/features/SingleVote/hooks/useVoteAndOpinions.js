import { useState, useEffect } from "react";
import getVote from "../../../services/getVote";
import getOpinion from "../../../services/getOpinion";

const useVoteAndOpinions = (voteId) => {
  const [voteData, setVoteData] = useState(null);
  // set up a list of lists, representing opinions
  const [opinionList, setOpinionList] = useState([]);

  const getOpinionAsync = async (option, opinionId) => {
    const opinionData = await getOpinion(opinionId);

    setOpinionList((prev) => {
      const newList = { ...prev };

      if (!newList[option]) {
        newList[option] = [opinionData];
      } else {
        newList[option].push(opinionData);
      }

      return newList;
    });
  };

  const getVoteAsync = async () => {
    const voteData = await getVote(voteId);
    setVoteData(voteData);

    for (const option in voteData.options) {
      voteData.options[option].opinions.forEach((opinionId) => {
        getOpinionAsync(option, opinionId);
      });
    }
  };

  useEffect(() => {
    getVoteAsync();
  }, []);

  return [voteData, opinionList];
};

export default useVoteAndOpinions;
