import Head from "next/head";
import {
  ChatBubbleLeftRightIcon as WhatsAppIcon,
  EnvelopeIcon as MailIcon
} from '@heroicons/react/24/outline';
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';

// Custom Instagram and Facebook icons since they're not available in Heroicons
const InstagramIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Contact() {
  const contactOptions = [
    {
      name: "Instagram",
      handle: "@marymeberry",
      url: "https://instagram.com/marymeberry",
      icon: InstagramIcon,
      description: "Follow my creative journey and let's connect! This is my preferred way to communicate as it helps us build a stronger creative community.",
    },
    {
      name: "WhatsApp",
      handle: "+31 649739457",
      url: "https://wa.me/+31649739457",
      icon: WhatsAppIcon,
      description: "For quick responses and easy communication, feel free to reach out via WhatsApp.",
    },
    {
      name: "Email",
      handle: "regina.shaydullina@gmail.com",
      url: "mailto:regina.shaydullina@gmail.com?subject=Contact%20from%20website",
      icon: MailIcon,
      description: "Send me a detailed message about your project or inquiry.",
    },
    {
      name: "Facebook",
      handle: "Regina Shaydullina",
      url: "https://facebook.com/regina.shaydullina.5",
      icon: FacebookIcon,
      description: "Connect with me on Facebook to stay updated with my latest work.",
    }
  ];

  return (
    <>
      <Head>
        <title>Contact | Studio Regina</title>
        <meta name="description" content="Get in touch with Studio Regina for your photography and videography needs. Connect via Instagram, WhatsApp, email, or Facebook." />
      </Head>
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-900">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-wider mb-4">LET'S CONNECT</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg mb-4">
              I'm excited to hear about your story and discuss how we can create something beautiful together! Whether it's a wedding, family portrait, commercial project, or any other creative endeavor, I'm here to help bring your vision to life.
            </p>
            <p className="text-gray-600 text-lg">
              Choose your preferred way to connect with me below:
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {contactOptions.map((option) => (
            <Card
              key={option.name}
              href={option.url}
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <option.icon className="h-6 w-6 mr-3 text-gray-700" />
                  <h2>{option.name}</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p>{option.description}</p>
              </CardContent>
              <CardFooter>
                <p>{option.handle}</p>
              </CardFooter>
            </Card>
          ))}
        </section>

        <section className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            I typically respond within 24 hours. Looking forward to connecting with you!
          </p>
        </section>
      </main>
    </>
  );
} 