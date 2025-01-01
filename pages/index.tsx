import Head from 'next/head';
import Link from 'next/link';
import { homeContent, Language } from '../content/home';

export default function HomeIndex() {
  return (
    <>
      <Head>
        <title>Studio Regina | Photography & Videography</title>
        <meta name="description" content="Professional photography and videography services in Amsterdam" />
        {Object.keys(homeContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/en`} />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(homeContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {homeContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
