import React from 'react'
// import react bootstrap
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import '../../Styles/navbar.css'

function NavbarComponent() {

    return (
        <div className='navbar-full-div'>
            <Navbar className="navbar-color"  expand="lg" fixed='top'>
                <Container>
                <Image src="./images/rkmlogo.jpeg" alt="" title="Ramakrishna Seba Ashram Polotana" className="rkmlogo" />
                <Navbar.Brand className="nav-text-main" href="/">RKSA-POLOTANA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link className="nav-text" href="/">Home</Nav.Link>
                    <Nav.Link className="nav-text" href="/puja">Pujas</Nav.Link>
                    <Nav.Link className="nav-text" href="/event">Event</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link className="nav-text" href="#deets">
                        +880173277132
                    </Nav.Link>
                    <Nav.Link className="nav-text" eventKey={2} href="#memes">
                        Contact
                    </Nav.Link>
                    <Nav.Link className="nav-text" eventKey={2} href="#memes">
                        Donate
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
