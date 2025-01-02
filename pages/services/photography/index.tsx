import Head from 'next/head';
import { photographyServicesContent } from '../../../content/photographyServices';
import IndexLanguageSelector from '../../../components/IndexLanguageSelector';

export default function PhotographyServicesIndex() {
  return (
    <>
      <Head>
        <title>Photography Services | Studio Regina</title>
        <meta 
          name="description" 
          content="Professional photography services and packages for all occasions. Choose from our range of photography services including portraits, events, and commercial photography." 
        />
        {Object.keys(photographyServicesContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/photography/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/photography/en`} />
      </Head>
      <IndexLanguageSelector basePath="/services/photography/" />
    </>
  );
} 