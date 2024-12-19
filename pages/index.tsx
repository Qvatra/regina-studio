import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TypeWriter from '../components/TypeWriter';

export default function Home() {
  const citations = [
    {
      text: "Every photograph tells a story waiting to be discovered",
      author: "Regina"
    },
    {
      text: "Capturing moments that last a lifetime",
      author: "Regina"
    },
    {
      text: "Where creativity meets professionalism",
      author: "Client Review"
    },
    {
      text: "Your memories deserve to be preserved beautifully",
      author: "Regina"
    },
    {
      text: "I enjoy every moment of my work",
      author: "Regina"
    },
    {
      text: "Very professional and creative. Worth every penny!",
      author: "Alex"
    }
  ];

  const services = [
    {
      title: "Photography",
      description: "From intimate portraits to grand events, we capture the essence of every moment.",
      items: ["Weddings", "Family Portraits", "Events", "Product Photography", "Personal Shoots"],
      image: "/assets/photo.jpg",
      link: "/portfolio-photography"
    },
    {
      title: "Videography",
      description: "Professional video production that tells your story in motion.",
      items: ["Wedding Films", "Commercial Videos", "Social Media Content", "Event Coverage", "Family Stories"],
      image: "/assets/video.jpg",
      link: "/portfolio-videography"
    }
  ];

  const [currentCitation, setCurrentCitation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const typeWriterWords = ["Photographer", "Filmmaker", "Blogger", "Friend"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCitation((prev) => (prev + 1) % citations.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Studio Regina | Creative Photography & Videography Services</title>
        <meta 
          name="description" 
          content="Professional photography and videography services in Amsterdam area. Specializing in weddings, events, portraits, and commercial projects." 
        />
      </Head>

      <main className="text-gray-900">
        {/* Hero Banner */}
        <div className="relative w-full">
          <div className="relative md:h-auto aspect-[21/7] w-full">
            <Image
              src="/assets/banner.jpg"
              alt="Studio Regina Hero Image"
              fill
              className="object-cover object-[center_calc(70%)]"
              priority
            />
          </div>
        </div>

        {/* Name Introduction */}
        <div className="text-center mt-24">
          <p className="text-3xl font-semibold text-gray-900 pb-4 uppercase">This is me, Regina:</p>

          <TypeWriter
            words={typeWriterWords}
            typingSpeed={150}
            deletingSpeed={100}
            delayBetweenWords={1000}
            className="text-gray-400 text-2xl font-semibold uppercase"
          />

          <p className="text-lg text-gray-600 pt-5 font-semibold">- based in Amsterdam area -</p>
        </div>

        {/* Services */}
        <div id="portfolio" className="py-24 scroll-mt-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 ml-6 mr-6">
              {services.map((service) => (
                <div key={service.title} className="group">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <Link href={service.link}>
                    <div className="relative h-60 mb-6 overflow-hidden cursor-pointer">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold">
                          View Portfolio
                        </span>
                      </div>
                    </div>
                  </Link>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Citations */}
        <div className="mb-20 max-w-4xl mx-auto px-4 flex items-center justify-center">
          <div 
            className={`text-center transition-all duration-500 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}
          >
            <p className="text-2xl md:text-3xl italic mb-4 text-gray-800">
              "{citations[currentCitation].text}"
            </p>
            <p className="text-gray-600">
              — {citations[currentCitation].author}
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="max-w-4xl mx-auto px-4">
          <hr className="border-gray-500 border-t-1 my-12" />
        </div>

        {/* CTA Section */}
        <div className="pb-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to capture your special moments or bring your creative vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
