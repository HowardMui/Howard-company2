import React, { useState } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import "./header.scss";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="py-3" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Howard Co.</Navbar.Brand>
        <Navbar.Toggle>
          <IoMenuSharp></IoMenuSharp>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
            <Button>Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
