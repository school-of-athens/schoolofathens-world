import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../services/firebase";

const handleSubmit = async (newOpinion, option, toast, navigate) => {
  // check if an option to support is selected
  if (option === "default") {
    toast({
      status: "error",
      variant: "left-accent",
      title: `You must select which option you support.`,
      position: "bottom-left",
      isClosable: true,
    });
  }
  // check if the opinion text is not empty
  else if (!newOpinion.text) {
    toast({
      status: "error",
      variant: "left-accent",
      title: `Your opinion is empty.`,
      position: "bottom-left",
      isClosable: true,
    });
  }
  // now send the new opinion to the database
  else {
    try {
      // TODO: opinions should be a separate collection, not a subcollection of votes
      const newOpinionRef = await addDoc(collection(db, "opinions"), {
        ...newOpinion,
        publishDate: Timestamp.now(),
      });

      await updateDoc(doc(db, "votes", newOpinion.voteId), {
        [`options.${option}.opinions`]: arrayUnion(newOpinionRef.id),
      });
      // update userDetails to include the new opinion
      // TODO: change to userData
      await updateDoc(doc(db, "userDetails", newOpinion.userId), {
        opinions: arrayUnion(newOpinionRef.id),
      });

      toast({
        status: "success",
        variant: "left-accent",
        title: `Your opinion has been added.`,
        position: "bottom-left",
        isClosable: true,
      });

      navigate(0);
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
};

export default handleSubmit;
