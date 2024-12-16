import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddArticle.css";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleAddArticle = () => {
    if (title.length <= 100) {
      const newArticle = {
        id: Date.now(),
        title,
        content,
      };

      const storedArticles = localStorage.getItem("articles");
      const articles = storedArticles ? JSON.parse(storedArticles) : [];
      articles.push(newArticle);
      localStorage.setItem("articles", JSON.stringify(articles));

      navigate("/blog");
    } else {
      alert("Tytuł artykułu nie może mieć więcej niż 30 znaków!");
    }
  };

  return (
    <div className="add-article-container">
      <h1>Dodaj nowy artykuł</h1>
      <form className="add-article-form">
        <label>
          <input
            type="text"
            placeholder="Wpisz tytuł artykułu"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <textarea
            placeholder="Wpisz treść artykułu"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <button
          type="button"
          onClick={handleAddArticle}
          disabled={!title || !content}
          className="submit-button"
        >
          Dodaj artykuł
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
