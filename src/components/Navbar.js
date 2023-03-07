
import { logo } from "../projectFiles";


export default function() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-min-height" style={{padding: "0"}}>
      <div className="container-fluid" style={{padding: "0 3rem"}}>
        <a className="navbar-brand" href="/">
          <img src={logo} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label">

          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a id="site-name" className="nav-link text-secondary px-2" aria-current="page" href="/">The School of
                  Athens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary px-4" aria-current="page" href="forum">Forum</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary px-4" aria-current="page" href="learn">Learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary px-4" aria-current="page" href="groups">Groups</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary px-4" aria-current="page" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary px-4" aria-current="page" href="development">Dev</a>
              </li>
            </ul>

            <div className="signIn-signUp">
              <button type="button" className="btn btn-grey me-2" onClick={() => {window.location.href = 'login';}}>Sign In</button>
              <button type="button" className="btn btn-blue" onClick={() => {window.location.href='join';}}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    
    </nav>
    {/* <div className="progress_bar"></div> */}
    </>
    );
}