import { auth, db } from "../../../services/firebase";
import { useToast } from "@chakra-ui/react";
import { doc, Timestamp, setDoc, getDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useSignInWithGoogle = (setUserData) => {
  const toast = useToast();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider).then(async (result) => {
      const userSnapshot = await getDoc(
        doc(db, "userInfo", auth.currentUser.uid)
      );
      if (!userSnapshot.exists()) {
        const name = result.user.displayName;
        const email = result.user.email;
        const fileURL = result.user.photoURL;

        setUserData((prev) => {
          return { ...prev, joinDate: Timestamp.now() };
        });

        try {
          await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: fileURL,
          });

          const newUserInfo = {
            displayName: name,
            photoURL: fileURL,
          };

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

          await setDoc(doc(db, "userInfo", auth.currentUser.uid), newUserInfo);
          await setDoc(
            doc(db, "userDetails", auth.currentUser.uid),
            newUserDetails
          );
          toast({
            status: "success",
            variant: "left-accent",
            title: `You have successfully logged in.`,
            position: "bottom-left",
            isClosable: true,
          });

          navigate(`/user/${auth.currentUser.uid}`);
        } catch (error) {
          toast({
            status: "error",
            variant: "left-accent",
            title: `An error has occured: ${error.message}`,
            position: "bottom-left",
            isClosable: true,
          });
        }
      } else {
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
