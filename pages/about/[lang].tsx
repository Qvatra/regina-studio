import { GetStaticProps, GetStaticPaths } from 'next';
import Head from "next/head";
import Image from "next/image";
import { aboutContent, Language } from '../../content/about';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import generateBlurPlaceholder from '../../utils/generateBlurPlaceholder';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const content = aboutContent[lang];
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
      document.cookie = `preferredLanguage=${lang}; path=/; max-age=31536000`;
    }
  }, [lang]);

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
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/about/${l}`}
            />
          )
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/about/${lang}`}
        />
      </Head>

      <main className="mx-auto px-4 text-gray-900 max-w-3xl">
        <div className="mb-12 mt-4">
          <div className="mx-auto aspect-[10/6] relative">
            <Image
              src="/assets/about.jpg"
              alt="Regina Shaydullina - Professional Photographer and Videographer in Amsterdam"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <section className="mb-16 mx-auto">
          <h2 className="text-3xl font-bold tracking-wider mb-4">{content.heading}</h2>
          <div className="prose prose-lg max-w-none">
            {content.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="text-md text-gray-500 text-center">
            <p>{content.kvk}</p>
          </div>
        </section>
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
