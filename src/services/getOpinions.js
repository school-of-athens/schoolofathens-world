import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const getOpinions = async (voteId, option) => {
  try {
    const unfilteredOpinions = await getDocs(
      collection(db, "votes", voteId, option)
    );
    if (unfilteredOpinions.empty) {
      return [];
    } else {
      const filteredOpinions = unfilteredOpinions.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return filteredOpinions;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default getOpinions;
