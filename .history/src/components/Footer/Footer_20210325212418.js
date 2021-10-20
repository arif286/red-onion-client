import React from 'react';
import Logo from '../../assets/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img className="footer-img" src={Logo} alt="" />
            </div>
            <div className="col-md-3 col-sm-12">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;