import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <Box className="container-fluid footer">
      <footer className="flex-wrap py-3" >
        <Box className="row">
          <Box ps={{base: 0, md: "2rem"}} pe={0} className="col-md-6 col-12 text-center text-md-start footer--logo">
            <Link to="/" className="mb-0">The School of Athens</Link>
          </Box>

          <Box className="col-md-6 col-12 text-center text-md-end footer--links">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="contact" className="nav-link px-2">Contact</Link></li>
              <li className="nav-item"><Link to="faq" className="nav-link px-2">FAQs</Link></li>
              <li className="nav-item"><Link to="about" className="nav-link px-2">About</Link></li>
            </ul>
          </Box>
        </Box>
      </footer>
    </Box>
  );
}

export default Footer;