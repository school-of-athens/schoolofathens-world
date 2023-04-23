import { logo } from "../../../data/projectFiles";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

const NavbarBody = () => {
  return (
    <Box
      className="offcanvas offcanvas-start text-bg-light"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <Box className="offcanvas-body">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <Link
              id="site-name"
              className="nav-link text-secondary px-2"
              aria-current="page"
              to="/"
            >
              <Image src={logo} className="navbar-brand" me={4} />
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
              to="community"
            >
              Community
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
        </ul>
      </Box>
    </Box>
  );

  /* {user ? <UserPortrait /> : <SignInSignUp />} */
};

export default NavbarBody;
