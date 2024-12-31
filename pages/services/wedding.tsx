import Head from "next/head";
import Button from "../../components/Button";
import { Card, CardHeader, CardContent, CardFooter } from '../../components/Card';

export default function WeddingServices() {
  const packages = [
    {
      title: "Photo Only",
      description: "Perfect for couples wanting quality wedding photography coverage",
      price: "€1.100",
      features: [
        "6 hours of coverage",
        "150+ color-graded photos",
        "Unposed documentary session",
        "1-2 minute video as a present"
      ]
    },
    {
      title: "Video Only",
      description: "Capture your special day in cinematic motion",
      price: "€1.400",
      features: [
        "6 hours of coverage",
        "4-6 minute wedding film",
        "Licensed music",
        "Multiple revisions"
      ]
    }
  ];

  const allPackagesDetails = [
    "Pre-wedding consultation",
    "Professional equipment",
    "High-resolution files",
    "Post production",
  ];

  return (
    <>
      <Head>
        <title>Wedding Services | Regina Photo Video Studio</title>
        <meta name="description" content="Complete wedding photography and videography packages for your special day." />
      </Head>
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-bold tracking-wider mb-8">Wedding Packages</h1>
        
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
                <Button href="/contact">Book Consultation</Button>
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
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Extended Hours:</span> Additional coverage can be added at €200 per hour.
            </p>
            <p>
              <span className="font-semibold">Travel Fee:</span> €0.40 per kilometer from Beverwijk will be added to the package price for venues beyond 30km.
            </p>
            <p>
              <span className="font-semibold">Confidentiality Fee:</span> A fee of €50 applies if you wish to prevent the work from being used in my portfolio. This ensures your complete privacy while allowing me to maintain a fair pricing structure.
            </p>
          </div>
        </section>

        <p className="text-gray-600 text-center">
          Every wedding is unique. Contact me to create a custom package that perfectly fits your special day.
        </p>
      </main>
    </>
  );
} 