import { useToast } from "@chakra-ui/react";
import { auth } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";

const useCheckIfVerified = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const checkIfVerified = async () => {
    try {
      await auth?.currentUser?.reload();

      if (auth?.currentUser?.emailVerified) {
        toast({
          status: "success",
          variant: "left-accent",
          title: `Your email has been verified!`,
          position: "bottom-left",
          isClosable: true,
        });
        navigate("/user/setup");
      } else {
        toast({
          status: "error",
          variant: "left-accent",
          title: `Your email has not been verified. Try resend the verification email.`,
          position: "bottom-left",
          isClosable: true,
        });
      }
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

  return checkIfVerified;
};

export default useCheckIfVerified;
