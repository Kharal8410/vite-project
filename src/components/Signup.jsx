import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/toast.service";


function Signup() {
    const [fullName, setFullName] = useState(0);
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);

    const nav = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const data = {
            fullName,
            email,
            password,
        };

        try {
            const resp = await axios.post(
                "https://backend-mu-pied.vercel.app/users/register",
                data
            );

            if (resp.data.status) {
                nav("/");
                successToast(resp.data.message);
            }
        } catch (err) {
            errorToast(err.response.data.message);
        }
    };


    return (
        <Form className=' m-auto mt-5 bg-light w-25 p-4 rounded' >
            <h3 className='text-center'> Signup Form</h3>
            <Form.Group className="mb-3" >
                <Form.Label>Full Name:</Form.Label>
                <Form.Control type="email" placeholder="Enter Full Name" onChange={(e) => setFullName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary w-100" type="submit" onClick={handleSignUp}>
                Sign Up
            </Button>
            <p className="mt-3 text-center">
                Already have an account? <a href="/" className='text-decoration-none'>Login</a>
            </p>
        </Form>
    );
}

export default Signup;