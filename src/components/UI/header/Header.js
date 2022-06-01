import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Link to="/">
          <Navbar.Brand> Movies App </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
