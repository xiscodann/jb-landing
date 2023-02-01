import Head from 'next/head';
import Layout from '@containers/Layout';
import WhatsAppButton from '@components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joe Bar Business Solutions</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='images/favicon-32x32.ico' />
      </Head>
      <main>
        <Layout />
        <WhatsAppButton />
      </main>
    </>
  );
}
