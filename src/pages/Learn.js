import React, { useEffect, useState } from 'react';
import '../assets/styles/learn.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from '../components/ArticleCard';
import Carousel from "../components/Carousel";
import Loading from '../components/Loading';


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
      <Navbar />
      <Carousel />
      {loading && <Loading />}
      <div class="album py-5 bg-light">
        <div class="container">
          <div id="display-articles" class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            {articlesList.map((article) => <Card article={article} key={article.id} />)}
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default App;

/*


  */