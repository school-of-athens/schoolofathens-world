import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

const useAuthRedirect = (path) => {
  const toast = useToast();
  const navigate = useNavigate();

  const authRedirect = () => {
    if (auth.currentUser) {
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
