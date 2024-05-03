import ListGroup from "./ListGroup";
import "./SideNav.css";

function SideNav() {
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
        <div className="sidenav">
            <ListGroup items={cuisines} heading={"Cuisine"} />
            <ListGroup items={mealTypes} heading={"Meal Types"} />
            <ListGroup items={dietaryPreferences} heading={"Dietary Preferences"} />
            <ListGroup items={occasions} heading={"Occasions"} />
        </div>
    );
}

export default SideNav;

