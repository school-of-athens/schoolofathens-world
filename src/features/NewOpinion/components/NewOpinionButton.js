import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { Button } from "@chakra-ui/react";

const NewOpinionButtton = ({ onOpen }) => {
  const { authRedirect } = useContext(AuthContext);

  return (
    <Button
      variant="blue"
      onClick={() => {
        authRedirect();
        onOpen();
      }}
    >
      Share Your Opinion
    </Button>
  );
};

export default NewOpinionButtton;
