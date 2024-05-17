import { useParams } from 'react-router-dom';
import testData from './TestDataset.json';
import './RecipeDetails.css';

interface Recipe {
    recipeName: string;
    image: string;
    calories: number;
    ingredients: string[];
    instructions: string;
}

function RecipeDetail() {
    const { recipeName } = useParams<{ recipeName: string }>();
    const recipe = testData.find((item: Recipe) => item.recipeName === recipeName);
    
    if (!recipe) {
        return <h1>Recipe not found</h1>;
    }

    return (
        <>
            <div className="page">
                <h1>{recipe.recipeName}</h1>
                <img className="food-image" src={`/${recipe.image}`} alt={recipe.recipeName} />
                <h4>Calories: {recipe.calories}</h4>

                <h3>Ingredients: </h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                <h3>Instructions: </h3>
                <ol>
                    {toArray(recipe.instructions).map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </>
    );
}

function toArray(convert: string) {
    return convert.split(". ");
}

export default RecipeDetail;