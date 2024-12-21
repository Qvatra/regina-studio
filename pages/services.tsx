import Head from "next/head";
import Link from "next/link";

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
          description: "Professional product photography to showcase your items in their best light. Perfect for e-commerce, catalogs, and marketing materials.",
          startingPrice: "€35",
          priceDetails: "per image, includes basic retouching"
        },
        {
          name: "Personal Portraits",
          description: "Capture your personality and style with professional portrait sessions. Great for professional headshots, modeling portfolios, or personal branding.", 
          startingPrice: "€200",
          priceDetails: "per hour, includes 10 edited photos"
        },
        {
          name: "Family Photography",
          description: "Preserve precious family moments with natural, candid photography sessions. Perfect for families of all sizes and special occasions.",
          startingPrice: "€300",
          priceDetails: "1.5-hour session, includes 15 edited photos"
        },
        {
          name: "Event Photography",
          description: "Document your special events with professional photography. Suitable for corporate events, parties, celebrations, and more.",
          startingPrice: "€300",
          priceDetails: "per hour, includes 15 edited photos"
        },
        {
          name: "Wedding Photography",
          description: "Tell your wedding story through beautiful, timeless photographs. Comprehensive coverage of your special day.",
          startingPrice: "€2,500",
          priceDetails: "full day coverage, includes edited photos"
        }
      ]
    },
    {
      title: "Videography Services",
      services: [
        {
          name: "Commercial Videos",
          description: "Professional video production for your business or product. Perfect for advertising, social media, and marketing campaigns.",
          startingPrice: "€1,000",
          priceDetails: "per minute of finished video"
        },
        {
          name: "Social Media Reels",
          description: "Engaging short-form video content optimized for social media platforms. Ideal for building brand awareness and engagement.",
          startingPrice: "€150",
          priceDetails: "per hour of shooting and editing"
        },
        {
          name: "Event Videography",
          description: "Capture the energy and excitement of your event with professional video coverage. Perfect for corporate events, performances, and celebrations.",
          startingPrice: "€350",
          priceDetails: "per hour, includes edited footage"
        },
        {
          name: "Wedding Videography",
          description: "Create a cinematic story of your wedding day. From preparation to reception, capture all the special moments.",
          startingPrice: "€3,500",
          priceDetails: "full day coverage, includes edited film"
        },
        {
          name: "Family Story Videos",
          description: "Document your family's special moments or create a legacy video. Perfect for family reunions, anniversaries, or personal documentaries.",
          startingPrice: "€350",
          priceDetails: "per hour, includes edited video"
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
      <main className="mx-auto max-w-5xl px-4 py-12 text-gray-900">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-wider mb-4">SERVICES & PRICING</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each project is unique and deserves special attention. While these are my starting prices,
            I'm happy to create a custom package that perfectly fits your needs.
          </p>
        </section>

        {serviceCategories.map((category) => (
          <section key={category.title} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <Link
                  key={service.name}
                  href="/contact"
                  className="block group"
                >
                  <div className="bg-gray-100 p-6 hover:bg-gray-200 transition-colors transition-transform hover:scale-105 h-full cursor-pointer">
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4 min-h-[80px]">
                      {service.description}
                    </p>
                    <div className="border-t border-gray-300 pt-4">
                      <p className="text-2xl font-bold text-gray-900 mb-1">
                        {service.startingPrice}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {service.priceDetails}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">
            Looking for a custom package or have specific requirements?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors hover:bg-gray-700"
          >
            Let's Discuss Your Project
          </a>
        </section>
      </main>
    </>
  );
} 