import Head from 'next/head';
import Link from 'next/link';
import { servicesContent } from '../../content/services';
import { Language } from '../../content/about';

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

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(servicesContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/services/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {servicesContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 