import {
  Card,
  Stack,
  Image,
  CardBody,
  Heading,
  Button,
  Flex,
  Avatar,
  Box,
  Text,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ArticleExpand from "./ArticleExpand";
import ArticlePreview from "./ArticlePreview";

export default function ArticleCard() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const article = [
    {
      type: "img",
      src: "https://billmoyers.com/wp-content/uploads/2020/08/dont-believe-the-meme.jpg",
    },
    {
      type: "p",
      text: "Four score and seven years ago our fathers brought forth, upon this continent, a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.",
    },
    {
      type: "p",
      text: "Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.",
    },
    {
      type: "img",
      src: "https://cdn.britannica.com/13/913-050-BF67B227/troops-Confederate-objective-progress-mark-Cemetery-Ridge.jpg",
    },
    {
      type: "p",
      text: "But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.",
    },
  ];

  return (
    <Card variant="plain" mb={6}>
      <CardHeader>
        <Button variant="ghostGray">
          <Avatar
            size="xs"
            mr={2}
            src="https://religionnews.com/wp-content/uploads/2019/08/thumbRNS-Abraham-Lincoln-1863.jpg"
          />
          Abraham Lincoln
        </Button>
      </CardHeader>
      <CardBody>
        {expanded ? (
          <ArticleExpand article={article} setExpanded={setExpanded} />
        ) : (
          <ArticlePreview article={article} setExpanded={setExpanded} />
        )}
      </CardBody>

      <CardFooter>
        <span>Published November 19, 1863</span>
        <Button
          variant="ghostGray"
          onClick={(e) => e.target.children[0].classList.toggle("blue")}
          isDisabled
        >
          <FontAwesomeIcon icon={faCircleUp} className="icon-gray" />0 upvotes
        </Button>
      </CardFooter>
    </Card>
  );
}
