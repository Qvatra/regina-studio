import Head from 'next/head';
import Link from 'next/link';
import { contactContent, Language } from '../../content/contact';

export default function ContactIndex() {
  return (
    <>
      <Head>
        <title>Contact | Studio Regina</title>
        <meta name="description" content="Get in touch with Studio Regina for your photography and videography needs" />
        {Object.keys(contactContent).map((lang) => (
          <link 
            key={lang}
            rel="alternate" 
            hrefLang={lang} 
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact/${lang}`}
          />
        ))}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact/en`} />
      </Head>

      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
        <div className="flex justify-center gap-8">
          {(Object.keys(contactContent) as Language[]).map((lang) => (
            <Link
              key={lang}
              href={`/contact/${lang}`}
              className="text-lg text-gray-600 hover:text-gray-900"
            >
              {contactContent[lang].title.split('|')[0].trim()}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
} 