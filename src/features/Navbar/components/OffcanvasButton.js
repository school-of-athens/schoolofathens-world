const OffcanvasButton = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default OffcanvasButton;