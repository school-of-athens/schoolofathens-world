import { db } from "@/services/firebase";
import { doc, getDoc } from "firebase/firestore";

const getVote = async (voteId) => {
  try {
    const voteDoc = await getDoc(doc(db, "votes", voteId));
    // update time: voteDoc._document.version.timestamp.toDate()
    // create time: voteDoc._document.createTime.timestamp.toDate()
    const voteData = {...voteDoc.data(), id: voteDoc.id};
    return voteData;
  } catch (error) {
    console.error(error.message);
  }
};

export default getVote;
