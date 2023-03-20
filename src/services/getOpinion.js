import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const getOpinion = async (opinionId) => {
  try {
    const unfilteredOpinion = await getDoc(doc(db, "opinions", opinionId));
    const filteredOpinion = unfilteredOpinion.data();
    return filteredOpinion;
  } catch (error) {
    console.error(error.message);
  }
};

export default getOpinion;
