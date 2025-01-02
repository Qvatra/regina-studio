import Head from 'next/head';
import { servicesContent } from '../../content/services';
import IndexLanguageSelector from '../../components/IndexLanguageSelector';

export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>Services | Studio Regina</title>
        <meta name="description" content="Professional photography and videography services" />
        {Object.keys(servicesContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/en`} />
      </Head>
      <IndexLanguageSelector basePath="/services/" />
    </>
  );
} 