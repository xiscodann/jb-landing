import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Company from '@containers/Company';
import Seo from '@components/Seo';
import WhatsAppButton from '@components/WhatsAppButton';
import 'aos/dist/aos.css';

const CompanyHome = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
    });
  }, []);
  return (
    <>
      <Head>
        <Seo title={`Contact Us | Joe Bar Business Solutions`} />
      </Head>
      <main>
        <Company />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default CompanyHome;
