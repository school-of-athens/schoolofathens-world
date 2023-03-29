import "../assets/SingleArticle.css";
import { acropolisAtAthens } from "../data/projectFiles";
import { Image, Box, Flex } from "@chakra-ui/react";
import {
  Title,
  Subtitle,
  Paragraph,
  Quote,
  Img,
  Video,
  Audio,
  EndDivider
} from "../features/SingleArticle";

const SingleArticle = () => {
  return (
    <Box className="container" mb={10}>
      <Title />

      <Flex flexDir="column" alignItems="center" px={10}>
        <Subtitle />
        <Paragraph />
        <Quote />
        <Img />
        <Video />
        <Audio />
      </Flex>

      <EndDivider />
    </Box>
  );
};

export default SingleArticle;
