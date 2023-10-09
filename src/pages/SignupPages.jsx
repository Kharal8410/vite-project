import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";


function Signup() {
    const [fullName, setFullName] = useState(0);
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const signup = async (e) => {
        e.preventDefault();

        const { data } = await axios.get('https://backend-mu-pied.vercel.app/users/register');

        console.log(data);
    }
    return (
        <Form className=' m-auto mt-5 bg-light w-25 p-4 rounded' >
            <h3 className='text-center'> Signup Form</h3>
            <Form.Group className="mb-3" >
                <Form.Label>Full Name:</Form.Label>
                <Form.Control type="email" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary w-100" type="submit" onClick={signup}>
                Sign Up
            </Button>
            <p className="mt-3 text-center">
                Already have an account? <a href="/" className='text-decoration-none'>Login</a>
            </p>
        </Form>
    );
}

export default Signup;