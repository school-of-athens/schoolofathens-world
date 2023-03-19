
import useFirestore from "./useFirestore";
import { doc, getDoc } from "firebase/firestore";

/**
 * Invoked when only getting the username and photo, such as when listing opinions
 * @param {String} userId the id of the user and the document in the userInfo collection
 * @returns an object representing the user info if the user exists, else false
 */
export default async function getUserInfo(userId) {

  const db = useFirestore();

  const userSnapshot = await getDoc(
    doc(db, "userInfo", userId)
  );

  if (userSnapshot.exists()) {
    return userSnapshot.data();
  }

  return false;
}
