import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Article.css";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      const articles: Article[] = JSON.parse(storedArticles);
      const foundArticle = articles.find((a) => a.id === Number(id));
      setArticle(foundArticle || null);
    }
  }, [id]);

  return (
    <div className="article-container">
      {article ? (
        <>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </>
      ) : (
        <p>Nie znaleziono artykułu.</p>
      )}
    </div>
  );
};

export default Article;
