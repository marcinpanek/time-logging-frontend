import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar: React.FC = () => {
    return (
        <Navbar expand="md" bg="white" className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow">
            <Navbar.Brand>Dope Ass Web Apps</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link to="/" className="p-2 text-dark">Home</Link>
                    <Link to="/time-logging" className="p-2 text-dark">Time Logging</Link>
                </Nav>

                <a className="btn btn-outline-primary" href="#">Login</a>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;