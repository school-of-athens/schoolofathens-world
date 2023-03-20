import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="container-fluid footer">
      <footer className="flex-wrap py-3" >
        <div className="row">
          <div className="col-md-6 col-12 text-center text-md-start footer--logo">
            <Link to="/" className="mb-0">The School of Athens</Link>
          </div>

          <div className="col-md-6 col-12 text-center text-md-end footer--links">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="contact" className="nav-link px-2">Contact</Link></li>
              <li className="nav-item"><Link to="faq" className="nav-link px-2">FAQs</Link></li>
              <li className="nav-item"><Link to="about" className="nav-link px-2">About</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;