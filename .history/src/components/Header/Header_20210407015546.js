import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import logo from '../../assets/logo2.png';
import './Header.css';
const Header = () => {

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="180"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="header-link" to="/home">
                Home
              </NavLink>
              <NavLink className="header-link" to="/order">
                order
              </NavLink>
              <NavLink className="header-link" to="/login">
                Login
              </NavLink>
              <NavLink className="header-link" to="/signUp">
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Header;