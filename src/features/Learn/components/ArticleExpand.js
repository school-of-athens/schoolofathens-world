import { Heading, Image, Text, Box, Button } from "@chakra-ui/react";

function ArticleExpand({ article, setExpanded }) {
  return (
    <>
      <Heading size="lg" mb={4}>
        The Gettysburg Address
      </Heading>
      {article.map((item, index) => {
        if (item.type === "img") {
          return (
            <Image
              key={index}
              maxH="50vh"
              width="100%"
              objectFit="cover"
              src={item.src}
              mb={4}
              // border="2px solid"
              // borderColor="gray.300"
              borderRadius="lg"
            />
          );
        } else if (item.type === "p") {
          return (
            <Text
              key={index}
              mb={4}
              lineHeight="1.75"
              fontSize="1.05rem"
              fontFamily="Lato"
            >
              {item.text}
            </Text>
          );
        }
      })}
      <Box textAlign="end" mt="-1rem">
        <Button
          variant="ghostGray"
          color="blue.700"
          onClick={() => setExpanded((prev) => !prev)}
        >
          Collapse
        </Button>
      </Box>
    </>
  );
}

export default ArticleExpand;
