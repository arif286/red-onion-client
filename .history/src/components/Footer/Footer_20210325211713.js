import React from 'react';
import Logo from '../../assets/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <img className='footer-img' src={Logo} alt=''/>
                    </div>
                    <div className='col-md-3 col-sm-12'></div>
                    <div className='col-md-3 col-sm-12'></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;