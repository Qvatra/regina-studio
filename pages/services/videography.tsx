import Head from "next/head";
import Button from "../../components/Button";
import { Card, CardHeader, CardContent, CardFooter } from '../../components/Card';

export default function VideographyServices() {
  const packages = [
    {
      title: "Minimum",
      description: "Perfect for short promotional videos or social media content",
      price: "€250",
      features: [
        "1 hour shooting duration",
        "up to 1 minute final video"
      ]
    },
    {
      title: "Basic",
      description: "Ideal for family stories, events, product videos, or longer promotional content",
      price: "€450",
      features: [
        "2 hours shooting duration",
        "up to 2 minutes final video"
      ]
    },
    {
      title: "Events",
      description: "Great for conferences, celebrations, or corporate events",
      price: "€600",
      features: [
        "4 hours shooting duration",
        "up to 5 minutes final video"
      ]
    }
  ];

  const allPackagesDetails = [
    "Professional video equipment",
    "Professional audio recording",
    "Post production",
    "Music licensing",
    "Multiple revisions"
  ];

  return (
    <>
      <Head>
        <title>Videography Services | Regina Photo Video Studio</title>
        <meta name="description" content="Professional videography services including commercial videos, events, and creative productions." />
      </Head>
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-bold tracking-wider mb-8">Videography Packages</h1>
        
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
                <Button href="/contact">Book Now</Button>
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
              <span className="font-semibold">Confidentiality Fee:</span> A fee of €50 applies if you wish to prevent the video from being used in my portfolio. This ensures your complete privacy while allowing me to maintain a fair pricing structure.
            </p>
          </div>
        </section>

        <p className="text-gray-600 text-center">
          Need a custom package? Contact me to discuss your specific requirements.
        </p>
      </main>
    </>
  );
} 