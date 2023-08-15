import { useEffect } from 'react';
import AOS from 'aos';
import Seo from '@components/Seo';
import WhatsAppButton from '@components/WhatsAppButton';
import 'aos/dist/aos.css';
import PackExpo from '@containers/PackExpo';

const CompanyHome = () => {
  return (
    <>
      <Seo />
      <main>
        <PackExpo />
        {/*<WhatsAppButton />*/}
      </main>
    </>
  );
};

export default CompanyHome;
