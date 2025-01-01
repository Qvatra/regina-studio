import Head from 'next/head';
import Link from 'next/link';
import { weddingServicesContent } from '../../../content/weddingServices';
import { Language } from '../../../content/about';

export default function WeddingIndex() {
  return (
    <>
      <Head>
        <title>Wedding Services | Studio Regina</title>
        <meta name="description" content="Professional wedding photography and videography packages" />
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

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(weddingServicesContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/services/wedding/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {weddingServicesContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 