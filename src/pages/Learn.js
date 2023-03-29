import {
  LearnTitle,
  QuerySelector,
  ArticleCard,
  useArticleList,
} from "../features/Learn";
import "../assets/Learn.css";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1600: 3,
  992: 2,
  576: 1,
};

const Learn = () => {
  const { articlesList, isLoading } = useArticleList();

  return (
    <>
      <LearnTitle />
      <div className="row px-3 pt-5 learn-body m-0 mb-5">
        <QuerySelector />
        <div className="col-lg-9 col-md-8 col-12">
          <div className="container d-flex flex-column align-items-center">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid--col"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
