import Head from "next/head";
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';
import Link from "next/link";
import ArrowIcon from '../components/icons/ArrowIcon';
import Button from '../components/Button';

export default function Services() {
  const services = [
    {
      title: "Photography",
      path: "/services/photography",
      description: "Final price is calculated based on shooting time, number of photos, and travel distance. Click below to explore packages.",
      price: "from €200",
      priceDetails: "per 1 hour session / 25 colorgraded photos"
    },
    {
      title: "Videography",
      description: "Final price is calculated based on shooting duration, post-production work complexity, and travel distance. Click below to explore packages.",
      path: "/services/videography",
      price: "from €250",
      priceDetails: "per 1 hour session / 1 min final video"
    },
    {
      title: "Wedding",
      path: "/services/wedding",
      description: "Package price varies depending on your chosen services, coverage duration, and additional options. Click below to explore wedding packages.",
      price: "from €1.100",
      priceDetails: "for half-day photo or video coverage"
    }
  ];

  return (
    <>
      <Head>
        <title>Services & Pricing | Regina Photo Video Studio</title>
        <meta name="description" content="Prices for professional photography and videography services including weddings, events, portraits, commercial projects, and more." />
      </Head>
      <main className="mx-auto max-w-5xl px-4 pt-12 pb-20 text-gray-900">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-wider mb-4">SERVICES & PRICING</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional photography and videography services tailored to your needs.
            Contact me for custom packages and special requirements.
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
                <Button href={service.path}>
                  Learn More
                  <ArrowIcon className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
} 