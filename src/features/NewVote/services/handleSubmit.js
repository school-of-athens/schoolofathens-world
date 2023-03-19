import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase";

const handleSubmit = async (newVote, setCurrentPage, toast) => {
  // check that all the inputs are filled
  if (newVote.title && newVote.introduction) {
    let valid = true;

    // loop through the options to see where is empty
    for (let i = 0; i < newVote.options.length; i++) {
      if (!(newVote.options[i].title && newVote.options[i].summary)) {
        toast({
          status: "error",
          variant: "left-accent",
          title: `Option ${i + 1} is incomplete.`,
          position: "bottom-left",
          isClosable: true,
        });
        valid = false;
        setCurrentPage(2);
      }
    }

    if (valid) {
      try {
        await addDoc(collection(db, "votes"), newVote);
        toast({
          status: "success",
          variant: "left-accent",
          title: `Your vote has been added.`,
          position: "bottom-left",
          isClosable: true,
        });

        setCurrentPage((prev) => prev + 1);
      } catch (error) {
        toast({
          status: "error",
          variant: "left-accent",
          title: `An error has occured: ${error.message}`,
          position: "bottom-left",
          isClosable: true,
        });
      }
    }
  } else {
    toast({
      status: "error",
      variant: "left-accent",
      title: `Basic Info Incomplete`,
      position: "bottom-left",
      isClosable: true,
    });
    setCurrentPage(1);
  }
};

export default handleSubmit;
