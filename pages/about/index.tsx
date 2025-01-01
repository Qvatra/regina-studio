import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { aboutContent, Language } from '../../content/about';

export default function AboutIndex() {
  return (
    <>
      <Head>
        <title>About Me | Studio Regina</title>
        <meta name="description" content="Professional photographer and videographer based in Amsterdam" />
        {Object.keys(aboutContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/about/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/about/en`} />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(aboutContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/about/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {aboutContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 