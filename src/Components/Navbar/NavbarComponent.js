import React from 'react'
// import react bootstrap
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../../Styles/navbar.css'

function NavbarComponent() {
    return (
        <div>
            <Navbar className="navbar-color"  expand="lg" fixed='top'>
                <Container>
                <Navbar.Brand className="nav-text" href="#home">RKM-POLOTANA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link className="nav-text" href="#features">Home</Nav.Link>
                    <Nav.Link className="nav-text" href="#pricing">Pujas</Nav.Link>
                    <Nav.Link className="nav-text" href="#pricing">Event</Nav.Link>
                    <NavDropdown className="nav-text" title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link className="nav-text" href="#deets">
                        +8802157
                    </Nav.Link>
                    <Nav.Link className="nav-text" eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
