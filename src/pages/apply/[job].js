import React, { useEffect } from 'react';
import Head from 'next/head';
import Job from '@containers/Job';
import Seo from '@components/Seo';
import WhatsAppButton from '@components/WhatsAppButton';
import { useRouter } from 'next/router';
import Router from 'next/router';

const WorkForm = () => {
  const { query } = useRouter();
  const { job } = query;
  useEffect(() => {
    if (job !== 'engineering' && job !== 'technical') Router.push('/apply');
  }, []);
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
