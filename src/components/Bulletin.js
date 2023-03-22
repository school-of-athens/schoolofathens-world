
import { Heading } from "@chakra-ui/react";

export default function Bulletin({ text }) {
  return (
    <div className="notice">
      <Heading>{text}</Heading>
      
    </div>
  );
}
