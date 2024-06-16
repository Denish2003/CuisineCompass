import { Form, Button } from 'react-bootstrap';
import './Submission.css';

function Submission() {
  return (
    <div className="submission">
        <h1 className="heading-submission">Recipe Submission Form</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="form-label">Recipe Name</Form.Label>
                <Form.Control className="form-input" type="input" placeholder="Enter recipe name" />
            </Form.Group>

            <label htmlFor="formFile" className="form-label">Recipe Image</label>
            <input className="form-control form-control-md custom-input form-input" id="formFileLg" type="file" />
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-label">Recipe Ingredients</Form.Label>
                <Form.Control className="form-input" as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-label">Recipe Instructions</Form.Label>
                <Form.Control className="form-input" as="textarea" rows={3} />
            </Form.Group>

            <div className="d-flex justify-content-center">
                <Button className="form-button" variant="primary" type="submit">
                    Submit
                </Button>
            </div>
            
        </Form>
    </div>
  );
}

export default Submission;
