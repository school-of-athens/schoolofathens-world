import { Heading, Image, Text, Box, Button } from "@chakra-ui/react";

function ArticlePreview({ article, setExpanded }) {
  // if the first element is not a paragraph, then show everything until the first paragraph
  // if the first element is a paragraph, just show the paragarph

  const articleTruncated = [];
  for (const item of article.body) {
    if (item.type === "p") {
      articleTruncated.push(item);
      break;
    } else {
      articleTruncated.push(item);
    }
  }

  return (
    <>
      <Heading size="lg" mb={4} noOfLines={3}>
        {article.title}
      </Heading>

      {articleTruncated.map((item, index) => {
        if (item.type === "p") {
          return (
            <Text
              key={index}
              mb={4}
              lineHeight="1.75"
              fontSize="1.05rem"
              fontFamily="Lato"
              noOfLines={5}
              position="relative"
              _after={
                articleTruncated.length !== article.body.length && {
                  content: '""',
                  position: "absolute",
                  zIndex: "1",
                  bottom: "-0.5rem",
                  left: "0",
                  pointerEvents: "none",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
                  width: "100%",
                  height: "4em",
                }
              }
            >
              {item.text}
            </Text>
          );
        } else if (item.type === "img") {
          return (
            <Image
              key={index}
              maxH="50vh"
              width="100%"
              objectFit="cover"
              src={item.src}
              mb={4}
              borderRadius="lg"
            />
          );
        }
      })}

      {articleTruncated.length !== article.body.length && (
        <Box textAlign="end" mt="-1rem">
          <Button
            variant="ghostGray"
            color="blue.700"
            onClick={() => setExpanded((prev) => !prev)}
          >
            Expand
          </Button>
        </Box>
      )}
    </>
  );
}

export default ArticlePreview;
