import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const url = `http://localhost:5000/login`;
        const getLoginInfo = async () => {
            const request = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const response = await request.json();
            if (response.success) {
                console.log(response);
                navigate('/order');
                localStorage.setItem('access-token', response.accessToken);
            } else {
                console.log(response);
            }
        };
        getLoginInfo();

        // console.log(email, password);
    };

    return (
        <div className='mt-5 text-start'>
            <Form className='w-50 mx-auto shadow p-5 rounded-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;