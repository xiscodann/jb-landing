import { Lato } from '@next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import '@styles/globals.css';

import '@styles/components/Header.scss';
import '@styles/components/Presentation.scss';
import '@styles/components/CarouselJobs.scss';
import '@styles/components/Hiring.scss';
import '@styles/components/ContactUs.scss';
import '@styles/components/Footer.scss';
import '@styles/components/Check.scss';
import '@styles/components/WhatsAppButton.scss';

import '@styles/components/Apply.scss';
import '@styles/components/ListJobs.scss';

import '@styles/components/WorkForm.scss';

const lato = Lato({ subsets: ['latin'], weight: ['400', '900'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
