import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

import logo from '@images/logo.png';
import useScrollHandler from '@hooks/useScrollHandler';

const Header = () => {
  const { scrollPosition } = useScrollHandler();
  const [itsTimeToChangeContrast, setItsTimeToChangeContrast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const article =
      document.getElementById('presentation-article') ||
      document.getElementById('apply-content') ||
      document.getElementById('work-form');
    const timeToChangeContrast = scrollPosition > article?.scrollHeight - 20;
    setItsTimeToChangeContrast(timeToChangeContrast);
  }, [scrollPosition]);

  return (
    <header className={`header ${scrollPosition > 20 ? 'minimize' : ''}`}>
      <Navbar collapseOnSelect expand='md' expanded={isOpen}>
        <div className='container'>
          <Link href={'/'} className={`header__logo`}>
            <Image
              src={logo}
              alt='Joe Bar Business Solition logo'
              width={180}
              height={43}
            />
          </Link>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            onClick={() => setIsOpen(isOpen ? false : 'expanded')}
          />
          <Navbar.Collapse id='responsive-navbar-nav' isOpen={isOpen}>
            <Nav className={`ms-auto header__menu d-flex align-items-center`}>
              <Link
                href={'/#our-services'}
                scroll={false}
                onClick={() => setIsOpen(false)}
              >
                Our services
              </Link>
              {/*<Link href={'/apply'} onClick={() => setIsOpen(false)}>
                Apply for a job
  </Link>*/}
              <Link
                href={'/#contact-us'}
                scroll={false}
                className={`header__menu--principal`}
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
