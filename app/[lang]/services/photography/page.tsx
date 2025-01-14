import { Metadata } from 'next';
import Link from 'next/link';
import { photographyServicesContent } from '../../../../content/photographyServices';
import { languages, Language } from '../../../../config/languages';
import StyledButton from '../../../../components/StyledButton';
import { Card, CardHeader, CardContent, CardFooter } from '../../../../components/Card';
import { getPhotographyServicesSchema } from '../../../../content/schema';

interface PhotographyServicesPageProps {
  params: {
    lang: Language;
  };
}

export async function generateMetadata({ params }: PhotographyServicesPageProps): Promise<Metadata> {
  const content = photographyServicesContent[params.lang];

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${params.lang}/services/photography`,
      images: [{
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/photo.jpg`,
      }],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${params.lang}/services/photography`,
      languages: Object.keys(languages).reduce((acc, lang) => ({
        ...acc,
        [lang]: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/services/photography`,
      }), {}),
    },
  };
}

export default function PhotographyServicesPage({ params }: PhotographyServicesPageProps) {
  const content = photographyServicesContent[params.lang];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold tracking-wider mb-4">{content.heading}</h1>
      <p className="text-gray-600 text-lg mb-8">{content.subtitle}</p>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {content.packages.map((pkg) => (
          <Card key={pkg.title}>
            <CardHeader>
              <h2 className="text-2xl font-bold">{pkg.title}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="text-2xl font-bold mb-4">{pkg.price}</div>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    • {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <StyledButton href={`/${params.lang}/contact`} className="w-full">
                {content.cta}
              </StyledButton>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.includedFeaturesTitle}</h2>
        <ul className="space-y-2">
          {content.includedFeatures.map((feature) => (
            <li key={feature} className="text-gray-600">• {feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
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
          <Link href={`/${params.lang}/contact`} className="text-gray-900 hover:text-gray-500 transition-colors font-semibold underline">
            {content.customPackage.link}
          </Link>
          {' '}{content.customPackage.suffix}
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(getPhotographyServicesSchema(params.lang)) 
        }}
      />
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }));
} 