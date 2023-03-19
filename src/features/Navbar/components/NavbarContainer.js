const NavbarContainer = ({ children }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-min-height"
      style={{ padding: "0" }}
    >
      <div className="container-fluid" style={{ padding: "0 3rem" }}>
        {children}
      </div>
    </nav>
  );
};

export default NavbarContainer;