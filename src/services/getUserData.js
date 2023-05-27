
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Invoked when get the current user's data and when access a user's profile page
 * @param {String} userId  the id of the user and the document in userDetail collection
 * @returns an object representing the user data if the user exists, false if the user does not exist
 */
const useUserData = async (userId) => {

  const userSnapshot = await getDoc(
    doc(db, "userDetails", userId)
  );

  if (userSnapshot.exists()) {
    return userSnapshot.data();
  }

  return false;
};

export default useUserData;
