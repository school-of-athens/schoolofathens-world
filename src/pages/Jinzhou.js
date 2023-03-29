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
    <div className="jinzhou-bg px-2 px-sm-5">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 jinzhou-nav">
          <Image borderRadius="full" boxSize="10rem" src={jinzhou} />
          <Heading mt={5}>Jinzhou Wu</Heading>
          <Link
            href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FCV.pdf?alt=media&token=1a6a2d2a-666c-4f20-8bb7-cafc024c23c7"
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
            <Link href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FWriting_Sample.pdf?alt=media&token=45d766ee-d817-433e-962f-a1551e393677">
              <Heading size="sm" lineHeight={2}>
                Andrew Jackson and the Nullification Crisis
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text fontSize="sm" mt={0}>
              AP U.S. History
            </Text>
          </Box>
          <Text></Text>
          <Box className="d-flex justify-content-between">
            <Link href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FTaiwan.pdf?alt=media&token=34a28705-7a7a-4137-8728-b23c2c5c5b6a">
              <Heading size="sm" lineHeight={2}>
                President Truman and the Decisioin to Neutralize the Taiwan
                Strait
                <ExternalLinkIcon mx="2px" mb="4px" />
              </Heading>
            </Link>
            <Text fontSize="sm" mt={0}>
              AP U.S. History
            </Text>
          </Box>
          <Text>{/* <b>Abstract</b> */}</Text>
          <Box className="d-flex justify-content-between">
            <Link href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FNIPS2022submission__Final_.pdf?alt=media&token=916ee185-808c-4905-890e-efded0edeada">
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
          <Text>{/* <b>Abstract</b>:  */}</Text>
          <Box className="d-flex justify-content-between">
            <Link href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2FIPMI2023_dataaugFL_.pdf?alt=media&token=f2f9ad24-9179-4074-bb77-f347d2980e88">
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
          <Text>{/* <b>Abstract</b> */}</Text>
          <Box className="d-flex justify-content-between">
            <Link href="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fjinzhou%2Fmiccai2023_COST_.pdf?alt=media&token=6e20ffba-2c27-48ae-89ad-87a8c00af575">
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
          <Text>{/* <b>Abstract</b> */}</Text>
        </div>
      </div>
    </div>
  );
};

export default Jinzhou;
