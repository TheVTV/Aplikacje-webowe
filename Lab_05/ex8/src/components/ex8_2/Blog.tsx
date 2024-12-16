import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Blog.css";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
  }, []);
  const setDots = (text: string, len: number) => {
    if (text.length <= len) {
      return text;
    } else {
      return text.slice(0, len) + "...";
    }
  };
  return (
    <div className="blog-container">
      {articles.length > 0 ? (
        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <h2>{setDots(article.title, 30)}</h2>
              <p>{setDots(article.content, 100)}</p>
              <Link to={`/article/${article.id}`} className="read-more-button">
                Czytaj dalej
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Brak artykułów.</p>
      )}
    </div>
  );
};

export default Blog;
