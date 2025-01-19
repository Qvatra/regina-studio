"use client";
import { useState, useEffect } from 'react';

interface Citation {
  text: string;
  author: string;
}

interface CitationsProps {
  citations: Citation[];
  interval?: number;
}

export default function Citations({ citations, interval = 5000 }: CitationsProps) {
  const [currentCitation, setCurrentCitation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCitation((prev) => (prev + 1) % citations.length);
        setIsTransitioning(false);
      }, 500);
    }, interval);
    return () => clearInterval(timer);
  }, [citations.length, interval]);

  return (
    <div className="mb-20 max-w-4xl mx-auto px-4 flex items-center justify-center">
      <div 
        className={`text-center transition-all duration-500 ${
          isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
        }`}
      >
        <p className="text-2xl md:text-3xl italic mb-4 text-gray-800 font-heading">
          &quot;{citations[currentCitation].text}&quot;
        </p>
        <p className="text-gray-600">
          — {citations[currentCitation].author}
        </p>
      </div>
    </div>
  );
} 