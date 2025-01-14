import type { AppProps } from 'next/app';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />

      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}
