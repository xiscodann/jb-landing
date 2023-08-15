import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@images/logo.png';
import Footer from '@components/Footer';

const PackExpo = () => {
  return (
    <>
      <header className={`header `}>
        <div className='container text-center d-md-flex align-items-center justify-content-between'>
          <Link href={'/'} className={`header__logo`}>
            <Image
              src={logo}
              alt='Joe Bar Business Solition logo'
              width={180}
              height={43}
            />
          </Link>
          <p className='m-0 pb-3 p-md-0'>
            <small>information@joebarbusinesssolutions.com</small>
          </p>
        </div>
      </header>
      <article className='packexpo'>
        <section className='container row mx-auto'>
          <div className='col-12 col-lg-6 px-2 px-md-4 py-4 py-md-5 my-5'>
            <h1>
              YOUR BUSINESS DESERVES A HERO WE&apos;VE GOT AN ENTIRE LEAGUE
            </h1>
            <h4 className='pt-4'>
              Register and receive our catalog of services.
            </h4>
          </div>
          <div className='col-12 col-lg-6 packexpo__iframe'>
            <iframe
              src='https://forms.office.com/Pages/ResponsePage.aspx?id=C9QmJnFR50Sca3TO1HeH9z9JSRZHvd1MueQ1Hs7RI-pUNk03S1c1VzA5NVNOODdWM1QzVEpHOUk3VS4u&embed=true'
              frameBorder='0'
              marginWidth='0'
              marginHeight='0'
              allowfullscreen
              webkitallowfullscreen
              mozallowfullscreen
              msallowfullscreen
            >
              {' '}
            </iframe>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default PackExpo;
