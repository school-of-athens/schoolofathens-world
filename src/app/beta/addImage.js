
import { useCallback } from "react";

export default addImage = useCallback(() => {
  const url = window.prompt("URL");

  if (url) {
    editor.chain().focus().setImage({ src: url }).run();
  }
}, [editor]);
