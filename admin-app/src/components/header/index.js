import React from 'react';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <li className = "nav-item">
            <Link className = "navbar-brand" to="/">Admin Dashboard</Link>
        </li>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <li className = "nav-item">
              <NavLink className = "nav-link" to="/signin">Signin</NavLink>
            </li>
            <li className = "nav-item">
              <NavLink className = "nav-link" to="/signup">Signup</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
   )

 }

export default Header