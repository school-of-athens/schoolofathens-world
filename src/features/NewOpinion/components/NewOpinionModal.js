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
  useToast,
} from "@chakra-ui/react";
import useNewOpinion from "../hooks/useNewOpinion";
import handleSubmit from "../services/handleSubmit";
import { useNavigate } from "react-router-dom";

export default function ({ voteOptions, voteId, isOpen, onClose }) {
  const [newOpinion, setNewOpinion, option, setOption] = useNewOpinion(voteId);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmitRedirect = async () => {
    try {
      await handleSubmit(newOpinion, option, toast, navigate);
    } catch (error) {
      toast({
        status: "error",
        variant: "left-accent",
        title: `An error has occured: ${error.message}`,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  return (
    <>
      {voteOptions && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior="inside"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Share Your Opinion {option}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Which side do you support?</FormLabel>
                <Select onChange={(e) => setOption(e.target.value)}>
                  <option>Select a side</option>
                  <option>{voteOptions[0]}</option>
                  <option>{voteOptions[1]}</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Title (Optional)</FormLabel>
                <Input
                  placeholder="Give a title for your opinion"
                  value={newOpinion.title}
                  onChange={(e) =>
                    setNewOpinion((prev) => {
                      return { ...prev, title: e.target.value };
                    })
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Share your opinion with us</FormLabel>
                <Textarea
                  rows={5}
                  value={newOpinion.text}
                  onChange={(e) =>
                    setNewOpinion((prev) => {
                      return { ...prev, text: e.target.value };
                    })
                  }
                ></Textarea>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Discard
              </Button>
              <Button variant="blue" onClick={handleSubmitRedirect}>
                Publsh Opinion
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
