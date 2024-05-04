import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationSearch from "./Components/NavigationSearch";
import SideNav from "./Components/SideNav";
import MainContent from "./Components/MainContent";
import RecipeDetails from "./Components/RecipeDetails";

function App() {
  return (
      <>
        <NavigationSearch />
        <SideNav />
        <Router>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/recipes/:recipeName" element={<RecipeDetails />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;