import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../services/firebase";

const useArticleList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const articlesCollectionRef = collection(db, "articles");

  const getArticles = async () => {
    const data = await getDocs(articlesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setArticlesList(filteredData);
  };

  useEffect(() => {
    getArticles();
    setIsLoading(false);
  }, []);

  return { articlesList, isLoading };
};

export default useArticleList;
