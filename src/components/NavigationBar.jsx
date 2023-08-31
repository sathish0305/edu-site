import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-transparent" sticky="top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className='nav-logo'><span className='navlogo-py'>Edu</span>Site</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#about">About</Nav.Link>
            <Nav.Link className='nav-link' href="#courses">Courses</Nav.Link>
            <Nav.Link className='nav-link' href="#memes">Branches</Nav.Link>
            <Nav.Link className='nav-link' href="#corporates">Corporates</Nav.Link>
            <Nav.Link className='nav-link' href="#deets">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
