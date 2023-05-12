import { Button, Container, Form } from "react-bootstrap";
import "./../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  let { state } = useLocation();
  const updateProduct = (event) => {
    event.preventDefault();
    
    axios
      .put(
        `http://localhost:3000/products/${state.id.id}`,
        {
          title: title, 
          description: description,
        },
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"), 
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={updateProduct} style={{ width: "800px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter Title"
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Description"
            value={description}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateProduct;
