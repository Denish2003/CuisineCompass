import { Form, Button } from 'react-bootstrap';
import './Submission.css';

function Submission() {
  return (
    <div className="submission">
        <h1>Recipe Submission Form</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="input" placeholder="Enter recipe name" />
            </Form.Group>

            <label htmlFor="formFile" className="form-label">Recipe Image</label>
            <input className="form-control form-control-md custom-input" id="formFileLg" type="file" />
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Recipe Ingredients</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Recipe Instructions</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>
    </div>
  );
}

export default Submission;
