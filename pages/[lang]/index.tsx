import { GetStaticProps, GetStaticPaths } from 'next';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from '../../components/TypeWriter';
import Citations from '../../components/Citations';
import StyledButton from '../../components/StyledButton';
import { homeContent, Language } from '../../content/home';
import { languages } from '../../config/languages';

interface HomeProps {
  lang: Language;
}

export default function LocalizedHome({ lang }: HomeProps) {
  const content = homeContent[lang];

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        
        {/* Add Open Graph and Twitter meta tags */}
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/banner.jpg`} />
        <meta property="og:locale" content={lang} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Photography and Videography" />
        
        {/* Add alternate locales for Open Graph */}
        {Object.keys(languages).map((l) => (
          l !== lang && (
            <meta key={l} property="og:locale:alternate" content={l} />
          )
        ))}
        
        {/* Canonical URL */}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`}
        />
        
        {/* Language alternates with proper region codes */}
        {Object.keys(languages).map((l) => (
          <link 
            key={l}
            rel="alternate" 
            hrefLang={l}
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${l}`}
          />
        ))}
        
        {/* Default version for unlisted languages */}
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/en`}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": content.title,
              "description": content.metaDescription,
              "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`,
              "inLanguage": lang,
              "provider": {
                "@type": "Organization",
                "name": "Regina Photography",
                "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/banner.jpg`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Amsterdam",
                  "addressRegion": "North Holland",
                  "addressCountry": "NL"
                }
              }
            })
          }}
        />
      </Head>

      <main className="text-gray-900">
        {/* Hero Banner */}
        <div className="relative w-full">
          <div className="relative md:h-auto aspect-[21/11] sm:aspect-[21/7] xl:aspect-[21/5] w-full">
            <Image
              src="/assets/banner.jpg"
              alt="Studio Regina - Professional Photography and Videography in Amsterdam"
              fill
              className="object-cover object-[center_calc(70%)] xl:object-[center_calc(52%)]"
              priority
            />
          </div>
        </div>

        {/* Name Introduction */}
        <div className="text-center mt-24">
          <h1 className="text-3xl font-bold tracking-wider text-gray-900 pb-4 uppercase">
            {content.introduction}
          </h1>

          <TypeWriter
            words={content.roles}
            typingSpeed={150}
            deletingSpeed={100}
            delayBetweenWords={1000}
            className="text-gray-400 text-2xl font-semibold uppercase"
          />

          <p className="text-lg text-gray-600 pt-5 font-semibold">{content.location}</p>
        </div>

        {/* Services */}
        <div id="portfolio" className="pt-24 pb-20 scroll-mt-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 sm:gap-4 md:gap-6 ml-2 mr-2">
              {content.services.map((service) => (
                <div key={service.title} className="group">
                  <Link href={service.link}>
                    <div className="relative aspect-[21/9] mb-6 overflow-hidden cursor-pointer">
                      <Image
                        src={service.image}
                        alt={`Studio Regina ${service.title} Services - ${service.description}`}
                        fill
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 604px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl font-semibold text-white uppercase z-10">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                  <p className="text-gray-600 mb-4 font-semibold">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Citations */}
        <Citations citations={content.citations} />

        {/* Horizontal Line */}
        <div className="max-w-4xl mx-auto px-4">
          <hr className="border-gray-200 border-t-1 mt-12 mb-20" />
        </div>

        {/* CTA Section */}
        <div>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-wider mb-4 text-gray-900">
              {content.cta.heading}
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              {content.cta.text}
            </p>
            <StyledButton href="/contact">{content.cta.button}</StyledButton>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(homeContent).map(lang => ({
      params: { lang }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as Language;
  
  if (!Object.keys(homeContent).includes(lang)) {
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