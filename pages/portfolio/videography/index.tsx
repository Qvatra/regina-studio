import Head from 'next/head';
import { portfolioContent } from '../../../content/portfolio';
import IndexLanguageSelector from '../../../components/IndexLanguageSelector';

export default function VideographyPortfolioIndex() {
  return (
    <>
      <Head>
        <title>Videography Portfolio | Studio Regina</title>
        <meta 
          name="description" 
          content="Explore our collection of professional videography work including weddings, events, commercial videos, and creative productions." 
        />
        {Object.keys(portfolioContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/portfolio/videography/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/portfolio/videography/en`} />
      </Head>
      <IndexLanguageSelector basePath="/portfolio/videography/" />
    </>
  );
} 