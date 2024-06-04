import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import "./SideNav.css";

function SideNav() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      const targetElement = document.getElementById(scrollTo);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 48,
          behavior: "smooth",
        });
      }
    }
  }, [location.search]);

  return (
    <div className="sidenav">
      <a href="/" className="brand">Cuisine Compass</a>
      <a href="/" className="side-menu">Home</a>
      <Link to="/?scrollTo=heading" className="side-menu">Recipes</Link>
      <Link to="/filter" className="side-menu">Filter</Link>
      <Link to="/submission" className="side-menu">Recipe Submission</Link>

      <Link to="/feedback" className="feedback-button">
        <Button>Feedback</Button>
      </Link>
    </div>
  );
}

export default SideNav;
