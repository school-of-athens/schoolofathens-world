import {
  Heading,
  Alert,
  AlertIcon,
  Input,
  Textarea,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function ({ setCurrentPage, setNewVote, newVote }) {
  return (
    <div className="new-vote--form px-2 px-md-5 pt-md-5">
      <Heading>Set Up the Options of Your Vote</Heading>
      <Alert status="warning" mt={5} mb={2}>
        <AlertIcon />
        Currently we only support vote with two options.
      </Alert>
      <label htmlFor="option1" className="form-label">
        Vote Option 1
      </label>
      <Input
        id="option1"
        value={newVote.options[0].title}
        onChange={(e) =>
          setNewVote((prev) => {
            const newOption = prev.options;
            newOption[0].title = e.target.value;
            return { ...prev, options: newOption };
          })
        }
      />
      <label htmlFor="introduction" className="form-label">
        Give a Brief Summary of Opinions
      </label>
      <Textarea
        id="introduction"
        rows="5"
        onChange={(e) =>
          setNewVote((prev) => {
            const newOption = prev.options;
            newOption[0].summary = e.target.value;
            return { ...prev, options: newOption };
          })
        }
      ></Textarea>
      <label htmlFor="option2" className="form-label">
        Vote Option 2
      </label>
      <Input
        id="option2"
        value={newVote.options[1].title}
        onChange={(e) =>
          setNewVote((prev) => {
            const newOption = prev.options;
            newOption[1].title = e.target.value;
            return { ...prev, options: newOption };
          })
        }
      />
      <label htmlFor="introduction" className="form-label">
        Give a Brief Summary of Opinions
      </label>
      <Textarea
        id="introduction"
        rows="5"
        onChange={(e) =>
          setNewVote((prev) => {
            const newOption = prev.options;
            newOption[1].summary = e.target.value;
            return { ...prev, options: newOption };
          })
        }
      ></Textarea>

      <div className="text-center">
        <ButtonGroup spacing={4} mt={5}>
          <Button colorScheme="blue" isDisabled>
            Add Option <i>(disabled)</i>
          </Button>
          <Button
            variant="blue"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
