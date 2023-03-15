import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Layout from '@containers/Layout';
import WhatsAppButton from '@components/WhatsAppButton';
import Seo from '@components/Seo';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
    });
  }, []);
  return (
    <>
      <Head>
        <Seo title={`Joe Bar Business Solutions`} />
      </Head>
      <main>
        <Layout />
        <WhatsAppButton />
      </main>
    </>
  );
}
