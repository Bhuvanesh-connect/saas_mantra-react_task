import React from 'react';
import './Topbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

function Topbar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg">
          <Container fluid>
              <Navbar.Brand><i className="fa fa-brands fa-windows me-2"></i> Opalin</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto ms-3">
                      <NavLink to="/home" className="nav-link">Home</NavLink>
                      <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
                      <NavLink to="/about" className="nav-link">About</NavLink>
                  </Nav>
                  <Nav>
                      <NavLink to="/login" className="nav-link d-flex align-items-center">Log In</NavLink>
                      <NavLink to="/sign_up" className="btn_SignUp">Sign Up</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Topbar