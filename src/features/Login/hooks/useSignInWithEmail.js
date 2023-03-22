import { auth } from "../../../services/firebase";
import { useToast } from "@chakra-ui/react";
import { signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useSignInWithEmail = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const signInWithEmail = async (email, password) => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (!auth.currentUser.emailVerified) {
            toast({
              status: "error",
              variant: "left-accent",
              title: `Your email has not been verified. Please sign up again.`,
              position: "bottom-left",
              isClosable: true,
            });
            deleteUser(auth.currentUser);
          } else {
            toast({
              status: "success",
              variant: "left-accent",
              title: `You have logged in successfully!`,
              position: "bottom-left",
              isClosable: true,
            });
            navigate(`/user/${auth.currentUser.uid}`);
          }
        })
        .catch((error) => {
          switch (error.message) {
            case "Firebase: Error (auth/user-not-found).":
              toast({
                status: "error",
                variant: "left-accent",
                title: `User not found. Please sign up.`,
                position: "bottom-left",
                isClosable: true,
              });
              break;
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":
              toast({
                status: "error",
                variant: "left-accent",
                title: `Password should be at least 6 characters.`,
                position: "bottom-left",
                isClosable: true,
              });
              break;
            case "Firebase: Error (auth/wrong-password).":
              toast({
                status: "error",
                variant: "left-accent",
                title: `Wrong password. Please try again.`,
                position: "bottom-left",
                isClosable: true,
              });
              break;
            default:
              toast({
                status: "error",
                variant: "left-accent",
                title: `An error has occured: ${error.message}`,
                position: "bottom-left",
                isClosable: true,
              });
          }
        });
    }
  };

  return signInWithEmail;
};

export default useSignInWithEmail;
