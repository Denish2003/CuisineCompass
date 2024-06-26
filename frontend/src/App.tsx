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
import Login from './Components/Login';
import Welcome from './Components/Welcome';

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
      dietLabels: hit.recipe.dietLabels,
      healthLabels: hit.recipe.healthLabels,
      mealType: hit.recipe.mealType,
      dishType: hit.recipe.dishType,
      cuisineType: hit.recipe.cuisineType,
      ingredients: hit.recipe.ingredientLines,
      instructions: hit.recipe.ingredientLines
    }));
    
    setRecipes(allRecipes);
  };

  return (
    <>
      <SearchProvider>
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        {location.pathname !== '/' && location.pathname !== '/register' && location.pathname !== '/login' && <SideNav />}

        <Routes>
          <Route path="/home" element={<MainContent recipes={recipes} />} />
          <Route path="/recipes/:recipeName" element={<RecipeDetails recipes={recipes} />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
