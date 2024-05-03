import { Col, Row } from "react-bootstrap";
import ListGroup from "./ListGroup";
import MenuItem from "./MenuItem";
import RecipeDetail from "./RecipeDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statement
import "./Sidebar.css";

function Sidebar() {
  let cuisines = [
    "Italian",
    "Mexican",
    "Chinese",
    "Korean",
    "Japanese",
    "Mediterranean",
    "Indian",
    "American",
    "French",
    "Thai",
    "Greek",
    "Middle Eastern",
  ];
  let mealTypes = [
    "Breakfast", 
    "Brunch", 
    "Lunch", 
    "Dinner", 
    "Snack", 
    "Desserts"
  ];
  let dietaryPreferences = [
    "Vegetarian",
    "Vegan",
    "Gluten Free",
    "Dairy Free",
    "Keto",
    "Paleo",
    "Low Carb",
    "Low Fat",
    "Low Sodium",
    "Low Sugar",
    "High Protein",
    "High Fiber",
  ];
  let occasions = [
    "Party/Festive",
    "Quick & Easy",
    "Comfort Food",
    "Budget Friendly",
    "Date Night",
  ];

  return (
    <Router>
      <div className="container">
        <Row>
          <Col xs={3}>
            <div className="sidebar">
              <ListGroup items={cuisines} heading={"Cuisine"} />
              <ListGroup items={mealTypes} heading={"Meal Types"} />
              <ListGroup items={dietaryPreferences} heading={"Dietary Preferences"} />
              <ListGroup items={occasions} heading={"Occasions"} />
            </div>
          </Col>
          <Col xs={9}>
            <div className="content">
              <Routes> {}
                <Route path="/" element={<MenuItem />} /> {}
                <Route path="/recipe/:recipeName" element={<RecipeDetail />} /> {}
              </Routes>
            </div>
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default Sidebar;
