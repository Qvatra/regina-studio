import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { servicesContent } from '../../content/services';
import { Language } from '../../content/about';
import { Card, CardHeader, CardContent, CardFooter } from '../../components/Card';
import StyledButton from '../../components/StyledButton';

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const content = servicesContent[lang];

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
        {Object.keys(servicesContent).map((l) => (
          l !== lang && (
            <link 
              key={l}
              rel="alternate" 
              hrefLang={l} 
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${l}`}
            />
          )
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/${lang}`}
        />
      </Head>

      <main className="mx-auto max-w-5xl px-4 pt-12 pb-20 text-gray-900">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-wider mb-4">{content.heading}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {content.intro}
          </p>
        </section>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                <div className="h-[2lh] mb-1">
                  <p className="text-sm text-gray-400 mb-4">{service.priceDetails}</p>
                </div>
                <StyledButton href={service.path}>{content.cta}</StyledButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(servicesContent).map(lang => ({
      params: { lang }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as Language;
  
  if (!Object.keys(servicesContent).includes(lang)) {
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