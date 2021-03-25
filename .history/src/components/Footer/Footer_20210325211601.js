import React from 'react';
import Logo from '../../onion-restaurent/logo2.png';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <img src={Logo} alt=''/>
                    </div>
                    <div className='col-md-3 col-sm-12'></div>
                    <div className='col-md-3 col-sm-12'></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;