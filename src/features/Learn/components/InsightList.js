
import { GridItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

function InsightList() {
  return (
    <GridItem colSpan={{ base: 12, md: 8 }} pt={12} px={0} minH="50vh">
        <ArticleCard />
    </GridItem>
  );
}

export default InsightList;
