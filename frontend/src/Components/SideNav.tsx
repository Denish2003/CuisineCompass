import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./SideNav.css";

function SideNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <a href="/home" className="brand">Cuisine Compass</a>
        <a href="/home" className="side-menu">Home</a>
        <Link to="/home/?scrollTo=heading" className="side-menu">Recipes</Link>
        <Link to="/filter" className="side-menu">Filter</Link>
        <Link to="/submission" className="side-menu">Recipe Submission</Link>

        <Link to="/feedback" className="feedback-button">
          <Button className="custom-button">Feedback</Button>
        </Link>

        <div className="account-section">
          <Link to="/profile" className="account-menu">Profile</Link>
          <Link to="/logout" className="account-menu">Log Out</Link>
          <Link to="/delete-account" className="account-menu delete-account">Delete Account</Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
