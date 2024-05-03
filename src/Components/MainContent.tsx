import "./MainContent.css";
import testData from './TestDataset.json';
import MenuItem from "./MenuItem";

interface Recipe {
    recipeName: string;
    image: string;
    calories: number;
}

function MainContent() {
    return (
        <div className="main-content">
            <div className="grid-container">
                {testData.map((recipe: Recipe) => (
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