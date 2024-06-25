import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
    return (
        <div className="welcome-page">
            <div className="welcome-container">
                <h1>Welcome to Cuisine Compass</h1>
                <div className="button-group">
                    <Link to="/login" className="welcome-button">
                        <Button className="custom-button">Login</Button>
                    </Link>
                    <Link to="/register" className="welcome-button">
                        <Button className="custom-button">Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;