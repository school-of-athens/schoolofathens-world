import { Heading, Button, ButtonGroup } from "@chakra-ui/react";
import useAuthRedirect from "../../../hooks/useAuthRedirect";
import { funeralOrnationCropped } from "../../../data/projectFiles";

export default function () {
  const authRedirect = useAuthRedirect();

  return (
    <div className="page-title">
      <img src={funeralOrnationCropped} />
      {/* container with paddings */}
      <div className="container-fluid page-title--body px-3 px-sm-5">
        {/* title */}
        <Heading my={10} color="white">
          Share Your Insights
        </Heading>
        {/* description */}
        {/* button groups */}
        <ButtonGroup spacing={4}>
          <Button variant="gray" fontSize="lg">
            Community Rules
          </Button>
          <Button
            variant="blue"
            fontSize="lg"
            onClick={() => authRedirect("compose")}
          >
            Compose
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
