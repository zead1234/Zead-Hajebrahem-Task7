import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Title } from "./shared/StyledComponents";

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <Title>My website</Title>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="mx-2" to="/home">Home</Link>
            <Link className="mx-2" to="/about">About</Link>
            <Link className="mx-2" to="/login">Login</Link>
            <Link className="mx-2" to="/register">Register</Link>
            <Link className="mx-2" to="/add-prodcuts">Add product</Link>
            <Link className="mx-2" to="/update-prodcuts">Update product</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
