import Head from 'next/head';
import Company from '@containers/Company';
import Seo from '@components/Seo';
import WhatsAppButton from '@components/WhatsAppButton';

const CompanyHome = () => {
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
