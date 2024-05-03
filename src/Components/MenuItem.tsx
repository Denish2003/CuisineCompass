import './MenuItem.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface Recipe {
    recipeName: string;
    image: string;
    calories: number;
}

function MenuItem({ recipeName, image, calories }: Recipe) {
    return (
        <div>
            <Card id="card" key={recipeName}>
                <Card.Img variant="top" src={image} alt={recipeName} />
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>Calories: {calories}</Card.Text>
                    <Link to={`/recipes/${recipeName}`} className="btn btn-primary">View Recipe</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MenuItem;
