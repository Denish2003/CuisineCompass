import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import './Register.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = { 
            first_name: firstName, 
            last_name: lastName, 
            username, 
            email, 
            password 
        };

        console.log('Sending payload:', payload); // Log payload before sending
        try {
            const response = await axios.post("http://localhost:8000/api/users/register", payload);
            console.log('Response from backend:', response.data);
            setMessage('User registered successfully');

            history("/home", {state:{id:username}});

        } catch (error: any) {
            console.error('Error registering user:', error.response ? error.response.data : error.message);
            setMessage(error.response ? error.response.data.error : 'Error registering user');
        }
    };

    return (
        <MDBContainer fluid className='bg-dark vh-100'>
            <MDBRow className='h-100 no-gutters'>
                <MDBCol md='6' className="p-4 m-0 d-flex align-items-center justify-content-center">
                    <MDBCardBody className='text-black'>
                        <h2 className="mb-5 text-uppercase fw-bold register-heading">Register</h2>

                        <form onSubmit={handleRegister}>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='First Name'
                                        size='lg'
                                        id='form1'
                                        type='text'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </MDBCol>

                                <MDBCol md='6'>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Last Name'
                                        size='lg'
                                        id='form2'
                                        type='text'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </MDBCol>
                            </MDBRow>

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
                                label='Email'
                                size='lg'
                                id='form4'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                <Button className="register-button" variant="primary" type="submit">Register</Button>
                            </div>
                        </form>

                        {message && <p className="error">{message}</p>}
                    </MDBCardBody>
                </MDBCol>

                <MDBCol md='6' className="image"></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Register;
