import { useState, useEffect } from "react";
import getVote from "../../../services/getVote";
import getOpinions from "../../../services/getOpinions";
import getSortedObjectKeys from "../../../utils/getSortedObjectKeys";

const useVoteAndOpinions = (voteId) => {
  const [voteData, setVoteData] = useState(null);
  // set up a list of lists, representing opinions
  const [opinionsData, setOpinionsData] = useState({});

  const getOpinionAsync = async (option) => {
    const opinions = await getOpinions(voteId, option);

    setOpinionsData((prev) => {
      return { ...prev, [option]: opinions };
    });
  };

  const getVoteAsync = async () => {
    const voteDataResult = await getVote(voteId);
    setVoteData(voteDataResult);
    const options = getSortedObjectKeys(voteDataResult.options);

    options.forEach((option) => {
      getOpinionAsync(option);
    });
  };

  useEffect(() => {
    getVoteAsync();
  }, []);

  return [voteData, setVoteData, opinionsData];
};

export default useVoteAndOpinions;
