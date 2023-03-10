import { logo, aristotle } from "../project-files";
import { Link } from "react-router-dom";
import { AuthContext } from "../config";
import { useContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../config";

const signInSignUp = () => {
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

const userPortrait = (userId, userName, photoURL) => {
  return (
    <Link to={`/dashboard/${userId}`}>
    <button className="btn btn-grey nav-user">
      <img src={photoURL} referrerPolicy="no-referrer" />
      <p>{userName}</p>
    </button>
    </Link>
  );
};

export default function () {

  const auth = getAuth(app);

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

              {(auth.currentUser) ? userPortrait(auth?.currentUser?.uid, auth?.currentUser?.displayName, auth?.currentUser?.photoURL) : signInSignUp()}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
