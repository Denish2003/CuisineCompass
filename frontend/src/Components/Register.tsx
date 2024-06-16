import {
    MDBBtn,
    MDBContainer,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput,
} from 'mdb-react-ui-kit';

import "./Register.css";
import axios from 'axios';

function Register() {
    return (
        <MDBContainer fluid className='bg-dark vh-100'>
            <MDBRow className='h-100 no-gutters'>
                <MDBCol md='6' className="p-4 m-0 d-flex align-items-center justify-content-center">
                    <MDBCardBody className='text-black'>
                        <h2 className="mb-5 text-uppercase fw-bold register-heading">Register</h2>
        
                        <MDBRow>
                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                            </MDBCol>
            
                            <MDBCol md='6'>
                            <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                            </MDBCol>
                        </MDBRow>

                        <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='form6' type='text' />
                        <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form6' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form6' type='password' />
        
                        <div className="d-flex justify-content-end pt-3">
                            <MDBBtn className='ms-2 btn' size='lg'>Register</MDBBtn>
                        </div>
        
                    </MDBCardBody>
                </MDBCol>

                <MDBCol md='6' className="image"></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Register;
