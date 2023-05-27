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
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ArticleExpand from "./ArticleExpand";
import ArticlePreview from "./ArticlePreview";
import useUserInfo from "../hooks/useUserInfo";

function ArticleCard({ article }) {
  // console.log(article.userId);
  const [expanded, setExpanded] = useState(false);
  const userInfo = useUserInfo(article.userId);

  return (
    <Card variant="plain" mb={6}>
      <CardHeader>
        <Button variant="ghostGray">
          <Avatar size="xs" mr={2} src={userInfo?.photoURL} />
          {userInfo?.displayName}
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
        <span>Published {article.date}</span>
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

export default ArticleCard;
