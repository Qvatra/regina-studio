import Head from "next/head";
import StyledButton from '../../components/StyledButton';
import { Card, CardHeader, CardContent, CardFooter } from '../../components/Card';
import Link from "next/link";

export default function PhotographyServices() {
  const packages = [
    {
      title: "Minimum",
      description: "Perfect for personal portraits or small business headshots",
      price: "€200",
      features: [
        "1 hour shooting duration",
        "25-30 color-graded photos"
      ]
    },
    {
      title: "Basic",
      description: "Ideal for family sessions or product photography",
      price: "€350",
      features: [
        "2 hours shooting duration",
        "50-60 color-graded photos"
      ]
    },
    {
      title: "Events",
      description: "Great for celebrations, corporate events, or conferences",
      price: "€500",
      features: [
        "3-4 hours shooting duration",
        "100 color-graded photos"
      ]
    }
  ];

  const allPackagesDetails = [
    "Professional photography equipment",
    "Professional lighting setup", 
    "Color correction",
    "High-resolution digital files"
  ];

  return (
    <>
      <Head>
        <title>Photography Services | Regina Photo Video Studio</title>
        <meta name="description" content="Professional photography services including portraits, events, commercial photography and creative shoots." />
      </Head>
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-bold tracking-wider mb-8">Photography Packages</h1>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {packages.map((pkg) => (
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
                <StyledButton href="/contact">Book Now</StyledButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What's Included in All Packages</h2>
          <ul className="space-y-2 text-gray-600">
            {allPackagesDetails.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-16 text-gray-600">
          <h2 className="text-2xl font-bold mb-4">Additional Fees</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Travel Fee:</span> €0.40 per kilometer from Beverwijk will be added to the package price.
            </p>
            <p>
              <span className="font-semibold">Confidentiality Fee:</span> A fee of €50 applies if you wish to prevent the photos from being used in my portfolio. This ensures your complete privacy while allowing me to maintain a fair pricing structure.
            </p>
          </div>
        </section>

        <div className="text-center">
          <p className="text-gray-600">
            Need a custom package?{' '}
            <Link href="/contact" className="text-gray-900 hover:text-gray-500 transition-colors font-semibold underline">
              Contact me
            </Link>
            {' '}to discuss your specific requirements.
          </p>
        </div>
      </main>
    </>
  );
} 