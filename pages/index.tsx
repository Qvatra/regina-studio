import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

      <main className="text-white">
        {/* Hero Banner */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/assets/home.jpg"
            alt="Studio Regina Hero Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Capturing Life's Beautiful Moments
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional Photography & Videography Services in Amsterdam Area
              </p>
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        {/* Citations */}
        <div className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 h-[120px] flex items-center justify-center">
            <div 
              className={`text-center transition-all duration-500 ${
                isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <p className="text-2xl md:text-3xl italic mb-4">
                "{citations[currentCitation].text}"
              </p>
              <p className="text-gray-400">
                — {citations[currentCitation].author}
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="portfolio" className="py-20 bg-gray-900 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service) => (
                <div key={service.title} className="group">
                  <Link href={service.link}>
                    <div className="relative h-80 mb-6 overflow-hidden rounded-lg cursor-pointer">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="bg-white/90 text-black px-6 py-2 rounded-lg font-semibold">
                          View Portfolio
                        </span>
                      </div>
                    </div>
                  </Link>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
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

        {/* CTA Section */}
        <div className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to capture your special moments or bring your creative vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
