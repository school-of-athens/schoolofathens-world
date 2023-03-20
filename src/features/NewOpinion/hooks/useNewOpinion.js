import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";

const useNewOpinion = (voteId) => {
  const { auth } = useContext(AuthContext);

  const [newOpinion, setNewOpinion] = useState({
    title: "",
    text: "",
    voteId: voteId,
    userId: auth?.currentUser?.uid,
    publishDate: null,
    upvotes: 0,
  });

  const [option, setOption] = useState("default");

  return [newOpinion, setNewOpinion, option, setOption];
};

export default useNewOpinion;
