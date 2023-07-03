import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";

/**
 * This hook will return a function that is attached to the submit button in the NewGroup feature.
 * It submits the new group to firestore and checks for errors.
 * @param {function} setActiveStep To set the active page in the form if any information is missing
 * @param {state} newGroup Stores data of the new group. Will be actively updated since it's a state.
 */
function useSubmitNewGroup(setActiveStep, newGroup) {
  // Provide user feedback
  const toast = useToast();
  // Navigate to groups page if successful
  const router = useRouter();
  // Get user from context, null if not logged in
  // Properties are uid, photoURL, email, displayName, emailVerified
  // userData is an object that contains the current user's data from firestore
  // It is filled when the user logs in and stored locally as a state for faster access
  // setUserData is a function that updates the userData state
  const { user, setUserData } = useContext(AuthContext);

  const submitNewGroup = async () => {
    // STEP 1: loop through all properties to see if any are empty
    // if any are empty, inform the user using toast and setActiveStep

    // STEP 2: if all properties are filled, submit to firestore
    try {
      // 2.1: add the new group to the collection "groups"
      // also get the id of the new group
      // functions to use: addDoc

      // upload newGroup without the property "photo" to get an id
      // upload the photo to storage using the id then get the photoURL
      // update the newGroup with the photoURL

      // 2.2: add the new group to the user's groups array in firestore
      // use the id of the new group
      // functions to use: updateDoc, arrayUnion

      // 2.3: add the user to the user's groups array locally in userData
      // functions to use: setUserData, array.push()

      // 2.4: navigate to the groups page
      toast({
        status: "success",
        variant: "left-accent",
        title: `Your group has been added.`,
        position: "bottom-left",
        isClosable: true,
      });
      navigate("/groups");
    } catch (error) {
      toast({
        status: "error",
        variant: "left-accent",
        title: `An error has occured: ${error.message}`,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  return submitNewGroup;
}

export default useSubmitNewGroup;
