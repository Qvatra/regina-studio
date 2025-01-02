import Head from 'next/head';
import { portfolioContent } from '../../../content/portfolio';
import IndexLanguageSelector from '../../../components/IndexLanguageSelector';

export default function PhotographyPortfolioIndex() {
  return (
    <>
      <Head>
        <title>Photography Portfolio | Studio Regina</title>
        <meta 
          name="description" 
          content="Browse through our collection of professional photography work including weddings, portraits, events, commercial photography, and creative shoots." 
        />
        {Object.keys(portfolioContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/portfolio/photography/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/portfolio/photography/en`} />
      </Head>
      <IndexLanguageSelector basePath="/portfolio/photography/" />
    </>
  );
}