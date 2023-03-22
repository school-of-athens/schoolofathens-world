import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="signIn-signUp">
      <ButtonGroup spacing={3}>
        <Button
          variant="gray"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>

        <Button
          variant="blue"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LoginSignUp;
