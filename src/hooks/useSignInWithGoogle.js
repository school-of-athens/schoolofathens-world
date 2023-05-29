import { auth, db } from "../services/firebase";
import { useToast } from "@chakra-ui/react";
import { doc, Timestamp, setDoc, getDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useSignInWithGoogle = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider).then(async (result) => {
      // get user info
      const userSnapshot = await getDoc(
        doc(db, "userInfo", auth.currentUser.uid)
      );

      // if user info does not exist, then upload info from google to firestore
      if (!userSnapshot.exists()) {
        // get data from google: auth provider
        const name = result.user.displayName;
        const email = result.user.email;
        const fileURL = result.user.photoURL;

        try {
          // update user profile in firebase authentication
          if (!auth.currentUser.displayName && !auth.currentUser.photoURL) {
            await updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: fileURL,
            });
          }

          // prepare to upload new user info
          const newUserInfo = {
            displayName: name,
            photoURL: fileURL,
          };

          // set up new user details
          const newUserDetails = {
            firstName: "",
            lastName: "",
            email: email,
            profile: "",
            joinDate: Timestamp.now(),
            points: 0,
            articles: [],
            opinions: [],
            votes: [],
            groups: [],
          };

          // upload user info
          await setDoc(doc(db, "userInfo", auth.currentUser.uid), newUserInfo);
          // upload user details
          await setDoc(
            doc(db, "userDetails", auth.currentUser.uid),
            newUserDetails
          );
          // show feedback through toast
          toast({
            status: "success",
            variant: "left-accent",
            title: `You have successfully logged in.`,
            position: "bottom-left",
            isClosable: true,
          });

          // go to user profile page
          navigate(`/user/${auth.currentUser.uid}`);
        } catch (error) {
          // show error if occurs
          toast({
            status: "error",
            variant: "left-accent",
            title: `An error has occured: ${error.message}`,
            position: "bottom-left",
            isClosable: true,
          });
        }
      } else {
        // user info exists: user has already signed up
        // show success feedback
        toast({
          status: "success",
          variant: "left-accent",
          title: `You have successfully logged in.`,
          position: "bottom-left",
          isClosable: true,
        });
        navigate(`/user/${auth.currentUser.uid}`);
      }
    });
  };

  return signInWithGoogle;
};

export default useSignInWithGoogle;
