import Head from 'next/head';
import Job from '@containers/Job';
import Seo from '@components/Seo';
import WhatsAppButton from '@components/WhatsAppButton';
import { useRouter } from 'next/router';

const WorkForm = () => {
  const { query } = useRouter();
  const { job } = query;

  return (
    <>
      <Head>
        <Seo title={`Apply for a job - ${job} | Joe Bar Business Solutions`} />
      </Head>
      <main>
        <Job job={job} />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default WorkForm;
