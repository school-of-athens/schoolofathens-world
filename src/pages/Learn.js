import {
  LearnTitle,
  InsightList,
  QuerySelector,
  ArticleCard,
  useArticleList,
} from "../features/Learn";
import "../assets/Learn.css";
import ContainerGrid from "../layouts/ContainerGrid";
import { Box } from "@chakra-ui/react";

const Learn = () => {
  const { articlesList, isLoading } = useArticleList();

  return (
    <>
      <LearnTitle />
      <Box bg="gray.50">
        <ContainerGrid>
          <InsightList />
          <QuerySelector />
        </ContainerGrid>
      </Box>
    </>
  );
};

export default Learn;
