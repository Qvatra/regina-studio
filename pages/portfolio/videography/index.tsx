import Head from 'next/head';
import Link from 'next/link';
import { portfolioContent } from '../../../content/portfolio';
import { Language } from '../../../content/about';

export default function VideographyPortfolioIndex() {
  return (
    <>
      <Head>
        <title>Videography Portfolio | Studio Regina</title>
        <meta 
          name="description" 
          content="Professional videography portfolio showcasing our work in various styles and settings." 
        />
        {Object.keys(portfolioContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/portfolio/videography/${lang}`}
          />
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/portfolio/videography/en`} 
        />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(portfolioContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/portfolio/videography/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {portfolioContent[lang].videoTitle.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 