import { useToast } from "@chakra-ui/react";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const useAuthRedirect = () => {
  const router = useRouter();
  const toast = useToast();
  const { user } = useContext(AuthContext);

  const authRedirect = (path) => {
    if (user?.emailVerified) {
      router.push(path);
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
