import { Metadata } from 'next';
import Image from 'next/image';
import { aboutContent } from '../../../content/about';
import { languages, Language } from '../../../config/languages';
import { getAboutSchema } from '../../../content/schema';

interface AboutPageProps {
  params: Promise<{
    lang: Language;
  }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = aboutContent[lang];

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/about`,
      languages: Object.keys(languages).reduce((acc, lang) => ({
        ...acc,
        [lang]: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/about`,
      }), {}),
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps): Promise<any> {
  const { lang } = await params;
  const content = aboutContent[lang];

  return (
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(getAboutSchema(lang)) 
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