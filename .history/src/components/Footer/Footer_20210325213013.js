import React from 'react';
import { NavLink } from 'react-bootstrap';
import Logo from '../../onion-restaurent/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 col-sm-12">
              <img className="footer-img" src={Logo} alt="" />
            </div>
            <div className="col-md-3 col-sm-12">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    About online food
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Read our blog
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Sign up to delivery
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link disabled"
                    to="/"
                  >
                    Add your restaurant
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Get help
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Read FAQS
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    View all cities
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link disabled" to="/">
                    Restaurants near me
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;