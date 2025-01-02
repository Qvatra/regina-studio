import Head from 'next/head';
import { aboutContent } from '../../content/about';
import IndexLanguageSelector from '../../components/IndexLanguageSelector';

export default function AboutIndex() {
  return (
    <>
      <Head>
        <title>About | Studio Regina</title>
        <meta 
          name="description" 
          content="Learn about Regina's journey in photography and videography, her experience, and passion for visual storytelling" 
        />
        {Object.keys(aboutContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/about/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/about/en`} />
      </Head>
      <IndexLanguageSelector basePath="/about/" />
    </>
  );
} 