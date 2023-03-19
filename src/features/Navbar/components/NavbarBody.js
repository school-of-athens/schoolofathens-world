
import { logo } from "../../../data/projectFiles";
import { Link } from "react-router-dom";


const NavbarBody = () => {
  return (
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
  );

  /* {user ? <UserPortrait /> : <SignInSignUp />} */
};

export default NavbarBody;