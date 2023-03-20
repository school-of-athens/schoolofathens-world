import {
  Heading,
  Image,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { jinzhou } from "../data/projectFiles";
import "../assets/Jinzhou.css";

const Jinzhou = () => {
  return (
    <div className="jinzhou-bg">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 jinzhou-nav">
          <Image borderRadius="full" boxSize="10rem" src={jinzhou} />
          <Heading mt={5}>Jinzhou Wu</Heading>
          <Link
            href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2FFAANGPath_Simple_Template.pdf?alt=media&token=af2ba282-e605-4147-9749-2d3ade3b8863"
            isExternal
            colorScheme="blue"
          >
            CV <ExternalLinkIcon mx="2px" mb="4px" />
          </Link>
          <Heading size="sm" mt={5} mb={2}>
            Facts
          </Heading>
          <UnorderedList spacing={1}>
            <ListItem>An international student in the U.S.</ListItem>
            <ListItem>A high school junior</ListItem>
            <ListItem>Founder of schoolofathens.world</ListItem>
            <ListItem>Sick of the world's polarization</ListItem>
          </UnorderedList>
          <Heading size="sm" mt={5} mb={2}>
            Skills
          </Heading>
          <UnorderedList spacing={1}>
            <ListItem>
              <b>Programming Languages:</b> C++, Python, Java, JavaScript,
              Solidity
            </ListItem>
            <ListItem>
              <b>Web Development:</b> HTML, CSS, Express.js, React.js, Next.js,
              Firebase
            </ListItem>
            <ListItem>
              <b>AI:</b> Keras, TensorFlow, NumPy, Pandas, Seaborn, Matplotlib
            </ListItem>
            <ListItem>
              <b>Competitive Programming</b>: USA Computing Olympiad Silver
            </ListItem>
          </UnorderedList>
          <Heading size="sm" mt={5} mb={2}>
            Hobbies
          </Heading>
          <UnorderedList spacing={1}>
            <ListItem>Piano</ListItem>
            <ListItem>Read news </ListItem>
          </UnorderedList>
        </div>
        <div className="col-12 col-md-8 col-lg-9 jinzhou-body">
          <Heading size="lg" mb={3}>
            About me
          </Heading>
          <Text mb={7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Heading size="lg" mb={3}>
            About schoolofathens.world
          </Heading>
          <Text mb={7}>
            <Heading size="sm" mt={2}>
              A Modern Version of Democracy, based on the most ancient one.
            </Heading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <Heading size="sm" mt={2}>
              Integrated into Web3
            </Heading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Heading size="lg" mb={3}>
            The dillema of privacy
          </Heading>
          <Text mb={7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Heading size="lg" mb={3}>
            Writings & Publications
          </Heading>
          <Box className="d-flex justify-content-between">
            <Link>
              <Heading size="sm" lineHeight={2}>
                Andrew Jackson and the Nullification Crisis
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text fontSize="sm" mt={0}>
              AP U.S. History
            </Text>
          </Box>
          <Text>
            <b>Abstract</b>
          </Text>
          <Box className="d-flex justify-content-between">
            <Heading size="sm" lineHeight={2}>
              Truman and the Decision to Neutralize the Taiwan Strait (Still
              working on it)
            </Heading>
            <Text fontSize="sm" mt={0}>
              AP U.S. History
            </Text>
          </Box>
          <Text>
            <b>Abstract</b>
          </Text>
          <Box className="d-flex justify-content-between">
            <Link>
              <Heading size="sm" lineHeight={2}>
                Learn Complementary Pseudo-label for Source-free Domain Adaptive
                Medical Segmentation
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text fontSize="sm" mt={0}>
              NeurIPS 2022 workshop
            </Text>
          </Box>
          <Text>
            <b>Abstract</b>
          </Text>
          <Box className="d-flex justify-content-between">
            <Link>
              <Heading size="sm" lineHeight={2}>
                Vicinal Feature Statistics Augmentation for Federated 3D Medical
                Volume Segmentation
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text fontSize="sm" mt={0}>
              IPMI 2023
            </Text>
          </Box>
          <Text>
            <b>Abstract</b>
          </Text>
          <Box className="d-flex justify-content-between">
            <Link>
              <Heading size="sm" lineHeight={2}>
                Balanced Complementary Self-Training for Source-free Domain
                Adaptive Segmentation
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text fontSize="sm" mt={0}>
              Submitted to MICCAI 2023
            </Text>
          </Box>
          <Text>
            <b>Abstract</b>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Jinzhou;
