import type { AppProps } from 'next/app';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../styles/index.css';
import Head from 'next/head';
import { getAppSchema } from '../content/site';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getAppSchema()) }}
        />
      </Head>

      <TopBar />

      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}
