import { logo } from "../projectFiles";

const Footer = () => {

  return (
    <div className="container-fluid footer mt-4" style={{ scrollSnapAlign: "end" }}>
      <footer className="flex-wrap py-3" >
        <div className="row">
          <div className="col-md-6 col-12 text-center text-md-start footer--logo">
            <a href="/">
              <img src={logo} />
            </a>
            <p className="mb-0">The School of Athens</p>
          </div>

          <div className="col-md-6 col-12 text-center text-md-end footer--links">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item"><a href="index" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="contact" className="nav-link px-2">Contact</a></li>
              <li className="nav-item"><a href="faq" className="nav-link px-2">FAQs</a></li>
              <li className="nav-item"><a href="about" className="nav-link px-2">About</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;