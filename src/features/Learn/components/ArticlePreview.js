import { Heading, Image, Text, Box, Button } from "@chakra-ui/react";

function ArticlePreview({ article, setExpanded }) {
  const firstParagraph = article.find((item) => item.type === "p");
  const firstImage = article.find((item) => item.type === "img");

  return (
    <>
      <Heading size="lg" mb={4}>
        The Gettysburg Address
      </Heading>

      {firstImage && (
        <Image
          maxH="50vh"
          width="100%"
          objectFit="cover"
          src={firstImage.src}
          mb={4}
          borderRadius="lg"
        />
      )}
      {firstParagraph && (
        <Text
          mb={4}
          lineHeight="1.75"
          fontSize="1.05rem"
          fontFamily="Lato"
          noOfLines={5}
          position="relative"
          _after={{
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
          }}
        >
          {firstParagraph.text}
        </Text>
      )}

      <Box textAlign="end" mt="-1rem">
        <Button
          variant="ghostGray"
          color="blue.700"
          onClick={() => setExpanded((prev) => !prev)}
        >
          Expand
        </Button>
      </Box>
    </>
  );
}

export default ArticlePreview;
