import React from 'react';
import Image from 'next/image';
import Header from '@components/Header';
import CarouselOfJobs from '@components/CarouselOfJobs';
import Footer from '@components/Footer';
import Link from 'next/link';

import presentationImage from '@images/presentation-image.png';
import hiringImage from '@images/hiring-image.png';
import decorPoint from '@images/decor-point.png';
import iconPresentation1 from '@icons/presentation-icon-1.svg';
import iconPresentation2 from '@icons/presentation-icon-2.svg';
import iconPresentation3 from '@icons/presentation-icon-3.svg';
import iconCheck from '@icons/check.png';
import iconCheck2 from '@icons/check-2.png';
import circleTitle from '@images/circle.png';

const hiring = [
  {
    title: 'Engineering jobs',
    jobs: ['Automation', 'Robotics', 'Industrial', 'Software'],
  },
  {
    title: 'Technical jobs',
    jobs: [
      'Maintenance Technicians',
      'Mechanical Designers',
      'HVAC Technicians',
      'Injection/Blow Molding',
    ],
  },
];

const jobs = [
  {
    title: 'Staffing Services',
    subtitle: '',
    description:
      'We know that the toughest single challenge in running your business is finding the right people. We are experts at finding international talent for full time positions, project base, or nearshore services. We service from new entrepreneurs to the largest asset-based companies. Improve your overall performance and reduce costs by outsourcing our bilingual professionals for entry-level, and senior positions.',
  },
  {
    title: 'Operational Excellence Consulting',
    subtitle: '',
    description:
      'We are expert on reducing waste, developing people, and transforming your operations using Lean Leadership methodologies.',
  },
];

