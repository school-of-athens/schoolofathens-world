import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function VoteToolbar({onOpen}) {
  const { auth, authRedirect } = useContext(AuthContext);
  const navigate = useNavigate();
  

  return (
    <div className="vote-toolbar">
      <div className="vote-toolbar--sortby">
        <h5>Sort by</h5>
        <select className="form-select" aria-label="select">
          <option selected value="NEWEST">
            Newest
          </option>
          <option value="VOTES">Most Upvotes</option>
          <option value="OPINIONS">Oldest</option>
        </select>
      </div>
      <Button onClick={onOpen}>Share Your Opinion</Button>
    </div>
  );
}
