import React, { useEffect, useState } from 'react';
import "./Learn.css";
import ArticleCard from '../../components/ArticleCard';
import LearnTitle from "./LearnTitle";
import QuerySelector from './QuerySelector';
import { getDocs, collection, doc, getFirestore } from "firebase/firestore";
import LinearProgress from '@mui/material/LinearProgress';
import useFirestore from '../../hooks/useFirestore';


export default function() {

  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const db = useFirestore();
  const articlesCollectionRef = collection(db, "articles");

  const getArticles = async () => {
    const data = await getDocs(articlesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    setArticlesList(filteredData);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });
    }, 500);

    getArticles();
    setProgress(100);
    setIsLoading(false);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {isLoading && <LinearProgress variant='determinate' value={progress} />}
      <LearnTitle />
      <div className="row px-3">
        <QuerySelector />
        <div className="col-lg-9 col-md-8 px-sm-5 col-12">
        <div className="album mb-5">
        <div className="container">
          <div id="display-articles" className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xl-3 g-3">
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            {!isLoading && articlesList.map((article) => <ArticleCard article={article} key={article.id} />)}
            
          </div>
        </div>
      </div>
        </div>
      </div>
      

    </>
  );
};