const Layout = () => {
  return (
    <>
      <Header />
      <article className='presentation-content' id='presentation-article'>
        <section className='presentation container mx-auto row'>
          <div className='col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start pt-4 pt-lg-0'>
            <h1>
              <span>Innovate solutions</span> for your business, we can
              definitely help you succeed
            </h1>
            <p>
              We provide technical staffing, and recruiting services for
              manufacturing. We source the best bilingual technical talent from
              Latin America at reasonable costs.
            </p>
            <div className='presentation__options justify-content-center justify-content-lg-start flex-column flex-sm-row'>
              <div>
                <p className='text-center'>
                  <small>Are you a company?</small>
                </p>
                <Link
                  href={'/#contact-us'}
                  scroll={false}
                  className='btn text-uppercase presentation__options--principal'
                >
                  Contact us
                </Link>
              </div>
              <div>
                <p className='text-center'>
                  <small>Do you want to work with us?</small>
                </p>
                <Link href={'/apply'} className='btn text-uppercase text-white'>
                  Apply for a job
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 presentation__image order-1 order-lg-2'>
            <div className='presentation__image--photo'>
              <Image src={presentationImage} alt='presentation image' fill />
            </div>
            <div className='presentation__image--points'>
              <Image src={decorPoint} alt='presentation image' fill />
            </div>
          </div>
        </section>
        <section className='container mx-auto why-us'>
          <h2>
            <span>Why</span> us?
          </h2>
          <p className='col-12 col-md-10 col-lg-8 col-xl-6 mx-auto'>
            JoeBar Business Solutions is a staffing firm with offices in the
            U.S., Mexico, and Colombia. We are looking for long term
            relationships, not just transactions.
          </p>
          <div className='why-us__explain row'>
            <div className='why-us__box col-12 col-md-4'>
              <div className='why-us__box--content'>
                <div className='why-us__box--image'>
                  <Image src={iconPresentation1} alt='Our ramp icon' fill />
                </div>
              </div>
              <p>
                Our ramp up process is designed to empower your team and outfit
                them with the tools they need to succeed
              </p>
            </div>
            <div className='why-us__box col-12 col-md-4'>
              <div className='why-us__box--content'>
                <div className='why-us__box--image'>
                  <Image src={iconPresentation2} alt='We want icon' fill />
                </div>
              </div>
              <p>
                We want to give each of you the time and guidance you deserve.
                Whether you’re seeking a strategic alliance with the right
                partner or a special skill set or tool
              </p>
            </div>
            <div className='why-us__box col-12 col-md-4'>
              <div className='why-us__box--content'>
                <div className='why-us__box--image'>
                  <Image
                    src={iconPresentation3}
                    alt='We can support icon'
                    fill
                  />
                </div>
              </div>
              <p>
                We can support your growth, limit your turnover, and put you on
                a solid track to success and profit.
              </p>
            </div>
          </div>
        </section>
      </article>
      <article>
        <section
          className='container text-center what-we-do anchor'
          id='what-we-do'
        >
          <div className='what-we-do__title'>
            <h2>
              <span>What</span> we do?
            </h2>
            <div className='what-we-do__title--image'>
              <Image src={circleTitle} alt='circle' fill />
            </div>
          </div>
          <div className='my-5'>
            <CarouselOfJobs data={jobs} />
          </div>
        </section>
        <section className='container mx-auto row help-your-business'>
          <div className='col-10 col-lg-8 row order-2 order-lg-1'>
            <div className='col-12 col-sm-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>Solve immediate and long-term talent needs</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>We handle all the immigration process for the work visas</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>We handle logistics; housing, transportation</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>Save on relocation, payroll taxes, and more</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>98% employee retention</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 my-2'>
              <div className='help-your-business__item'>
                <div className='help-your-business__item--image'>
                  <Image src={iconCheck} alt='Check' fill />
                </div>
                <p>
                  Improve safety, profits, and efficiencies with self motivated
                  employees
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-10 col-lg-4 help-your-business__title order-1 order-lg-2'>
            <h1>
              <span>How</span> do we help your business?
            </h1>
            <div className='help-your-business__title--image'>
              <Image src={circleTitle} alt='circle' fill />
            </div>
          </div>
        </section>
      </article>
      <article className='hiring-container'>
        <section className='container mx-auto hiring'>
          <div className='hiring__title'>
            <h2>
              <span>Who</span> we are hiring?
            </h2>
            <div className='hiring__title--image'>
              <Image src={circleTitle} alt='circle' fill />
            </div>
          </div>
          <div className='row'>
            <div className='col-4 col-xl-5 d-none d-lg-block'>
              <div className='hiring__image'>
                <Image src={hiringImage} alt='Who we are hiring?' fill />
              </div>
            </div>
            <div className='row hiring__content col-12 col-lg-8 col-xl-7 d-flex align-items-center jusitfy-content-center'>
              {hiring.map(({ title, jobs }, i) => (
                <div key={i} className='col-12 col-md-6'>
                  <div className='hiring__item'>
                    <p className='text-uppercase hiring__item--title'>
                      {title}
                    </p>
                    <ul className='hiring__item--ul'>
                      {jobs.map((job, jobIndex) => (
                        <li key={jobIndex} className='hiring__item--li'>
                          <div className='hiring__item--image'>
                            <Image src={iconCheck2} alt='check' fill />
                          </div>
                          <p>{job}</p>
                        </li>
                      ))}
                    </ul>
                    <Link href={'/apply'} className='btn hiring__item--button'>
                      See more jobs
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
      <article id='contact-us' className='anchor'>
        <section className='container mx-auto contact'>
          <div className='contact__title'>
            <h2>
              <span>Contact</span> us
            </h2>
            <p>
              Together we’ll create and refine your plan for success. We didn’t
              get there alone. And neither will you.
            </p>
            <div className='contact__title--image'>
              <Image src={circleTitle} alt='circle' fill />
            </div>
          </div>
          <form className='col-12 col-lg-7 col-xl-6 mx-auto contact__form'>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Name'
                required
              />
              <label htmlFor='name'>Name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='organization'
                placeholder='Organization name'
                required
              />
              <label htmlFor='organization'>Organization name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Email'
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='form-floating'>
              <textarea
                className='form-control'
                placeholder='Leave a comment here'
                id='message'
                required
              ></textarea>
              <label htmlFor='message'>Message</label>
            </div>
            <button type='submit' className='btn contact__form--button'>
              SEND
            </button>
          </form>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Layout;
