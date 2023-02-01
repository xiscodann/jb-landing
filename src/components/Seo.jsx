import React from 'react';
import logo from '@images/logo.png';

const Seo = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        content='We provide technical staffing, and recruiting services for manufacturing. We source the best bilingual technical talent from Latin America at reasonable costs.'
      />
      <meta
        property='og:title'
        content='Innovate solutions for your business, we can definitely help you succeed'
      />
      <meta
        property='og:description'
        content='We provide technical staffing, and recruiting services for manufacturing. We source the best bilingual technical talent from Latin America at reasonable costs.'
      />
      <meta
        property='og:url'
        content='https://main--inquisitive-lokum-0e6a75.netlify.app/'
      />
      <meta property='og:type' content='website'></meta>
      <meta property='og:site_name' content='Joe Bar Business Solutions' />
      <meta property='og:image' content={logo} key='ogimage' />
      <link rel='icon' href='images/favicon-32x32.ico' />
    </>
  );
};

export default Seo;
