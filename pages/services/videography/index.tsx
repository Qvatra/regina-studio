import Head from 'next/head';
import { videographyServicesContent } from '../../../content/videographyServices';
import IndexLanguageSelector from '../../../components/IndexLanguageSelector';

export default function VideographyServicesIndex() {
  return (
    <>
      <Head>
        <title>Videography Services | Studio Regina</title>
        <meta 
          name="description" 
          content="Professional videography services and packages for all occasions" 
        />
        {Object.keys(videographyServicesContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/videography/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/videography/en`} />
      </Head>
      <IndexLanguageSelector basePath="/services/videography/" />
    </>
  );
} 