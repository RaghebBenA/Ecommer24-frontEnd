import React, { Component } from "react";
import { Nav, Navbar,Jumbotron } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Head extends Component {
  render() {
    return (
      <React.Fragment>
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
      <Jumbotron>
      <div className="container">
          <div className="row row-header">
              <div className="col-12 col-sm-6">
                  <h1>Ecommerce24</h1>
                  <p>We Take inspiration from the world's best cuisines,
                  and create a unique fusion experience. Our lipsmacking
  creation will tickle your culinary senses! </p>
              </div>
          </div>
      </div>
  </Jumbotron>
  </React.Fragment>
    );
  }
}
export default Head;
