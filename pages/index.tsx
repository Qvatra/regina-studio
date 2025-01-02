import Head from 'next/head';
import { homeContent } from '../content/home';
import IndexLanguageSelector from '../components/IndexLanguageSelector';

export default function HomeIndex() {
  return (
    <>
      <Head>
        <title>Studio Regina | Photography & Videography</title>
        <meta name="description" content="Professional photography and videography services in Amsterdam" />
        {Object.keys(homeContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/en`} />
      </Head>
      <IndexLanguageSelector basePath="/" />
    </>
  );
}
