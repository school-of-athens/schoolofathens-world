import { useToast } from "@chakra-ui/react";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const useAuthRequired = () => {
  const { user } = useContext(AuthContext);
  const toast = useToast();

  const authRequired = (callback) => {
    if (user?.emailVerified) {
      callback();
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

  return authRequired;
};

export default useAuthRequired;
