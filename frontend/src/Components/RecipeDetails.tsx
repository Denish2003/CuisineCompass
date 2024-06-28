import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './RecipeDetails.css';
import { RecipeProps} from './types';

function RecipeDetails({ recipes }: RecipeProps) {
    const { recipeName } = useParams<{ recipeName: string }>();
    const recipe = recipes.find(r => r.label === recipeName);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    console.log(recipe);
    return (
        <>
            <div className="page">
                <h1 className="recipe-title">{recipe.label}</h1>

                <Container>
                    <Row>
                        <Col>
                            <img className="food-image" src={recipe.image} alt={recipe.label} />
                        </Col>

                        <Col>
                            <h4>Calories: {recipe.calories}</h4>

                            <h4>Diet Labels:</h4>
                            <ul className="diet-labels">
                                {recipe.dietLabels?.map((label, index) => (
                                    <li key={index} className="diet-label">
                                        {label}
                                    </li>
                                ))}
                            </ul>

                            <h4>Health Labels:</h4>
                            <ul className="health-labels">
                            {recipe.healthLabels?.map((label, index) => (
                                <li key={index} className="health-label">
                                {label}
                                </li>
                            ))}
                            </ul>

                            <h4>Meal Type:</h4>
                            <ul className="meal-type">
                                {recipe.mealType?.map((label, index) => (
                                    <li key={index} className="meal-type">
                                        {label}
                                    </li>
                                ))}
                            </ul>

                            <h4>Dish Type:</h4>
                            <ul className="dish-type">
                                {recipe.dishType?.map((label, index) => (
                                    <li key={index} className="dish-type">
                                        {label}
                                    </li>
                                ))}
                            </ul>

                            <h4>Cuisine Type:</h4>
                            <ul className="cuisine-type">
                                {recipe.cuisineType?.map((label, index) => (
                                    <li key={index} className="cuisine-type">
                                        {label}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>

                    <h4>Ingredients:</h4>
                    <ol className="ingredient-list">
                        {recipe.instructions?.map((ingredient, index) => (
                            <li key={index} className="ingredient-item">
                                {ingredient}
                            </li>
                        ))}
                    </ol>

                    <h4>Instructions:</h4>
                    <ol className="instruction-list">
                        {recipe.instructions?.map((ingredient, index) => (
                            <li key={index} className="instruction-item">
                                {ingredient}
                            </li>
                        ))}
                    </ol>
                </Container> 
            </div>
        </>
    );
}

export default RecipeDetails;
