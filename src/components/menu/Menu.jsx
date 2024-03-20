import React from 'react'
import "./menu.css"
import {Navbar, Container, Nav } from 'react-bootstrap'



const Menu = () => {

    

  return (
    <>

<Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#desktop">Desktop</Nav.Link>
            <Nav.Link href="#laptop">Laptop</Nav.Link>
            <Nav.Link href="#monitor">Monitor</Nav.Link>
            <Nav.Link href="#phone">Phone</Nav.Link>
            <Nav.Link href="#tablet">Tablet</Nav.Link>
            <Nav.Link href="#camera">Camera</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Menu