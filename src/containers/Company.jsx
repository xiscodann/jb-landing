import Image from 'next/image';
import Header from '@components/Header';
import CarouselOfJobs from '@components/CarouselOfJobs';
import availableJobs from '../api/jobs-en.json';

import companyImage from '@images/company-image.jpg';

import Footer from '@components/Footer';
import { useEffect } from 'react';

const benefits = [
  {
    icon: 'logistics',
    description: 'We handle logistics; housing, transportation',
  },
  {
    icon: 'solve',
    description: 'Solve immediate and long-term talent needs',
  },
  {
    icon: 'immigration',
    description: 'We handle all the immigration process for the work visas',
  },
  {
    icon: 'retention',
    description: '98% employee retention',
  },
  {
    icon: 'improve',
    description:
      'Improve safety, profits, and efficiencies with self motivated employees',
  },
  {
    icon: 'relocation',
    description: 'Save on relocation, payroll taxes, and more',
  },
];

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <article className='company-content' id='company-content'>
        <div className='company__image'>
          <Image src={companyImage} alt='Company image' fill />
        </div>
        <section className='company container mx-auto row'>
          <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
            <h1>FIND YOUR TECHNICAL TALENT WITH JOE BAR BUSINESS</h1>
            <div className='w-100 text-center text-sm-start'>
              <a href='#contact' className='btn'>
                CONTACT US
              </a>
            </div>
          </div>
        </section>
      </article>
      <article className='px-2' data-aos='fade-up'>
        <section className='container col-12 col-md-10 mx-auto help-your-business'>
          <div className='help-your-business__benefits'>
            <h4>BENEFITS</h4>
            <h3>HOW DO WE HELP YOUR BUSINESS?</h3>
          </div>
          <div className='help-your-business__explain g-4'>
            {benefits.map(({ icon, description }, index) => (
              <div className='help-your-business__explain--card' key={index}>
                <div className='help-your-business__explain--image'>
                  <Image
                    src={
                      icon ? require(`../assets/icons/company-${icon}.png`) : ''
                    }
                    alt={`${icon}`}
                    fill
                  />
                </div>
                <p className='card-text'>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <article className='list-services px-2 anchor' id='jobs'>
        <section
          className='container list anchor'
          id='engineering'
          data-aos='fade-up'
        >
          <CarouselOfJobs
            data={availableJobs.filter(({ type }) => type === 'engineer')}
            type='engineering'
          />
        </section>
        <span className='list-services__separator'></span>
        <section
          className='container list anchor'
          id='technical'
          data-aos='fade-up'
        >
          <CarouselOfJobs
            data={availableJobs.filter(({ type }) => type === 'technical')}
            type='technical'
          />
        </section>
      </article>
      <article id='contact' className='px-2 px-md-0 anchor' data-aos='fade-up'>
        <section className='container col-12 col-lg-8 contact-form mx-auto'>
          <h3>CONTACT US</h3>
          <h4>INNOVATIVE SOLUTIONS FOR YOUR BUSINESS</h4>
          <form className='col-12 mx-auto contact__form--form'>
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
            <div className='text-center'>
              <button type='submit' className='btn'>
                SEND
              </button>
            </div>
          </form>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Company;
