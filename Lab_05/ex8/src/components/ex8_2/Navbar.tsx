import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const handleReset = () => {
    localStorage.removeItem("articles");
    window.location.reload();
  };

  const getLinkClass = (path: string) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className={getLinkClass("/")}>
          Strona główna
        </Link>
        <Link to="/blog" className={getLinkClass("/blog")}>
          Lista artykułów
        </Link>
        <Link to="/dodaj" className={getLinkClass("/dodaj")}>
          Dodaj artykuł
        </Link>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Resetuj artykuły
      </button>
    </nav>
  );
};

export default Navbar;
