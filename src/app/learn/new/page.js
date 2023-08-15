"use client";

import { useState } from "react";
import PostType from "./components/PostType";
import TipTapEditor from "./components/TipTapEditor";
import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import Editor from "./Editor";

export default function NewPost() {
  const [postType, setPostType] = useState("DISCUSSION");
  const [editor, setEditor] = useState(false);

  return (
    <>
      {editor ? (
        <>
          {postType === "DISCUSSION" && <Editor />}
          {postType === "ARTICLE" && <TipTapEditor />}
        </>
      ) : (
        <PostType
          postType={postType}
          setPostType={setPostType}
          setEditor={setEditor}
        />
      )}
      {/* <TipTapEditor /> */}
    </>
  );
}
