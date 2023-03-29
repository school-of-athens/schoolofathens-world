import {
  Heading,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { google } from "../../../data/projectFiles";
import useSignInWithGoogle from "../../../hooks/useSignInWithGoogle";
import useSignUpWithEmail from "../hooks/useSignUpWithEmail";

export default function SignUpComponent({}) {
  const [setEmail, setPassword, signUpWithEmail] = useSignUpWithEmail();
  const signInWithGoogle = useSignInWithGoogle();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Box className="row signUp">
        <Box className="col-lg-7 col-md-5 hidden px-0">
          <Box className="img-caption">
            Peter von Hess. <i>The Entry of King Othon of Greece in Athens.</i>
          </Box>
        </Box>
        <Box className="col-lg-5 col-md-7 col-12 signUp--form px-5">
          <Heading>Sign Up</Heading>
          <Button variant="gray" width="100%" mt={5} onClick={signInWithGoogle}>
            <img src={google} height="18" width="18" className="me-3" />
            Sign in with Google
          </Button>

          <Box className="signUp--divide">
            <hr />
            Or sign up with email
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
          <Button variant="blue" mt={5} onClick={signUpWithEmail}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </>
  );
}
