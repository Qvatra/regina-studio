import Head from 'next/head';
import { contactContent } from '../../content/contact';
import IndexLanguageSelector from '../../components/IndexLanguageSelector';

export default function ContactIndex() {
  return (
    <>
      <Head>
        <title>Contact | Studio Regina</title>
        <meta 
          name="description" 
          content="Get in touch with Studio Regina for your photography and videography needs. Connect via Instagram, WhatsApp, email, or Facebook." 
        />
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
      <IndexLanguageSelector basePath="/contact/" />
    </>
  );
} 