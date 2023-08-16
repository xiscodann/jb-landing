import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@images/logo.png';

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer>
      <div className='container mx-auto row footer'>
        <div className='col-12 col-lg-2 col-xl-3'>
          <div className='footer__logo'>
            <Link href={'/'}>
              <Image src={logo} alt='Joe Bar Business Solutions logo' fill />
            </Link>
          </div>
        </div>
        <div className='col-12 col-lg-6 col-xl-5 my-4 text-center text-xl-start d-flex justify-content-lg-center flex-column flex-lg-row align-items-center'>
          <div className='col-12 col-lg-5 offset-lg-1 footer__item--options'>
            <ul>
              <li className='text-muted'>Terms and Conditions</li>
              <li className='text-muted'>Privacy Policy</li>
            </ul>
          </div>
          <div className='col-12 col-lg-5  footer__item--options'>
            <ul>
              {/*<Link href={'/apply'}>Apply for a job</Link>*/}
              <Link href={'/#contact-us'} scroll={false}>
                Contact us
              </Link>
              <Link href={'/#our-services'} scroll={false}>
                Our services
              </Link>
            </ul>
          </div>
        </div>
        <div className='col-12 col-lg-3 text-center text-xl-start footer__item--info'>
          <ul>
            <li>155 N. Lake Ave Suite 800 Pasadena, CA 91101</li>
            <li>626-510-6249</li>
            <li
              className='text-truncate'
              title='jbarrero@joebarbusinesssolutions.com'
            >
              jbarrero@joebarbusinesssolutions.com
            </li>
          </ul>
        </div>
      </div>
      <p className='text-center m-0 footer__copyright p-4'>
        © {currentYear.getFullYear()} Joe Bar Business Solutions. Copyright and
        rights reserved
      </p>
    </footer>
  );
};

export default Footer;
