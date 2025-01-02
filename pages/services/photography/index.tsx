import Head from 'next/head';
import Link from 'next/link';
import { photographyServicesContent } from '../../../content/photographyServices';
import { Language } from '../../../content/about';

export default function PhotographyServicesIndex() {
  return (
    <>
      <Head>
        <title>Photography Services | Studio Regina</title>
        <meta 
          name="description" 
          content="Professional photography services and packages for all occasions. Choose from our range of photography services including portraits, events, and commercial photography." 
        />
        {Object.keys(photographyServicesContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/photography/${lang}`}
          />
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/photography/en`} 
        />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(photographyServicesContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/services/photography/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {photographyServicesContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 