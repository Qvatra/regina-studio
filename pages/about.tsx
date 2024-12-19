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
      <main className="mx-auto max-w-4xl px-4 py-12 text-gray-900">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-wider mb-4">THIS IS ME</h1>
          <h2 className="text-2xl tracking-wide mb-6">R E G I N A</h2>
          <p className="text-lg italic text-gray-600">
            Amsterdam area based, open for travel.
          </p>
        </section>

        <div className="mb-16">
          <div className="max-w-2xl mx-auto aspect-[10/6] relative">
            <Image
              src="/assets/about.jpg"
              alt="Regina Portrait"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">MY STORY</h2>
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
          <h2 className="text-3xl font-bold mb-8">FUN FACTS</h2>
          <ul className="space-y-4">
            {funFacts.map((fact, index) => (
              <li key={index} className="flex items-start space-x-4">
                <span className="font-bold text-xl min-w-[24px]">{index + 1}.</span>
                <span className="text-lg text-gray-600">{fact}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
} 