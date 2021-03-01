import React from 'react';
import {Navbar, Nav,} from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div>
          <Navbar expand="lg" className="container">
            <Navbar.Brand href="#" className="logo">Team Maker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto">
                 <Nav.Link href="#" className="navItem">Sign up</Nav.Link>
                <Nav.Link href="#" className="navItem">Log in</Nav.Link>
                <Nav.Link href="#" className="navItem">Premium</Nav.Link>
      
            </Nav>

            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;