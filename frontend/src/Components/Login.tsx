import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import './Login.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/users/login", {
                username,
                password
            });
            
            history("/home", {state:{id:username}});

        } catch (error) {
            console.error('Error loging in the user:', error);
        }
    };

    return (
        <MDBContainer fluid className='bg-dark vh-100'>
            <MDBRow className='h-100 no-gutters'>
                <MDBCol md='6' className="p-4 m-0 d-flex align-items-center justify-content-center">
                    <MDBCardBody className='text-black'>
                        <h2 className="mb-5 text-uppercase fw-bold register-heading">Login</h2>

                        <form onSubmit={handleRegister}>
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Username'
                                size='lg'
                                id='form3'
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Password'
                                size='lg'
                                id='form5'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <div className="d-flex justify-content-end pt-3">
                                <Button className="login-button" variant="primary" type="submit">Login</Button>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCol>

                <MDBCol md='6' className="image"></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;
