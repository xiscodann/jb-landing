import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import iconCheck2 from '@icons/check-2.png';

const CarouselOfJobs = ({ data, isApplyForJob }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='carousel-jobs__counter text-start'>
        <p>
          <span>{index + 1}</span> / {data.length}
        </p>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className='container carousel-jobs text-start'
        controls={false}
        interval={null}
        indicators={false}
      >
        {data.map(({ title, subtitle, description }, i) => (
          <Carousel.Item key={i} className='carousel-jobs__item'>
            <div className='row d-flex align-items-center h-100'>
              <div className='col-12 col-md-5'>
                <h1>{title}</h1>
                {subtitle !== '' ? <p>{subtitle}</p> : null}
              </div>
              <div className='col-12 col-md-6 offset-md-1'>
                {isApplyForJob ? <p>Experience:</p> : null}
                <div>
                  {typeof description === 'string' ? (
                    <p>{description}</p>
                  ) : null}
                  {typeof description === 'object'
                    ? description.map((item, i) => (
                        <div key={i} className='carousel-jobs__item--content'>
                          <div className='carousel-jobs__item--image'>
                            <Image src={iconCheck2} alt='Check icon' fill />
                          </div>
                          <p>{item}</p>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='carousel-jobs__options'>
        <button type='button' className='btn carousel-jobs__options--principal'>
          {isApplyForJob ? 'Apply for a job' : 'Contract service'}
        </button>
        <button
          type='button'
          className='btn carousel-jobs__options--secondary'
          onClick={() => handleSelect(index + 1 < data.length ? index + 1 : 0)}
        >
          Next service
        </button>
      </div>
    </>
  );
};

export default CarouselOfJobs;
