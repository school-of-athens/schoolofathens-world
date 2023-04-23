import { NewOpinionButtton } from "../../NewOpinion";
import { Box } from "@chakra-ui/react";

export default function OpinionsControl({ onOpen }) {
  return (
    <Box className="vote-toolbar">
      <Box className="vote-toolbar--sortby">
        <h5>Sort by</h5>
        <select className="form-select" aria-label="select" defaultValue="NEWEST">
          <option value="NEWEST">
            Newest
          </option>
          <option value="VOTES">Most Upvotes</option>
          <option value="OPINIONS">Oldest</option>
        </select>
      </Box>
      <NewOpinionButtton onOpen={onOpen} />
    </Box>
  );
}
