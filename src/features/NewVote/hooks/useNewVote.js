import { useState } from "react";

const useNewVote = () => {
  const [newVote, setNewVote] = useState({
    title: "",
    introduction: "",
    topics: [],
    options: [
      {
        title: "",
        summary: "",
      },
      {
        title: "",
        summary: "",
      },
    ],
  });

  return [newVote, setNewVote];
};

export default useNewVote;
