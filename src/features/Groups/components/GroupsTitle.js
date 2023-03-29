import { Heading, ButtonGroup, Button } from "@chakra-ui/react";
import useAuthRedirect from "../../../hooks/useAuthRedirect";
import { schoolOfAthensCropped } from "../../../data/projectFiles";

export default function () {
  const authRedirect = useAuthRedirect();

  return (
    <div className="page-title">
      <img src={schoolOfAthensCropped} />
      {/* container with paddings */}
      <div className="container-fluid page-title--body px-3 px-sm-5">
        {/* title */}
        <Heading my={10} color="white">
          Find Your Groups
        </Heading>
        {/* description */}
        {/* button groups */}
        <ButtonGroup spacing={4}>
          <Button variant="gray" fontSize="lg">
            What are groups?
          </Button>
          <Button
            variant="blue"
            fontSize="lg"
            onClick={() => authRedirect("new")}
          >
            Start a Group
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
