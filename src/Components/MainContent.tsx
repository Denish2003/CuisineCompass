import "./MainContent.css";
import testData from './TestDataset.json';
import MenuItem from "./MenuItem";
import { useSearch } from './SearchContext';

interface Recipe {
    recipeName: string;
    image: string;
    calories: number;
}

function MainContent() {
    const { searchTerm } = useSearch();

    return (
        <div className="main-content">
            <div className="grid-container">
                {testData.filter((recipe: Recipe) => {
                    return searchTerm.toLowerCase() === '' 
                    ? recipe 
                    : recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase());
                }).map((recipe: Recipe) => (
                    <MenuItem key={recipe.recipeName} 
                            recipeName={recipe.recipeName} 
                            image={recipe.image} 
                            calories={recipe.calories} />
                ))}
            </div>
        </div>
    );
}

export default MainContent;
