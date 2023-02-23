import { Bebas_Neue, Inter } from '@next/font/google';
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
import '@styles/components/Experience.scss';
import '@styles/components/Why-us.scss';
import '@styles/components/What-we-do.scss';
import '@styles/components/Company.scss';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${bebas.variable} ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
