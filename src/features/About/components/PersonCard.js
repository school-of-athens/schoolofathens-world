import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PersonCard = () => {

    const navigate = useNavigate();

  return (
    <div className="col-lg-4 d-flex flex-column align-items-center">
      <img
        className="bd-placeholder-img rounded-circle mb-3"
        width="140"
        height="140"
        src="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fhead.jpg?alt=media&token=80050b1f-4925-4170-ad98-3ca295bac21b"
      />
      <h2 className="fw-normal">Jinzhou Wu</h2>
      <p>
        Founder of schoolofathens.world.
      </p>
      <p>
        <Button variant="blue" onClick={() => navigate("/about/jinzhou")}>
            View details
        </Button>
      </p>
    </div>
  );
};

export default PersonCard;