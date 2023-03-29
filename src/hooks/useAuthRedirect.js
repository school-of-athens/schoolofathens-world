import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

const useAuthRedirect = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const authRedirect = (path) => {
    if (auth?.currentUser?.emailVerified) {
      navigate(path);
    } else {
      toast({
        status: "error",
        variant: "left-accent",
        title: `You must login to access the content.`,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  return authRedirect;
};

export default useAuthRedirect;
