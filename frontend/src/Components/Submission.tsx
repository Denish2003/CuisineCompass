import { Form, Button } from 'react-bootstrap';
import './Submission.css';

const dietLabels = [
  "Balanced",
  "High-Fiber",
  "High-Protein",
  "Low-Carb",
  "Low-Fat",
  "Low-Sodium"
];

const healthLabels = [
    "Alcohol-Cocktail",
    "Alcohol-Free",
    "Celery-Free",
    "Crustcean-Free",
    "Dairy-Free",
    "DASH",
    "Egg-Free",
    "Fish-Free",
    "FODMAP-Free",
    "Gluten-Free",
    "Immuno-Supportive",
    "Keto-Friendly",
    "Kidney-Friendly",
    "Kosher",
    "Low Potassium",
    "Low Sugar",
    "Lupine-Free",
    "Mediterranean",
    "Mollusk-Free",
    "Mustard-Free",
    "No oil added",
    "Paleo",
    "Peanut-Free",
    "Pescatarian",
    "Pork-Free",
    "Red-Meat-Free",
    "Sesame-Free",
    "Shellfish-Free",
    "Soy-Free",
    "Sugar-Conscious",
    "Sulfite-Free",
    "Tree-Nut-Free",
    "Vegan",
    "Vegetarian",
    "Wheat-Free"
];

const mealTypes = [
    "breakfast",
    "brunch",
    "lunch/dinner",
    "snack"
];

const dishTypes = [
    "alcohol cocktail",
    "biscuits and cookies",
    "bread",
    "cereals",
    "condiments and sauces",
    "desserts",
    "drinks",
    "egg",
    "ice cream and custard",
    "main course",
    "pancake",
    "pasta",
    "pastry",
    "pies and tarts",
    "pizza",
    "preps",
    "preserve",
    "salad",
    "sandwiches",
    "seafood",
    "side dish",
    "soup",
    "special occasions",
    "starter",
    "sweets"
];  

const cuisineTypes = [
    "american",
    "asian",
    "british",
    "caribbean",
    "central europe",
    "chinese",
    "eastern europe",
    "french",
    "greek",
    "indian",
    "italian",
    "japanese",
    "korean",
    "kosher",
    "mediterranean",
    "mexican",
    "middle eastern",
    "nordic",
    "south american",
    "south east asian",
    "world"
];  


function Submission() {
  return (
    <div className="submission">
      <h1 className="heading-submission">Recipe Submission Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="form-label">Recipe Name</Form.Label>
          <Form.Control className="form-input" type="input" placeholder="Enter recipe name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="formFile" className="form-label">Recipe Image</Form.Label>
          <Form.Control className="custom-input form-file" id="formFileLg" type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCalories">
            <Form.Label className="form-label">Calories</Form.Label>
            <Form.Control className="form-input" type="number" placeholder="Enter number of calories" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlDietLabels">
            <Form.Label className="form-label">Diet Labels</Form.Label>
            <div className="diet-label">
                {dietLabels.map((option, index) => (
                <Form.Check 
                    type="checkbox" 
                    id={option.toLowerCase().replace(/ /g, '-')} 
                    label={option} 
                    className="diet-label-check" 
                    key={index}
                />
                ))}
            </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlHealthLabels">
          <Form.Label className="form-label">Health Labels</Form.Label>
          <div className="health-label">
                {healthLabels.map((option, index) => (
                <Form.Check 
                    type="checkbox" 
                    id={option.toLowerCase().replace(/ /g, '-')} 
                    label={option} 
                    className="health-label-check" 
                    key={index}
                />
                ))}
            </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlMealTypes">
          <Form.Label className="form-label">Meal Types</Form.Label>
          <Form.Control as="select" className="form-input">
            {mealTypes.map((type, index) => (
              <option key={index} value={type.toLowerCase().replace(/ /g, '-')}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlDishTypes">
          <Form.Label className="form-label">Dish Types</Form.Label>
          <Form.Control as="select" className="form-input">
            {dishTypes.map((type, index) => (
              <option key={index} value={type.toLowerCase().replace(/ /g, '-')}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlCuisineTypes">
          <Form.Label className="form-label">Cuisine Types</Form.Label>
          <Form.Control as="select" className="form-input">
            {cuisineTypes.map((type, index) => (
              <option key={index} value={type.toLowerCase().replace(/ /g, '-')}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaIngredients">
          <Form.Label className="form-label">Ingredients</Form.Label>
          <Form.Control className="form-input" as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaInstructions">
          <Form.Label className="form-label">Instructions</Form.Label>
          <Form.Control className="form-input" as="textarea" rows={3} />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="form-button" variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default Submission;
