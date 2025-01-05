import type { AppProps } from "next/app";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import "../styles/index.css";
import { Language } from '../content/about';

type CustomPageProps = {
  preferredLanguage?: Language;
};

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation preferredLanguage={pageProps.preferredLanguage} />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
