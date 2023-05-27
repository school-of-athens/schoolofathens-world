import { GridItem } from "@chakra-ui/react";
import ArticleCard from "../../../components/ArticleCard";
import article from "../../../data/sampleArticle";

function InsightList() {

  return (
    <GridItem colSpan={{ base: 12, md: 8 }} pt={12} px={0} minH="50vh">
      <ArticleCard article={article} />
    </GridItem>
  );
}

export default InsightList;
