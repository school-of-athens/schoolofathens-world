import { Button, Heading, Input, Textarea } from "@chakra-ui/react";




export default function({ setCurrentPage, setNewVote, newVote }) {





    return (
      <div className="new-vote--form px-2 px-md-5 pt-md-5">
        <Heading>Propose a New Vote</Heading>

        <label htmlFor="vote-title" className="form-label">
          What's the Title of Your Vote?
        </label>
        <Input id="vote-title" onChange={(e) => setNewVote((prev) => {return {...prev, title: e.target.value}})} value={newVote.title}/>
        <label htmlFor="introduction" className="form-label">
          Give a Brief Introduction
        </label>
        <Textarea id="introduction" rows="5" onChange={(e) => setNewVote((prev) => {return {...prev, introduction: e.target.value}})} value={newVote.introduction}>

        </Textarea>
        <div className="text-center">
          <Button variant="blue" onClick={() => setCurrentPage((prev) => prev + 1)} mt={4}>Next</Button>
        </div>
      </div>
    );
  };