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
} from "@chakra-ui/react";
import { viewOfRomanForumCropped } from "../../../data/projectFiles";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

export default function () {
  const [tabIndex, setTabIndex] = useState(0);
  const authRedirect = useAuthRedirect();

  // the header of the forum page

  return (
    <div className="page-title">
      <img src={viewOfRomanForumCropped} />
      {/* container with paddings */}
      <div className="container-fluid page-title--body px-3 px-sm-5">
        {/* title */}
        <Heading my={10} color="white">
          Forum Romanum
        </Heading>
        {/* description */}
        {/* button groups */}
        <ButtonGroup spacing={4}>
          <Button variant="gray" fontSize="lg">
            Forum Rules
          </Button>
          <Button
            variant="blue"
            fontSize="lg"
            onClick={() => authRedirect("new")}
          >
            Propose a Vote
          </Button>
        </ButtonGroup>
      </div>
      <div className="page-title--tabs px-3 px-sm-5">
        <Tabs onChange={(index) => setTabIndex(index)} color="gray.700">
          <TabList border="none">
            <Tab bgColor="whiteAlpha.700">Home</Tab>
            <Tab bgColor="whiteAlpha.700">Votes</Tab>
            <Tab bgColor="whiteAlpha.700">Opinions</Tab>
            <Tab bgColor="whiteAlpha.700">Proposals</Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
}
