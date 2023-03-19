import { AuthContext } from "../../../context/AuthContext";
import { useContext, useState } from "react";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

export default function ({ voteOptions, voteId, isOpen, onClose }) {
  // // newOpinion is a state that records the information of the new opinion
  // const [newOpinion, setNewOpinion] = useState({title: "", text: "", userId: "", publishDate: null, upvotes: 0});
  // // records which option to support
  // const [option, setOption] = useState("default");
  // const { auth } = useContext(AuthContext);
  // const navigate = useNavigate();

  // // triggered when the button "Publish" is clicked
  // const submitNewOpinion = async () => {

  //   // check if an option to support is selected
  //   if (option === "default") {
  //     // sendToast("error", "You must select which option you support.");
  //   }
  //   // check if the opinion text is not empty
  //   else if (!newOpinion.text) {
  //     // sendToast("error", "Your opinion is empty.");
  //   }
  //   // now send the new opinion to the database
  //   else {
  //     try {
  //       // TODO: opinions should be a separate collection, not a subcollection of votes
  //       const newOpinionRef = await addDoc(collection(db, "votes", voteId, option), {...newOpinion, publishDate: Timestamp.now(), userId: auth.currentUser.uid});
  //       // update userDetails to include the new opinion
  //       await updateDoc(doc(db, "userDetails", auth.currentUser.uid), {opinions: arrayUnion({voteId: voteId, option: option, opinionId: newOpinionRef.id})});
  //       // TODO: update userData too
  //       // sendToast("success", "Your opinion has been added.");
  //       navigate(0);
  //     }
  //     catch(error) {
  //       // sendToast("error", `An error has occured: ${error.message}`);
  //     }
  //   }

  // };

  // return (
  //   <div
  //     className="modal fade"
  //     id="newOpinion"
  //     tabindex="-1"
  //     aria-labelledby="exampleModalLabel"
  //     aria-hidden="true"
  //   >
  //     <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h1 className="modal-title fs-5" id="exampleModalLabel">
  //             Share Your Opinion
  //           </h1>
  //           <button
  //             type="button"
  //             className="btn-close"
  //             data-bs-dismiss="modal"
  //             aria-label="Close"
  //           ></button>
  //         </div>
  //         <div className="modal-body">
  //           {/* select which option to support, required */}
  //           <label for="vote-option" className="form-label">
  //             I support:
  //           </label>
  //           <select className="form-select" id="vote-option" onChange={(e) => setOption(e.target.value)} value={option}>
  //             <option selected value="default">Select which side you support...</option>
  //             <option>{voteOptions[0].title}</option>
  //             <option>{voteOptions[1].title}</option>
  //           </select>
  //           {/* title of the opinion, optional */}
  //           <label for="opinion-title" className="form-label">
  //             Give a title of your opinion (optional)
  //           </label>
  //           <input className="form-control" type="text" id="opinion-title" value={newOpinion.title} onChange={(e) => setNewOpinion((prev) => {return {...prev, title: e.target.value}})} />
  //           {/* content of the opinion, required */}
  //           <label for="opinion-text" className="form-label">
  //             Share your opinion with us
  //           </label>
  //           <textarea
  //             className="form-control"
  //             id="opinion-text"
  //             rows="5"
  //             onChange={(e) => setNewOpinion((prev) => {return {...prev, text: e.target.value}})}
  //           >{newOpinion.text}</textarea>
  //         </div>
  //         {/* button groups */}
  //         <div className="modal-footer">
  //           <button
  //             type="button"
  //             className="btn btn-danger"
  //             data-bs-dismiss="modal"
  //           >
  //             Discard
  //           </button>
  //           <button type="button" className="btn btn-primary" onClick={submitNewOpinion}>
  //             Publish
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Share Your Opinion</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Which side do you support?</FormLabel>
            <Select>
              <option>Select a side</option>
              <option>{voteOptions[0].title}</option>
              <option>{voteOptions[1].title}</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Title (Optional)</FormLabel>
            <Input placeholder="Give a title for your opinion" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Share your opinion with us</FormLabel>
            <Textarea rows={5}>

            </Textarea>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Discard
          </Button>
          <Button variant="blue">Publsh Opinion</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
