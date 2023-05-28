import {
  LearnTitle,
  InsightList,
  QuerySelector,
  useArticleList,
} from "../features/Learn";
import ContainerGrid from "../layouts/ContainerGrid";
import { Box } from "@chakra-ui/react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Learn = () => {
  const { articles, isLoading } = useArticleList();
  const { width } = useWindowDimensions();

  return (
    <>
      <LearnTitle />
      <Box bg="gray.50">
        <ContainerGrid>
          {width >= 768 ? (
            <>
              <InsightList articles={articles} />
              <QuerySelector />
            </>
          ) : (
            <>
              <QuerySelector />
              <InsightList articles={articles} />
            </>
          )}
        </ContainerGrid>
      </Box>
    </>
  );
};

export default Learn;
