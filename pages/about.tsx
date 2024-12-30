import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Regina photography</title>
        <meta name="description" content="Learn about Regina, her journey in photography and videography, and her passion for creative storytelling." />
      </Head>
      <main className="mx-auto px-4 text-gray-900 max-w-3xl">
        <div className="mb-12 mt-4">
          <div className="mx-auto aspect-[10/6] relative">
            <Image
              src="/assets/about.jpg"
              alt="Regina Shaydullina - Professional Photographer and Videographer in Amsterdam"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <section className="mb-16 mx-auto">
          <h2 className="text-3xl font-bold tracking-wider mb-4">MY STORY</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              My journey into the world of visual storytelling began in 2006 when I first picked up a camera at the age of 18. What started as a hobby quickly blossomed into an all-consuming passion that would eventually become my profession.
            </p>
            <p className="text-gray-600">
              Born in Siberia and having lived in Ukraine before making the Netherlands my home, I bring a rich multicultural perspective to my work. Speaking English, Dutch, Russian, and Ukrainian helps me connect with clients from diverse backgrounds, making everyone feel comfortable during our sessions.
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

        <section className="mt-20">
          <div className="text-md text-gray-500 text-center">
            <p>Chamber of Commerce (KVK) Number: 95169903</p>
          </div>
        </section>
      </main>
    </>
  );
} 