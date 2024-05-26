import { Route, Routes, useLocation } from 'react-router-dom';
import SideNav from "./Components/SideNav";
import MainContent from "./Components/MainContent";
import RecipeDetails from "./Components/RecipeDetails";
import { useState, useEffect } from 'react';
import { SearchProvider } from './Components/SearchContext';

const landingPage = [
  { heading: "Cuisines", items: ["Italian", "Mexican", "Chinese", "Korean", "Japanese", "Mediterranean", "Indian", "American", "French", "Thai", "Greek", "Middle Eastern"] },
  { heading: "Meal Types", items: ["Breakfast", "Brunch", "Lunch", "Dinner", "Snack", "Desserts"] },
  { heading: "Dietary Preferences", items: ["Vegetarian", "Vegan", "Gluten Free", "Dairy Free", "Keto", "Paleo", "Low Carb", "Low Fat", "Low Sodium", "Low Sugar", "High Protein", "High Fiber"] },
  { heading: "Occasions", items: ["Party/Festive", "Quick & Easy", "Comfort Food", "Budget Friendly","Date Night"] },
];

const recipePage = [
  { heading: "Meal Types", items: ["Breakfast", "Brunch", "Lunch", "Dinner", "Snack", "Desserts"] }
];

function App() {
  const location = useLocation();
  const [sideNavData, setSideNavData] = useState(landingPage);

  useEffect(() => {
    if (location.pathname.startsWith('/recipes/')) {
      setSideNavData(recipePage);
    } else {
      setSideNavData(landingPage);
    }
  }, [location.pathname]);

  return (
      <>
        <SearchProvider>
          <SideNav data={sideNavData} />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/recipes/:recipeName" element={<RecipeDetails />} />
            </Routes>
        </SearchProvider>
      </>
  );
}

export default App;