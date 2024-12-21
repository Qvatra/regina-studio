import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TypeWriter from '../components/TypeWriter';
import Citations from '../components/Citations';

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

  const typeWriterWords = ["Photographer", "Filmmaker", "Blogger", "Friend"];

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
          <div className="relative md:h-auto aspect-[21/11] sm:aspect-[21/7] xl:aspect-[21/5] w-full">
            <Image
              src="/assets/banner.jpg"
              alt="Studio Regina Hero Image"
              fill
              className="object-cover object-[center_calc(70%)] xl:object-[center_calc(52%)]"
              priority
            />
          </div>
        </div>

        {/* Name Introduction */}
        <div className="text-center mt-24">
          <h1 className="text-3xl font-bold tracking-wider text-gray-900 pb-4 uppercase">This is me, Regina:</h1>

          <TypeWriter
            words={typeWriterWords}
            typingSpeed={150}
            deletingSpeed={100}
            delayBetweenWords={1000}
            className="text-gray-400 text-2xl font-semibold uppercase"
          />

          <p className="text-lg text-gray-600 pt-5 font-semibold">- Amsterdam area based, open for travel -</p>
        </div>

        {/* Services */}
        <div id="portfolio" className="pt-24 pb-20 scroll-mt-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 sm:gap-4 md:gap-6 ml-2 mr-2">
              {services.map((service) => (
                <div key={service.title} className="group">
                  <Link href={service.link}>
                    <div className="relative aspect-[21/9] mb-6 overflow-hidden cursor-pointer">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl font-semibold text-white uppercase z-10">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                  <p className="text-gray-600 mb-4 font-semibold">{service.description}</p>
                  <ul className="space-y-2 mb-6">
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
        <Citations citations={citations} />

        {/* Horizontal Line */}
        <div className="max-w-4xl mx-auto px-4">
          <hr className="border-gray-200 border-t-1 my-12" />
        </div>

        {/* CTA Section */}
        <div>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-wider mb-4 text-gray-900">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to capture your special moments or bring your creative vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
