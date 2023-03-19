import { Heading, useToast, Alert, AlertIcon, Button } from "@chakra-ui/react";
import handleSubmit from "../services/handleSubmit";

export default function ({ setCurrentPage, setNewVote, newVote }) {
  const toast = useToast();

  return (
    <div className="new-vote--form px-2 px-md-5 pt-md-5">
      <Heading>Vote & View Restrictions</Heading>
      <Alert status="warning" mt={5} mb={2}>
        <AlertIcon />
        This function is still under development. If you have set up your vote,
        please click propose.
      </Alert>

      <label htmlFor="vote-restriction" className="form-label">
        View Restrictions
      </label>
      <select className="form-select" disabled>
        <option selected>Public</option>
      </select>

      <label htmlFor="vote-restriction" className="form-label">
        Vote Restrictions
      </label>
      <select className="form-select" disabled>
        <option selected>Public</option>
      </select>

      <label htmlFor="options" className="form-label">
        Due Date
      </label>
      <input className="form-control" type="date" id="options" disabled />
      <div className="text-center">
        <Button
          variant="blue"
          onClick={() => handleSubmit(newVote, setCurrentPage, toast)}
          mt={5}
        >
          Propose
        </Button>
      </div>
    </div>
  );
}
