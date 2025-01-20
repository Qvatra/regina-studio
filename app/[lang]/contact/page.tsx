import { Metadata } from 'next';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/Card';
import StyledButton from '@/components/StyledButton';
import { contactContent } from '@/content/contact';
import { languages, Language } from '@/config/languages';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappIcon from '@/components/icons/WhatsappIcon';
import EmailIcon from '@/components/icons/EmailIcon';
import { getContactSchema } from '@/config/schema';

const contactOptions = [
  {
    name: "Instagram",
    url: process.env.NEXT_PUBLIC_INSTAGRAM,
    icon: InstagramIcon,
  },
  {
    name: "WhatsApp",
    url: process.env.NEXT_PUBLIC_WATSAPP,
    icon: WhatsappIcon,
  },
  {
    name: "Email",
    url: process.env.NEXT_PUBLIC_EMAIL,
    icon: EmailIcon,
  },
  {
    name: "Facebook",
    url: process.env.NEXT_PUBLIC_FACEBOOK,
    icon: FacebookIcon,
  }
];

interface ContactPageProps {
  params: Promise<{
    lang: Language;
  }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = contactContent[lang];

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/contact`,
      locale: lang,
      alternateLocale: Object.keys(languages).filter(l => l !== lang)
    }
  };
}

export default async function ContactPage({ params }: ContactPageProps): Promise<any> {
  const { lang } = await params;
  const content = contactContent[lang];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wider mb-8">{content.heading}</h1>
        <p className="text-gray-600 text-lg mb-4">{content.intro.primary}</p>
        <p className="text-gray-600">{content.intro.secondary}</p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(getContactSchema(lang)) 
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