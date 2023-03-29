import { google } from "../../../data/projectFiles";
import useSignInWithEmail from "../hooks/useSignInWithEmail";
import useSignInWithGoogle from "../../../hooks/useSignInWithGoogle";
import {
  Button,
  Heading,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const signInWithGoogle = useSignInWithGoogle();
  const [setEmail, setPassword, signInWithEmail] = useSignInWithEmail();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box className="row signIn">
      <Box className="img-caption">
        Edward Dodwell. <i>Bazar of Athens.</i>
      </Box>

      <Box className="signIn--form col-11 col-xl-4 col-lg-5 col-md-6 px-lg-5 px-2">
        <Heading>Sign In</Heading>
        <Button variant="gray" width="100%" onClick={signInWithGoogle} mt={5}>
          <img src={google} height="18" width="18" className="me-3" />
          Sign in with Google
        </Button>

        <Box className="signIn--divide">
          <hr />
          Or sign in with email
          <hr />
        </Box>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            bgColor="white"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              bgColor="white"
              placeholder="choose a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Button
                variant="light"
                minWidth="fit-content"
                minHeight="fit-content"
                position="absolute"
                right="0"
                py={0}
                px={1}
                mt={0}
                me={2}
                height="fit-content"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button mt={5} variant="blue" onClick={signInWithEmail}>
          Sign In
        </Button>
        <Button mt={4} variant="ghostGray" color="blue.600">
          Don't remember your password?
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
