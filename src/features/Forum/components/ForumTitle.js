import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import {
  Tabs,
  TabList,
  Tab,
  Heading,
  Button,
  ButtonGroup,
  useToast,
  Box,
  Flex,
  Container,
  Image,
} from "@chakra-ui/react";
import { viewOfRomanForumCropped } from "../../../data/projectFiles";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

export default function () {
  // const [tabIndex, setTabIndex] = useState(0);
  const authRedirect = useAuthRedirect();

  // the header of the forum page

  return (
    <Flex
      bgImage={viewOfRomanForumCropped}
      bgSize="cover"
      className="bg-dark"
      width="100%"
      alignItems="center"
    >
      <Box width="100%" backdropFilter="brightness(0.7)" py="6rem">
        <Box className="container">
          <Heading color="white" fontSize="2.5rem" ps={{base: 0, lg: 10}}>
            Forum Romanum
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
}
