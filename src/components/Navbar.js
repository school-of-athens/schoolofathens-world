import { logo, aristotle } from "../project-files";
import { Link } from "react-router-dom";
import { MessageContext } from "../config";
import { useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../config";

const SignInSignUp = () => {
  return (
    <div className="signIn-signUp">
      <button
        type="button"
        className="btn btn-grey me-2"
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        Sign In
      </button>
      <button
        type="button"
        className="btn btn-blue"
        onClick={() => {
          window.location.href = "/join";
        }}
      >
        Sign Up
      </button>
    </div>
  );
};


export default function () {

  const auth = getAuth(app);
  const { sendMessage } = useContext(MessageContext);
  const [showAction, setShowAction] = useState(false);

  const UserPortrait = () => {
    return (
      <Link to={`/dashboard/${auth?.currentUser?.uid}`} onMouseEnter={() => setShowAction(true)} onMouseLeave={() => setShowAction(false)}>
        <img src={auth?.currentUser?.photoURL} referrerPolicy="no-referrer" />
      </Link>
    );
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      sendMessage("success", "Successfully signed out.");
    }
    catch(error) {
      sendMessage("error", `An error has occured: ${error.message}`);
    }
    
    
  };

  const UserAction = () => {
    <div className="user-action">
        <Link className="link-light" to={`/dashboard/${auth?.currentUser?.uid}`}>My Profile</Link>
        <Link className="link-light" onClick={handleSignOut} >Log out</Link>
    </div>
  };
  

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-min-height"
        style={{ padding: "0" }}
      >
        <div className="container-fluid" style={{ padding: "0 3rem" }}>
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
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
            className="offcanvas offcanvas-end text-bg-light"
            tabindex="-1"
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

              {(auth.currentUser) ? <UserPortrait /> : <SignInSignUp />}
            </div>
          </div>
        </div>
      </nav>

      {showAction && <UserAction />}
      
    </>
  );
}
