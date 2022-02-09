import React from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import classNames from "classnames";
// import { NavSection } from "./NavStyles";

const Header = ({ className }) => {
  console.log(className);

  let styles = classNames(className, "bg-warning");

  return (
    <Navbar className={styles}>
      <Container className="abc">
        <Navbar.Brand href="#home">Howard Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
