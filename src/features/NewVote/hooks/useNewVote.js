import { useState } from "react";

const useNewVote = () => {
  const [newVote, setNewVote] = useState({
    title: "",
    introduction: "",
    topics: [],
    totalVotes: 0,
    totalOpinions: 0,
    options: [
      {
        title: "",
        summary: "",
        votes: 0,
        opinions: []
      },
      {
        title: "",
        summary: "",
        votes: 0,
        opinions: []
      },
    ],
    userId: null,
  });

  return [newVote, setNewVote];
};

export default useNewVote;
