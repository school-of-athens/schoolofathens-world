import { logo, aristotle } from "../project-files";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../config";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ({ sendToast }) {
  const auth = getAuth(app);
  const [showAction, setShowAction] = useState(false);
  const navigate = useNavigate();

  const SignInSignUp = () => {
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      sendToast("success", "You have successfully logged out");
      navigate("/");
    } catch (error) {
      sendToast("error", `An error has occured: ${error.message}`);
    }
  };

  const UserAction = () => {
    return (
      <div className="user-action">
        <div className="user-action--btn">
        <Link
          className="link-light link-col"
          to={`/user/${auth?.currentUser?.uid}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-user" className="icon-grey"/>
          My Profile
        </Link>
        <Link className="link-light  link-col" onClick={handleSignOut}>
        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className="icon-grey"/>
          Log out
        </Link>
        </div>
        
      </div>
    );
  };

  const UserPortrait = () => {
    return (
      <div onMouseEnter={() => setShowAction(true)}
      onMouseLeave={() => setShowAction(false)}>
          <img
            src={auth?.currentUser?.photoURL}
            referrerPolicy="no-referrer"
            className="user-portrait"
          />
        {showAction && <UserAction />}
      </div>
    );
  };



 

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-min-height"
        style={{ padding: "0" }}
      >
        <div className="container-fluid" style={{ padding: "0 3rem" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-light"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    id="site-name"
                    className="nav-link text-secondary px-2"
                    aria-current="page"
                    to="/"
                  >
                    <img src={logo} className="navbar-brand" />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    id="site-name"
                    className="nav-link text-secondary px-2"
                    aria-current="page"
                    to="/"
                  >
                    The School of Athens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary px-4"
                    aria-current="page"
                    to="forum"
                  >
                    Forum
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary px-4"
                    aria-current="page"
                    to="learn"
                  >
                    Learn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary px-4"
                    aria-current="page"
                    to="groups"
                  >
                    Groups
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary px-4"
                    aria-current="page"
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary px-4"
                    aria-current="page"
                    to="development"
                  >
                    Dev
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
          {auth.currentUser ? <UserPortrait /> : <SignInSignUp />}
        </div>
      </nav>
    </>
  );
}
