import React from 'react';
import Image from 'next/image';

import logo from '@images/logo.png';

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer>
      <div className='container mx-auto row footer'>
        <div className='col-12 col-md-3 '>
          <div className='footer__logo'>
            <Image src={logo} alt='Joe Bar Business Solutions logo' fill />
          </div>
        </div>
        <div className='col-12 col-md-5 row'>
          <div className='col-5 offset-md-1 footer__item--options'>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='col-5  footer__item--options'>
            <ul>
              <li>Apply for a job</li>
              <li>Contact us</li>
              <li>Our services</li>
            </ul>
          </div>
        </div>
        <div className='col-12 col-md-3  footer__item--info'>
          <ul>
            <li>59 Street, B4 Aooartment, USA</li>
            <li>+985-8444-444</li>
            <li>info@joebarsolutions.com</li>
          </ul>
        </div>
      </div>
      <p className='text-center m-0 footer__copyright'>
        © {currentYear.getFullYear()} Joe Bar Business. Copyright and rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
