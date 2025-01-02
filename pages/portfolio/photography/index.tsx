import Head from 'next/head';
import Link from 'next/link';
import { portfolioContent } from '../../../content/portfolio';
import { Language } from '../../../content/about';

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
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/portfolio/photography/en`} 
        />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(portfolioContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/portfolio/photography/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {portfolioContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}