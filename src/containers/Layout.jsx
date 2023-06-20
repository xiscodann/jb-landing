import React from 'react';
import Image from 'next/image';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';
import availableJobs from '../api/jobs-en.json';

import presentationImage from '@images/presentation-image.jpg';
import operationalExcellenceImage from '@images/what-we-do.jpg';
import contactUsImage from '@images/contact-us.png';

import engineeringIcon from '@icons/engineering.svg';
import technicalIcon from '@icons/technical.svg';
import selectionIcon from '@icons/selection.svg';
import managementIcon from '@icons/management.svg';
import connectionIcon from '@icons/connection.svg';

const Layout = () => {
  return (
    <>
      <Header />
      <article className='presentation-content' id='presentation-article'>
        <div className='presentation__image'>
          <Image src={presentationImage} alt='presentation image' fill />
        </div>
        <section className='presentation container mx-auto row'>
          <div className='presentation__info col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start pt-4 pt-lg-0'>
            <h1>FIND THE BEST TECHNICAL TALENT FOR YOUR BUSINESS</h1>
            <p>
              We are experts at finding international talent for full time
              positions, projects, or nearshore services.
            </p>
            <div className='presentation__options justify-content-center justify-content-lg-start flex-column flex-sm-row'>
              <div>
                <Link
                  href={'/company'}
                  scroll={false}
                  className='btn text-uppercase red'
                >
                  FIND TALENT
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className='experience-container'>
        <section className='container mx-auto experience'>
          <h3 className='col-12 col-md-10 col-xl-10 mx-auto text-uppercase'>
            We have more than 10 years of experience creating and executing
            comprehensive strategies for identifying, recruiting, and hiring top
            technical talent.
          </h3>
        </section>
      </article>
      <article>
        <section
          className='container text-center what-we-do anchor row mx-auto'
          data-aos='fade-up'
        >
          <div className='col-12 col-lg-6 col-md-5'>
            <div className='what-we-do__image d-none d-md-block'>
              <Image
                src={operationalExcellenceImage}
                alt='Operational Excellence'
                fill
              />
            </div>
          </div>
          <div className='col-12 col-lg-6 col-md-7 what-we-do__info'>
            <h4>WHAT WE DO</h4>
            <h3>OUT OF THE BOX TECHNICAL STAFFING SERVICES</h3>
            <p>
              We know that the toughest single challenge in running your
              business is finding the right people. We are experts at finding
              international talent for full time positions, project base, or
              nearshore services. We service from new entrepreneurs to the
              largest asset-based companies. Improve your overall performance
              and reduce costs by outsourcing our bilingual professionals for
              entry-level, and senior positions.
            </p>
          </div>
        </section>
      </article>
      <article
        className='hiring-container anchor'
        id='our-services'
        data-aos='fade-right'
      >
        <h2>OUR SERVICES</h2>
        <section className='container row mx-auto hiring d-flex justify-content-center'>
          <div className='col-12 col-md-6 col-lg-5 col-xl-3 my-2'>
            <div className='hiring__card red d-flex justify-content-start h-100 text-center'>
              <div className='hiring__card--image'>
                <Image src={engineeringIcon} alt='Engineering services' fill />
              </div>
              <p className='hiring__card--title'>ENGINEERING</p>
              <ul className='hiring__card--list'>
                {availableJobs.map(({ type, shortTitle }, index) => {
                  if (type === 'engineer') {
                    return <li key={`${shortTitle}-${index}`}>{shortTitle}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          {/*<div className='col-12 col-md-6 col-lg-5 col-xl-3 my-2'>
            <div className='hiring__card blue d-flex justify-content-start h-100'>
              <div className='hiring__card--image'>
                <Image src={technicalIcon} alt='Technical services' fill />
              </div>
              <p className='hiring__card--title'>TECHNICAL</p>
              <ul className='hiring__card--list'>
                {availableJobs.map(({ type, shortTitle }, index) => {
                  if (type === 'technical') {
                    return <li key={`${shortTitle}-${index}`}>{shortTitle}</li>;
                  }
                })}
              </ul>
            </div>
              </div>*/}
          <div className='col-12 text-center mt-4'>
            <Link
              href={'/company#jobs'}
              scroll={false}
              className='btn hiring__card--button'
            >
              MORE INFO
            </Link>
          </div>
        </section>
        <section className='container col-12 col-lg-9 col-xl-8 improve'>
          <h3>
            You can improve your{' '}
            <span>overall performance and reduce costs</span> by hiring our
            bilingual professionals for your entry-level and senior-level
            positions.
          </h3>
        </section>
      </article>
      <article className='why-us-container' data-aos='fade-right'>
        <h2>WHY US?</h2>
        <section className='container mx-auto why-us row'>
          <div className='col-12 col-md-4 why-us__card'>
            <div>
              <div className='why-us__card--image'>
                <Image src={selectionIcon} alt='Selection' fill />
              </div>
              <p className='why-us__card--title'>SELECTION</p>
              <p className='why-us__card--text'>
                We have a great pool of candidates from different industries;
                Food and Beverage, Automotive, and equipment manufacturing.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-4 why-us__card'>
            <div>
              <div className='why-us__card--image'>
                <Image src={managementIcon} alt='Selection' fill />
              </div>
              <p className='why-us__card--title'>MANAGEMENT</p>
              <p className='why-us__card--text'>
                Manage full cycle of recruiting including sourcing and screening
                candidates, performing interviews, and following through on
                placements.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-4 why-us__card'>
            <div>
              <div className='why-us__card--image'>
                <Image src={connectionIcon} alt='Selection' fill />
              </div>
              <p className='why-us__card--title'>CONNECTION</p>
              <p className='why-us__card--text'>
                Forge and maintain mutually beneficial and strong relationships
                with vendor partners.
              </p>
            </div>
          </div>
        </section>
      </article>
      <article
        id='contact-us'
        className='contact-container anchor'
        data-aos='fade-up'
      >
        <section className='container mx-auto contact row'>
          <div className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
            <h2>CONTACT US</h2>
            <h3>
              TOGETHER WE&apos;LL CREATE AND REFINE YOUR PLAN FOR SUCCESS.
            </h3>
            <p>We didn&apos;t get there alone and neither will you.</p>
            <div className='contact__options justify-content-left justify-content-lg-start flex-column flex-sm-row'>
              <div className=''>
                <Link
                  href={'/company'}
                  scroll={false}
                  className='btn text-uppercase red'
                >
                  FIND TALENT
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 d-none d-lg-block'>
            <div className='contact__image'>
              <Image src={contactUsImage} alt='Contact Us' fill />
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Layout;
