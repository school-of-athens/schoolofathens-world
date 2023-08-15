import { GridItem, VStack } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
// import article from "../../../data/sampleArticle";

function InsightList({ articles, onOpen, setDrawerContent }) {
  return (
    <GridItem colSpan={8} my={8} ms={16}>
      <VStack spacing={6}>
        {articles.map((article, index) => (
          <ArticleCard
            article={article}
            key={index}
            onOpen={onOpen}
            setDrawerContent={setDrawerContent}
          />
        ))}
      </VStack>
    </GridItem>
  );
}

export default InsightList;
