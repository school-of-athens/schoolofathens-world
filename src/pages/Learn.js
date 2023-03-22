import {
  LearnTitle,
  QuerySelector,
  ArticleCard,
  useArticleList,
} from "../features/Learn";
import "../assets/Learn.css";

const Learn = () => {
  const { articlesList, isLoading } = useArticleList();

  return (
    <>
      <LearnTitle />
      <div className="row px-3 pt-5">
        <QuerySelector />
        <div className="col-lg-9 col-md-8 col-12">
          <div className="album mb-5">
            <div className="container">
              <div
                id="display-articles"
                className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xl-3 g-3"
                data-masonry='{"percentPosition": true }'
              >
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                {!isLoading &&
                  articlesList.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
