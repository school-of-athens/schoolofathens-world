import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="signIn-signUp">
      <button
        type="button"
        className="btn btn-grey me-2"
        onClick={() => {
          navigate("/login");
        }}
      >
        Sign In
      </button>
      <button
        type="button"
        className="btn btn-blue"
        onClick={() => {
          navigate("/join");
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginSignUp;
