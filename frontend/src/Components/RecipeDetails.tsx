import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './RecipeDetails.css';
import { RecipeProps } from './types';

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
                            <h4>Ingredients: </h4>
                            
                            <h4>Instructions: </h4>
                        </Col>
                    </Row>
                </Container> 
            </div>
        </>
    );
}

export default RecipeDetails;