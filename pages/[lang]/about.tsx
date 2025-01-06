import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { aboutContent } from '../../content/about';
import { Language } from '../../config/languages';

interface AboutProps {
  lang: Language;
}

const getAboutSchema = (content: typeof aboutContent[Language], lang: Language) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": content.title,
  "description": content.metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/about`,
  "author": {
    "@type": "Person",
    "name": "Regina Shaydullina",
    "jobTitle": "Professional Photographer and Videographer",
    "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/about.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressCountry": "NL"
    }
  }
});

export default function About({ lang }: AboutProps) {
  const content = aboutContent[lang];

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        {Object.keys(aboutContent).map((l) => (
          l !== lang && (
            <link 
              key={l}
              rel="alternate" 
              hrefLang={l} 
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${l}/about`}
            />
          )
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/about`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutSchema(content, lang)) }}
        />
      </Head>

      <main className="mx-auto px-4 text-gray-900 max-w-3xl">
        <figure className="mb-12 mt-4">
          <div className="mx-auto aspect-[10/6] relative">
            <Image
              src="/assets/about.jpg"
              alt="Regina Shaydullina - Professional Photographer and Videographer in Amsterdam"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 736px"
              priority
            />
          </div>
        </figure>

        <section className="mb-16 mx-auto">
          <h1 className="text-3xl font-bold tracking-wider mb-4">{content.heading}</h1>
          <div className="prose prose-lg max-w-none">
            {content.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <div className="text-md text-gray-500 text-center mt-20">
          <p>{content.kvk}</p>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(aboutContent).map(lang => ({
      params: { lang }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as Language;
  
  if (!Object.keys(aboutContent).includes(lang)) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      lang
    }
  };
};
