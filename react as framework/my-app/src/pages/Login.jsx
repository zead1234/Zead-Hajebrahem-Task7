import { Button, Container, Form } from "react-bootstrap";
import "./../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        if (res.status == 200) {
          navigate("/home");
        }
      });
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={login} style={{ width: "800px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
