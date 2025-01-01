import Head from 'next/head';
import Link from 'next/link';
import { videographyServicesContent } from '../../../content/videographyServices';
import { Language } from '../../../content/about';

export default function VideographyIndex() {
  return (
    <>
      <Head>
        <title>Videography Services | Studio Regina</title>
        <meta name="description" content="Professional videography services and packages" />
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

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(videographyServicesContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/services/videography/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {videographyServicesContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 