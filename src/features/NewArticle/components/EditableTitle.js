import {
  Editable,
  EditablePreview,
  EditableTextarea,
  Heading,
  Tooltip,
} from "@chakra-ui/react";

function EditableTitle({ article, setArticle }) {
  return (
    <Tooltip label="Click to edit" placement="top">
      <Editable
        value={article.title}
        _hover={{ bg: "gray.100" }}
        p={1}
        as={Heading}
      >
        <EditablePreview />
        <EditableTextarea
          resize="none"
          overflowY="hidden"
          rows="1"
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
            setArticle({ ...article, title: e.target.value || "Untitled" });
          }}
          _focusVisible={{ boxShadow: "none", bg: "gray.100" }}
        />
      </Editable>
    </Tooltip>
  );
}

export default EditableTitle;
