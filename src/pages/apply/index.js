import Head from 'next/head';
import Apply from '@containers/Apply';
import Seo from '@components/Seo';
import WhatsAppButton from '@components/WhatsAppButton';

const ApplyHome = () => {
  return (
    <>
      <Head>
        <Seo title={`Apply for a job | Joe Bar Business Solutions`} />
      </Head>
      <main>
        <Apply />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default ApplyHome;
