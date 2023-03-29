import { Box, Flex } from "@chakra-ui/react";

const Video = () => {
  return (
    <Flex my={5} className="container" justifyContent="center">
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/UplwT_a1IT8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Flex>
  );
};

export default Video;
