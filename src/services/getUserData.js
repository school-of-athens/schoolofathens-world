
import { doc, getDoc } from "firebase/firestore";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjsg82duVqy8NwexQSdQskIhzv9N9xx2A",
  authDomain: "school-of-athens-122422.firebaseapp.com",
  projectId: "school-of-athens-122422",
  storageBucket: "school-of-athens-122422.appspot.com",
  messagingSenderId: "767259328870",
  appId: "1:767259328870:web:cbce73385e22ed49e3c8a7",
  measurementId: "G-THP2YBH90N",
};

/**
 * Invoked when get the current user's data and when access a user's profile page
 * @param {String} userId  the id of the user and the document in userDetail collection
 * @returns an object representing the user data if the user exists, false if the user does not exist
 */
const useUserData = async (userId) => {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const userSnapshot = await getDoc(
    doc(db, "userDetails", userId)
  );

  if (userSnapshot.exists()) {
    return userSnapshot.data();
  }

  return false;
};

export default useUserData;
