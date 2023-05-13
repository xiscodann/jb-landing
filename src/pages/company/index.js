import { useEffect } from 'react';
import AOS from 'aos';
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
      <Seo />
      <main>
        <Company />
        {/*<WhatsAppButton />*/}
      </main>
    </>
  );
};

export default CompanyHome;
