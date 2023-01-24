import React from 'react';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

import logo from '@images/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <Navbar collapseOnSelect expand='md'>
        <div className='container'>
          <Link href={'/'} className='header__logo'>
            <Image
              src={logo}
              alt='Joe Bar Business Solition logo'
              width={180}
              height={43}
            />
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto header__menu d-flex align-items-center'>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>Our services</Link>
              <Link href={'#'}>Apply for a job</Link>
              <Link href={'#'} className='header__menu--principal'>
                Contact us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
