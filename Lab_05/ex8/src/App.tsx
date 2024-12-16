import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Licznik from "./components/ex8_1/Licznik";
import Home from "./components/ex8_2/Home";
import Blog from "./components/ex8_2/Blog";
import Article from "./components/ex8_2/Article";
import AddArticle from "./components/ex8_2/AddArticle";
import Navbar from "./components/ex8_2/Navbar";

const App: React.FC = () => {
  return (
    // <Licznik />
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/dodaj" element={<AddArticle />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
