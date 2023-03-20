import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const getVote = async (voteId) => {
  try {
    const voteDoc = await getDoc(doc(db, "votes", voteId));
    const voteDocData = voteDoc.data();
    return voteDocData;
  } catch (error) {
    console.error(error.message);
  }
};

export default getVote;
