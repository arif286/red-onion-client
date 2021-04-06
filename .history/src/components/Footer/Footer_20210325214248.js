import React from 'react';
import { NavLink } from 'react-bootstrap';
import Logo from '../../onion-restaurent/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 col-sm-12 pb-4">
              <img className="footer-img" src={Logo} alt="" />
            </div>
            <div className="col-md-3 col-sm-12 pb-4">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active footer-link"
                    aria-current="page"
                    to="/"
                  >
                    About online food
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link footer-link" to="/">
                    Read our blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link footer-link" to="/">
                    Sign up to delivery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link footer-link" to="/">
                    Add your restaurant
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 pb-4">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className="nav-link footer-link"
                    aria-current="page"
                    to="/"
                  >
                    Get help
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link footer-link" to="/">
                    Read FAQS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link footer-link" to="/">
                    View all cities
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link footer-link" to="/">
                    Restaurants near me
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

            <div className='row'>
                    <div className='col-md-6'>
                        <p><small>copyright online food</small></p>
                    </div>
                <div className='col-md-6'></div>
            </div>
        </div>
      </footer>
    );
};

export default Footer;