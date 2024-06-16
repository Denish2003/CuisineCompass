import './MenuItem.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Recipe } from './types';

function MenuItem(recipe : Recipe) {
    return (
        <div>
            <Card id="card" key={recipe.label}>
                <Card.Img variant="top" src={recipe.image} alt={recipe.label} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>{recipe.label}</Card.Title>
                    <Card.Text>Calories: {recipe.calories.toString()}</Card.Text>
                    <Link to={`/recipes/${recipe.label}`} className="btn btn-primary">View Recipe</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MenuItem;
