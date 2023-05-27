import {
  Box,
  Tooltip,
  Editable,
  EditablePreview,
  IconButton,
  ButtonGroup,
  EditableTextarea,
  Text,
} from "@chakra-ui/react";
import {
  faChevronDown,
  faChevronUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function EditableParagraph({ index, article, setArticle }) {
  const [active, setActive] = useState(false);

  return (
    <Box
      onMouseEnter={() => setActive(true)}
      onMouseLeave={(e) => {
        // if (e.target != document.activeElement.parentElement.parentElement) {
        setActive(false);
        // }
        console.log(document.activeElement.parentElement.parentElement);
      }}
    >
      <Tooltip label="Click to edit" placement="top">
        <Editable
          _hover={{ bg: "gray.100" }}
          p={1}
          value={article.body[index].text}
        >
          <EditablePreview as={Text} fontFamily="Lato" fontSize="md" mb={0} />
          <EditableTextarea
            resize="none"
            overflowY="hidden"
            rows="1"
            onChange={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
              setArticle((prev) => {
                const newArticle = { ...prev };
                if (!e.target.value) {
                  newArticle.body.splice(index, 1);
                } else {
                  newArticle.body[index].text = e.target.value;
                }
                return newArticle;
              });
            }}
            _focusVisible={{ boxShadow: "none", bg: "gray.100" }}
          />
        </Editable>
      </Tooltip>
      <ButtonGroup textAlign="end" display={active ? "static" : "none"} mt={2}>
        <IconButton
          variant="light"
          px={3}
          minW="0"
          icon={<FontAwesomeIcon icon={faChevronUp} />}
          onClick={() => {
            if (index > 0) {
              setArticle((prev) => {
                const newArticle = { ...prev };
                newArticle.body.splice(index - 1, 0, newArticle.body[index]);
                newArticle.body.splice(index + 1, 1);
                return newArticle;
              });
            }
          }}
        />
        <IconButton
          variant="light"
          px={3}
          minW="0"
          icon={<FontAwesomeIcon icon={faChevronDown} />}
          onClick={() => {
            if (index < article.body.length - 1) {
              setArticle((prev) => {
                const newArticle = { ...prev };
                newArticle.body.splice(index + 2, 0, newArticle.body[index]);
                newArticle.body.splice(index, 1);
                return newArticle;
              });
            }
          }}
        />
        <IconButton
          colorScheme="red"
          icon={<FontAwesomeIcon icon={faTrashCan} />}
          onClick={() => {
            setArticle((prev) => {
              const newArticle = { ...prev };
              newArticle.body.splice(index, 1);
              return newArticle;
            });
          }}
        />
      </ButtonGroup>
    </Box>
  );
}

export default EditableParagraph;
