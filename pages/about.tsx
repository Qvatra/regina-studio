import Head from "next/head";
import Image from "next/image";

export default function About() {
  const funFacts = [
    "I speak four languages: English, Dutch, Russian, and Ukrainian",
    "Before becoming a photographer, I worked as a chef in an Italian restaurant",
    "I have a Bachelor's degree in Law, but my creative passion led me down a different path",
    "My love for photography started when I was 18, and it's been growing ever since",
    "I live in beautiful Beverwijk, just a stone's throw away from Amsterdam"
  ];

  return (
    <>
      <Head>
        <title>About | Studio Regina</title>
        <meta name="description" content="Learn about Regina, her journey in photography and videography, and her passion for creative storytelling." />
      </Head>
      <main className="mx-auto px-4 text-gray-900">
        <div className="mb-16 mt-2">
          <div className="max-w-2xl mx-auto aspect-[10/6] relative">
            <Image
              src="/assets/about.jpg"
              alt="Regina Portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-wider mb-4">MY STORY</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              My journey into the world of visual storytelling began in 2006 when I first picked up a camera at the age of 18. What started as a hobby quickly blossomed into an all-consuming passion that would eventually become my profession.
            </p>
            <p className="text-gray-600">
              Though my path wasn't straightforward – I earned a Bachelor's degree in Law and even spent time as a chef in an Italian restaurant – these experiences have enriched my perspective and approach to creative work. Each chapter of my life has contributed to how I tell stories through my lens.
            </p>
            <p className="text-gray-600">
              Today, I specialize in both photography and videography, creating everything from intimate family portraits to dynamic advertising content. My work is particularly focused on capturing genuine moments and emotions, whether that's at a wedding, during a family session, or while filming a commercial.
            </p>
            <p className="text-gray-600">
              Based in Beverwijk, near Amsterdam, I find endless inspiration in the beauty of the Netherlands – from its stunning sunsets to its cozy corners. My love for flowers and natural beauty often finds its way into my work, creating images that are both authentic and aesthetically pleasing.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-wider mb-4">FUN FACTS</h2>
          <ul className="space-y-4">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-2xl leading-none flex items-center">•</span>
                <span className="text-lg text-gray-600 flex items-center">{fact}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
} 