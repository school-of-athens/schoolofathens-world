import { google } from "../../../data/projectFiles";
import useSignInWithEmail from "../hooks/useSignInWithEmail";
import useSignInWithGoogle from "../hooks/useSignInWithGoogle";
import { useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { Button, Heading } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(AuthContext);
  const signInWithGoogle = useSignInWithGoogle(setUserData);
  const signInWithEmail = useSignInWithEmail();

  return (
    <div className="row signIn">
      <div className="img-caption">
        Edward Dodwell. <i>Bazar of Athens.</i>
      </div>

      <div className="signIn--form col-11 col-xl-4 col-lg-5 col-md-6 px-lg-5 px-2">
        <Heading>Sign In</Heading>
        <Button variant="gray">
          <img src={google} height="18" width="18" className="me-3" />
          Sign in with Google
        </Button>

        <div className="signIn--divide">
          <hr />
          Or sign in with email
          <hr />
        </div>

        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-blue"
          onClick={() => signInWithEmail(email, password)}
        >
          Sign In
        </button>
        <button type="button" className="btn signIn--forget_password">
          Don't remember your password?
        </button>
      </div>
    </div>
  );
};

export default Login;
