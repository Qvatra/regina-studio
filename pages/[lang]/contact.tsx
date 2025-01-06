import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Card, CardHeader, CardContent, CardFooter } from '../../components/Card';
import StyledButton from '../../components/StyledButton';
import { contactContent } from '../../content/contact';
import { Language } from '../../config/languages';
import FacebookIcon from '../../components/icons/FacebookIcon';
import InstagramIcon from '../../components/icons/InstagramIcon';
import WhatsappIcon from '../../components/icons/WhatsappIcon';
import EmailIcon from '../../components/icons/EmailIcon';

const contactOptions = [
  {
    name: "Instagram",
    url: process.env.INSTAGRAM,
    icon: InstagramIcon,
  },
  {
    name: "WhatsApp",
    url: process.env.WATSAPP,
    icon: WhatsappIcon,
  },
  {
    name: "Email",
    url: process.env.EMAIL,
    icon: EmailIcon,
  },
  {
    name: "Facebook",
    url: process.env.FACEBOOK,
    icon: FacebookIcon,
  }
];

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const content = contactContent[lang];

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        {Object.keys(contactContent).map((l) => (
          l !== lang && (
            <link 
              key={l}
              rel="alternate" 
              hrefLang={l} 
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${l}/contact`}
            />
          )
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/contact`}
        />
      </Head>
      <main className="mx-auto max-w-4xl px-4 pt-8 text-gray-900">
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-wider mb-4">{content.heading}</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg mb-4">
              {content.intro.primary}
            </p>
            <p className="text-gray-600 text-lg">
              {content.intro.secondary}
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {contactOptions.map((option, index) => (
            <Card key={option.name}>
              <CardHeader>
                <div className="flex items-center my-2">
                  <option.icon />
                  <h2 className="ml-2">{option.name}</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p>{content.contactOptions[index].description}</p>
              </CardContent>
              <CardFooter>
                <StyledButton href={option.url} external className="w-[165px]">
                  {content.contactOptions[index].cta}
                </StyledButton>
              </CardFooter>
            </Card>
          ))}
        </section>

        <section className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            {content.responseTime}
          </p>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(contactContent).map(lang => ({
      params: { lang }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as Language;
  
  if (!Object.keys(contactContent).includes(lang)) {
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