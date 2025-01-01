import { useEffect } from 'react';
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from 'next';
import { videographyServicesContent } from '../../../content/videographyServices';
import { Language } from '../../../content/about';
import StyledButton from '../../../components/StyledButton';
import { Card, CardHeader, CardContent, CardFooter } from '../../../components/Card';

interface VideographyServicesProps {
  lang: Language;
}

export default function VideographyServices({ lang }: VideographyServicesProps) {
  const content = videographyServicesContent[lang];

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
        {Object.keys(videographyServicesContent).map((l) => (
          l !== lang && (
            <link 
              key={l}
              rel="alternate" 
              hrefLang={l} 
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/videography/${l}`}
            />
          )
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/services/videography/${lang}`}
        />
      </Head>
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-bold tracking-wider mb-8">{content.heading}</h1>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {content.packages.map((pkg) => (
            <Card key={pkg.title}>
              <CardHeader>
                <h2 className="text-2xl font-bold">{pkg.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2 font-semibold">{pkg.description}</p>
                <ul className="space-y-1">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-600">• {feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-3xl font-bold text-gray-900 mb-4">{pkg.price}</p>
                <StyledButton href={`/contact/${lang}`}>{content.cta}</StyledButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What's Included in All Packages</h2>
          <ul className="space-y-2 text-gray-600">
            {content.includedFeatures.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-16 text-gray-600">
          <h2 className="text-2xl font-bold mb-4">{content.additionalFees.title}</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">{content.additionalFees.travelFee.label}</span>{' '}
              {content.additionalFees.travelFee.text}
            </p>
            <p>
              <span className="font-semibold">{content.additionalFees.confidentialityFee.label}</span>{' '}
              {content.additionalFees.confidentialityFee.text}
            </p>
          </div>
        </section>

        <div className="text-center">
          <p className="text-gray-600">
            {content.customPackage.text}{' '}
            <Link href={`/contact/${lang}`} className="text-gray-900 hover:text-gray-500 transition-colors font-semibold underline">
              {content.customPackage.link}
            </Link>
            {' '}{content.customPackage.suffix}
          </p>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(videographyServicesContent).map(lang => ({
      params: { lang }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as Language;
  
  if (!Object.keys(videographyServicesContent).includes(lang)) {
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