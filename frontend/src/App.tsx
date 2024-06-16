import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Recipe } from './Components/types';
import { SearchProvider } from './Components/SearchContext';

import SideNav from "./Components/SideNav";
import MainContent from "./Components/MainContent";
import RecipeDetails from "./Components/RecipeDetails";
import Submission from './Components/Submission';
import Feedback from './Components/Feedback';
import Register from './Components/Register';

function App() {
  const APP_ID = "d00499e6";
  const APP_KEY = "b3721c3874f7f10390fb4843a86f6536";
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const location = useLocation();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=salad&&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    const allRecipes = data.hits.map((hit: any) => ({
      label: hit.recipe.label,
      image: hit.recipe.image,
      calories: Math.round(hit.recipe.calories),
      ingredients: hit.recipe.ingredients,
      instructions: hit.recipe.instructions
    }));
    
    setRecipes(allRecipes);
  };

  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        
        {location.pathname !== '/register' && <SideNav />}

        <Routes>
          <Route path="/" element={<MainContent recipes={recipes} />} />
          <Route path="/recipes/:recipeName" element={<RecipeDetails recipes={recipes} />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
