import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const getVote = async (voteId) => {
  try {
    const voteDoc = await getDoc(doc(db, "votes", voteId));
    const voteData = {...voteDoc.data(), id: voteDoc.id};
    return voteData;
  } catch (error) {
    console.error(error.message);
  }
};

export default getVote;
