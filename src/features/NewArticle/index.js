import {
  Box,
  Tooltip,
  Editable,
  EditablePreview,
  EditableInput,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export const App = () => {
  const [active, setActive] = useState(false);
  const ref = useRef();

  return (
    <Box
      p={5}
      onMouseEnter={(e) => setActive(true)}
      onMouseLeave={() => {
        console.log(ref.current === document.activeElement);
      }}
    >
      <Tooltip label="Click to edit" placement="top">
        <Editable defaultValue="Take some chakra" _hover={{ bg: "gray.100" }}>
          <EditablePreview />
          <EditableInput
            ref={ref}
            _focusVisible={{ boxShadow: "none" }}
            // _focus={{ bg: "gray.100" }}
            onFocus={() => {
              console.log("focus");
            }}
          />
        </Editable>
      </Tooltip>
      <Button display={active ? "static" : "none"}>Move Top</Button>
    </Box>
  );
};
