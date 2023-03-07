import React, { useEffect, useState } from 'react';
import "./Learn.css";
import Card from './ArticleCard';
import Carousel from "./Carousel";
import Loading from '../../components/Loading';


function App() {

  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    fetch("https://schoolofathens.world/api/getArticles")
      .then((response) => response.json())
      .then((data) => {
        setArticlesList(data.articlesList);
        setLoading(false);
      })
  }, []);

  console.log('rerender');

  return (
    <>
      <Carousel />
      {loading && <Loading />}
      <div className="album mb-5 bg-light">
        <div className="container">
          <div id="display-articles" className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            {articlesList.map((article) => <Card article={article} key={article.id} />)}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;