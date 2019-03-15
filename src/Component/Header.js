import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Head extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#home">Ecommerce24</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/home"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/product"
              >
                Features
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/home"
              >
                Pricing
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Head;
