import {
  Heading,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from "@chakra-ui/react";

export default function VoteHead({ voteData }) {
  // vote head contains all the information of the vote
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="vote-head">
      <div className="container">
        {/* title & introduction */}
        <Heading className="text-center">{voteData.title}</Heading>
        <p className="vote-intro py-3 px-3 px-md-5">{voteData.introduction}</p>

        {/* vote bar */}
        <div className="vote-bar">
          <div className="vote-bar-left">
            <p>
              {voteData.totalVotes
                ? Math.round(
                    (voteData.options[0].votes / voteData.totalVotes) * 100
                  )
                : 0}
              % ({voteData.options[0].votes}/{voteData.totalVotes || 0})
            </p>
          </div>
          <div className="vote-bar-right" onClick={onOpen}>
            <p>
              {voteData.totalVotes
                ? Math.round(
                    (voteData.options[1].votes / voteData.totalVotes) * 100
                  )
                : 0}
              % ({voteData.options[1].votes}/{voteData.totalVotes || 0})
            </p>
          </div>
        </div>
        {/* each option's summary is represented by an accordion to save space */}
        <div className="row vote-summary">
          <div className="col-12 col-md-6 vote-summary--left">
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    {voteData.options[0].title}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <p>{voteData.options[0].summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 vote-summary--right">
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    {voteData.options[1].title}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <p>{voteData.options[1].summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog isOpen={isOpen} onClose={onClose} isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Vote this option?
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose}>Cancel</Button>
              <Button variant="blue" onClick={onClose} ml={3}>
                Vote
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
