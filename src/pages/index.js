import Head from 'next/head';
import Layout from '@containers/Layout';
import WhatsAppButton from '@components/WhatsAppButton';
import Seo from '@components/Seo';

export default function Home() {
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
