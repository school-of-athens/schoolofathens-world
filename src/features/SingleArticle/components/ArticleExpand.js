import { Heading, Image, Text, Box, Button } from "@chakra-ui/react";

function ArticleExpand({ article, setExpanded }) {
  return (
    <>
      <Heading size="lg" mb={4}>
        {article.title}
      </Heading>
      {article.body.map((item, index) => {
        if (item.type === "img") {
          return (
            <Image
              key={index}
              width="100%"
              objectFit="cover"
              src={item.src || URL.createObjectURL(item.file)}
              mb={4}
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
        else if (item.type === "h") {
          return (
            <Heading
              key={index}
              mb={4}
              fontSize="xl"
              fontFamily="Lato"
            >
              {item.text}
            </Heading>
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
