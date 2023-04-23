import {
  LearnTitle,
  QuerySelector,
  ArticleCard,
  useArticleList,
  LearnControl,
} from "../features/Learn";
import "../assets/Learn.css";
import Masonry from "react-masonry-css";
import { Box } from "@chakra-ui/react";

const breakpointColumnsObj = {
  default: 4,
  1400: 4,
  1200: 3,
  992: 2,
  768: 2,
  576: 1,
};

const Learn = () => {
  const { articlesList, isLoading } = useArticleList();

  return (
    <>
      <LearnTitle />
      <LearnControl />
      <Box className="container" mt={12}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid--col d-flex flex-column align-items-center"
        >
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={1} />
            ))}
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={3} />
            ))}
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={2} />
            ))}
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={3} />
            ))}
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={1} />
            ))}
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={3} />
            ))}
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={2} />
            ))}
          {!isLoading &&
            articlesList.map((article) => (
              <ArticleCard article={article} key={article.id} num={1} />
            ))}
        </Masonry>
      </Box>
    </>
  );
};

export default Learn;
