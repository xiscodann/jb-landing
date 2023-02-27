import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import iconCheck2 from '@icons/check-2.png';
import Link from 'next/link';

const CarouselOfJobs = ({ data, type, isApplyJob }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='mt-5 mb-4 text-start'>
        <div className='carousel-jobs__header'>
          <div className='carousel-jobs__header--title'>
            <h4>OUR JOBS</h4>
            <h3 className='text-uppercase'>{type}</h3>
          </div>
          <div className='carousel-jobs__header--buttons'>
            <div className='carousel-jobs__arrows'>
              <button
                type='button'
                className='btn red'
                onClick={() =>
                  handleSelect(index - 1 >= 0 ? index - 1 : data.length - 1)
                }
              >
                ←
              </button>
              <button
                type='button'
                className='btn blue'
                onClick={() =>
                  handleSelect(index + 1 < data.length ? index + 1 : 0)
                }
              >
                →
              </button>
            </div>
            <div className='carousel-jobs__breadcrumbs'>
              {data.map((item, i) => (
                <span
                  key={i}
                  className={`${index === i ? 'active' : ''}`}
                  onClick={() => handleSelect(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className='container carousel-jobs text-start'
        controls={false}
        interval={null}
        indicators={false}
      >
        {data.map(({ title, subtitle, description, image }, i) => (
          <Carousel.Item key={i} className='carousel-jobs__item'>
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-5 carousel-jobs__item--image'>
                {image ? (
                  <Image
                    src={image ? require(`../assets/images/${image}`) : ''}
                    alt='Company image'
                    fill
                  />
                ) : null}
              </div>
              <div className='col-12 col-lg-6 offset-lg-1'>
                <div className='carousel-jobs__item--subtitle'>
                  <h3>{title}</h3>
                  <p className='m-0'>{subtitle}</p>
                  <p className='pt-3'>
                    <span>Experience:</span>
                  </p>
                </div>
                <div>
                  {typeof description === 'string' ? (
                    <p>{description}</p>
                  ) : null}
                  {typeof description === 'object'
                    ? description.map((item, i) => (
                        <div key={i} className='carousel-jobs__item--content'>
                          <div className='carousel-jobs__item--check'>
                            <Image src={iconCheck2} alt='Check icon' fill />
                          </div>
                          <p>{item}</p>
                        </div>
                      ))
                    : null}
                </div>
                {isApplyJob ? (
                  <div className='carousel-jobs__options'>
                    <Link
                      href={`/apply/${type}`}
                      className='btn carousel-jobs__options--apply'
                    >
                      APPLY FOR A JOB
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselOfJobs;
