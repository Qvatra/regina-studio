import Head from 'next/head';
import Link from 'next/link';
import { photographyContent } from '../../../content/photography';
import { Language } from '../../../content/about';

export default function PhotographyIndex() {
  return (
    <>
      <Head>
        <title>Photography Services | Studio Regina</title>
        <meta name="description" content="Professional photography services and packages" />
        {Object.keys(photographyContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/photography/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/photography/en`} />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(photographyContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/services/photography/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {photographyContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 