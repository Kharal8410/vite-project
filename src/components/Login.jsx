import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/toast.service";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleChange(e) {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            email,
            password
        };
        axios.post("https://backend-mu-pied.vercel.app/users/login", data).then((resp) => {
            console.log(resp)
            if (resp.data.status) {
                navigate("/product");

                successToast(resp.data.message);

            }
        })
            .catch((err) => {
                console.log("err", err.response.data.message);
                errorToast(err.response.data.message);
            });
    }
    return (
        <Form className=' m-auto mt-5 bg-light w-25 p-4 rounded' >
            <h3 className='text-center'> Login Form</h3>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary w-100" type="submit" onClick={handleSubmit}>
                Login
            </Button>
            <p className="mt-3">
                Dont have an account? <a href="/signup" className='text-decoration-none'>Signup</a>
            </p>
        </Form>
    );
}

export default Login;