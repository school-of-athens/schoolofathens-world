import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="container-fluid footer-home footer mt-4 pb-3 px-5">
          <Heading size="lg">About Us</Heading>
          <Text lineHeight="2">
            The School of Athens is a democratic forum designed to address the
            world's polarization and extremism by providing a platform for
            people to vote and debate on issues. This website offers a unique
            and high-quality discussion and debate space that organizes
            arguments and evidence for both sides of an issue. It provides the
            opportunity to make educated decisions and promotes a Boxerse
            perspective on a variety of issues. The website also serves as a
            platform for learning resources and offers group functionalities for
            decision-making processes. With its integration with blockchain
            technology and decentralized management, the School of Athens
            ensures the security and transparency of the voting process. Join
            the School of Athens today and become a part of modern democracy.
            (Website last updated on 6/1/2023)
          </Text>
          <Box className="row">
          <Box className="col-md-6 col-12 text-center text-md-start footer--logo ps-0">
            <Link to="/" className="mb-0">
              The School of Athens
            </Link>
          </Box>

          <Box className="col-md-6 col-12 text-center text-md-end footer--links">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link px-2">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="faq" className="nav-link px-2">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link px-2">
                  About
                </Link>
              </li>
            </ul>
        </Box>
        </Box>
        
    </Box>
  );
};

export default Footer;
