import type { AppProps } from "next/app";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
