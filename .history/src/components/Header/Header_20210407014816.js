import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from "react-router-dom";
import logo from '../../onion-restaurent/logo2.png';
import './Header.css';
const Header = () => {
    const header = {
        logo : {width: '180px'}
    }
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div>
              <img style={header.logo} src={logo} alt="" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse  navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="header-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="header-link" to="/order">
                    Order
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="header-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="header-link" to="/signUp">
                    Sing up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="180"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Header;