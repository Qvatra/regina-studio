import Head from "next/head";
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';

interface ServiceCategory {
  title: string;
  services: Service[];
}

interface Service {
  name: string;
  description: string;
  startingPrice: string;
  priceDetails: string;
}

export default function Services() {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Photography Services",
      services: [
        {
          name: "Product Photography",
          description: "Professional product photos for e-commerce and marketing. Includes basic retouching to make your items shine.",
          startingPrice: "€35",
          priceDetails: "per image with basic retouching"
        },
        {
          name: "Personal Portraits",
          description: "Professional portraits for headshots, modeling portfolios, and personal branding that capture your unique style.",
          startingPrice: "€200",
          priceDetails: "per hour, 10 edited photos"
        },
        {
          name: "Family Photography",
          description: "Natural, candid photography sessions to capture precious family moments and create lasting memories.",
          startingPrice: "€300",
          priceDetails: "1.5h session, 15 edited photos"
        },
        {
          name: "Event Photography",
          description: "Professional coverage for corporate events, parties, and celebrations. Capturing key moments as they unfold.",
          startingPrice: "€300",
          priceDetails: "per hour, 15 edited photos"
        },
        {
          name: "Wedding Photography",
          description: "Comprehensive wedding day coverage capturing all the special moments, from preparation to reception.",
          startingPrice: "€2.500",
          priceDetails: "full day with edited photos"
        }
      ]
    },
    {
      title: "Videography Services",
      services: [
        {
          name: "Commercial Videos",
          description: "High-quality video production for business marketing, advertising, and social media campaigns.",
          startingPrice: "€1.000",
          priceDetails: "per minute of final video"
        },
        {
          name: "Social Media Reels",
          description: "Engaging short-form videos optimized for social platforms to boost your brand's online presence.",
          startingPrice: "€150",
          priceDetails: "per hour, shooting & editing"
        },
        {
          name: "Event Videography",
          description: "Professional video coverage for corporate events and celebrations, capturing the energy and excitement.",
          startingPrice: "€350",
          priceDetails: "per hour with edited footage"
        },
        {
          name: "Wedding Videography",
          description: "Cinematic wedding coverage that tells your love story, from the first look to the last dance.",
          startingPrice: "€1.500 - €5.000",
          priceDetails: "depending on the film length"
        },
        {
          name: "Family Story Videos",
          description: "Document family milestones and create legacy videos perfect for reunions and special occasions.",
          startingPrice: "€350",
          priceDetails: "per hour with edited video"
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services & Pricing | Studio Regina</title>
        <meta name="description" content="Professional photography and videography services including weddings, events, portraits, commercial projects, and more." />
      </Head>
      <main className="mx-auto max-w-5xl px-4 pt-12 text-gray-900">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-wider mb-4">SERVICES & PRICING</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each project is unique and deserves special attention. While these are my starting prices,
            I'm happy to create a custom package that perfectly fits your needs.
          </p>
        </section>

        {serviceCategories.map((category) => (
          <section key={category.title} className="mb-16">
            <h2 className="text-3xl font-bold tracking-wider mb-8">{category.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <Card key={service.name} href="/contact">
                  <CardHeader>
                    <h3>{service.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-2xl font-bold text-gray-900">
                      {service.startingPrice}
                    </p>
                    <p className="text-sm">{service.priceDetails}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <section className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-8">
            Looking for a custom package or have specific requirements?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors hover:bg-gray-600"
          >
            Let's Discuss Your Project
          </a>
        </section>
      </main>
    </>
  );
} 