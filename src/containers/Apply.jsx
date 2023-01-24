import React from 'react';
import Image from 'next/image';
import Header from '@components/Header';
import CarouselOfJobs from '@components/CarouselOfJobs';

import presentationImage from '@images/presentation-image.png';
import hiringImage from '@images/hiring-image.png';
import decorPoint from '@images/decor-point.png';
import iconPresentation1 from '@icons/presentation-icon-1.png';
import iconPresentation2 from '@icons/presentation-icon-2.png';
import iconPresentation3 from '@icons/presentation-icon-3.png';
import iconCheck from '@icons/check.png';

import Footer from '@components/Footer';

const jobs = [
  {
    title: 'Out of the Box Staffing Services',
    subtitle: '',
    description: [
      'Support the day to day automation processes during production as needed',
      'Expertise with Allen-Bradley, Siemens, and CompactLogix',
      'PLC programming and control systems. PLC Programming using ladder, structure text languages',
    ],
  },
  {
    title: 'Otro titulo de prueba',
    subtitle: 'Este si tiene',
    description: [
      'Support the day to day automation processes during production as needed',
      'Expertise with Allen-Bradley, Siemens, and CompactLogix',
      'PLC programming and control systems. PLC Programming using ladder, structure text languages',
      'Support the day to day automation processes during production as needed',
    ],
  },
  {
    title: 'La prueba definitiva',
    subtitle: '',
    description: [
      'Support the day to day automation processes during production as needed',
      'Expertise with Allen-Bradley, Siemens, and CompactLogix',
      'PLC programming and control systems. PLC Programming using ladder, structure text languages',
    ],
  },
];

const Apply = () => {
  return (
    <>
      <Header />
      <article className='apply-content'>
        <section className='apply container mx-auto row'>
          <div className='col-12 col-sm-6'>
            <h1>
              <span>Apply for a job</span> with Joe Bar Business
            </h1>
            <p>What is your specialty?</p>
            <div className='apply__options'>
              <button
                type='button'
                className='btn text-uppercase apply__options--principal'
              >
                ENGINEERING JOBS {/*Crear componente de button */}
              </button>
              <button
                type='button'
                className='btn text-uppercase apply__options--principal'
              >
                TECHNICAL JOBS {/*Crear componente de button */}
              </button>
            </div>
            <div className='apply__image--points'>
              <Image src={decorPoint} alt='apply image' fill />
            </div>
          </div>
        </section>
        <section className='container col-12 col-md-8 col-lg-7 col-xl-6 mx-auto we-help-you'>
          <h2>
            <span>How</span> do we help you?
          </h2>
          <div className='we-help-you__explain row'>
            <div className='we-help-you__box col-12 col-md-4'>
              <div className='we-help-you__box--image'>
                <Image src={iconCheck} alt='Check icon' fill />
              </div>
              <p>International work assignment</p>
            </div>
            <div className='we-help-you__box col-12 col-md-4'>
              <div className='we-help-you__box--image'>
                <Image src={iconCheck} alt='Check icon' fill />
              </div>
              <p>Comprehensive and competitive compensation package</p>
            </div>
            <div className='we-help-you__box col-12 col-md-4'>
              <div className='we-help-you__box--image'>
                <Image src={iconCheck} alt='Check icon' fill />
              </div>
              <p>Opportunity to learn and gain new skills</p>
            </div>
            <div className='we-help-you__box col-12 col-md-4'>
              <div className='we-help-you__box--image'>
                <Image src={iconCheck} alt='Check icon' fill />
              </div>
              <p>Support with cultural assimilation</p>
            </div>
            <div className='we-help-you__box col-12 col-md-4'>
              <div className='we-help-you__box--image'>
                <Image src={iconCheck} alt='Check icon' fill />
              </div>
              <p>Intensive English classes</p>
            </div>
            <div className='we-help-you__box col-12 col-md-4'>
              <div className='we-help-you__box--image'>
                <Image src={iconCheck} alt='Check icon' fill />
              </div>
              <p>We provide health insurance</p>
            </div>
          </div>
        </section>
      </article>
      <article className='list-content'>
        <section className='container list'>
          <h2>
            <span>ENGINEERING</span> JOBS
          </h2>
          <CarouselOfJobs data={jobs} isApplyForJob />
        </section>
        <section className='container list'>
          <h2>
            <span>TECHNICAL </span> JOBS
          </h2>
          <CarouselOfJobs data={jobs} isApplyForJob />
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Apply;
