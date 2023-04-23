import { Box } from "@chakra-ui/react";

const NavbarContainer = ({ children }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-min-height"
    >
      <Box className="container-fluid" px={8}>
        {children}
      </Box>
    </nav>
  );
};

export default NavbarContainer;