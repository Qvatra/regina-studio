import Head from 'next/head';
import { weddingServicesContent } from '../../../content/weddingServices';
import IndexLanguageSelector from '../../../components/IndexLanguageSelector';

export default function WeddingServicesIndex() {
  return (
    <>
      <Head>
        <title>Wedding Services | Studio Regina</title>
        <meta 
          name="description" 
          content="Professional wedding photography and videography services and packages" 
        />
        {Object.keys(weddingServicesContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/wedding/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/wedding/en`} />
      </Head>
      <IndexLanguageSelector basePath="/services/wedding/" />
    </>
  );
} 