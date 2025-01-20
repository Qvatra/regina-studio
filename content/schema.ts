import { homeContent } from '@/content/home';
import { contactContent } from '@/content/contact';
import { aboutContent } from '@/content/about';
import { portfolioContent } from '@/content/portfolio';
import { photographyServicesContent } from '@/content/photographyServices';
import { videographyServicesContent } from '@/content/videographyServices';
import { weddingServicesContent } from '@/content/weddingServices';

const baseSchema = (lang: string) => ({
    "@context": "https://schema.org",
    "inLanguage": lang,
});

const organizationInfo = {
  "@type": "Organization",
  "name": "Regina Photography",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amsterdam",
    "addressRegion": "North Holland",
    "addressCountry": "NL",
  },
  "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/banner.jpg`,
  "sameAs": [
    process.env.NEXT_PUBLIC_INSTAGRAM,
    process.env.NEXT_PUBLIC_FACEBOOK,
    process.env.NEXT_PUBLIC_YOUTUBE
  ]
};

export const getHomeSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "WebPage",
  "name": homeContent[lang].title,
  "description": homeContent[lang].description,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`,
  "about": organizationInfo,
});

export const getContactSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "ContactPage",
  "name": contactContent[lang].title,
  "description": contactContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/contact`,
  "mainEntity": {
      ...organizationInfo,
      "areaServed": {
        "@type": "Place",
        "name": "Noord Holland"
      },
      "contactPoint": [
        {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["en", "nl", "ru", "ua"],
            "url": process.env.NEXT_PUBLIC_WATSAPP,
            "contactOption": "WhatsApp"
        },
        {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["en", "nl", "ru", "ua"],
            "url": process.env.NEXT_PUBLIC_INSTAGRAM,
            "contactOption": "Instagram"
        }
      ]
  }
});

export const getAboutSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "AboutPage",
  "name": aboutContent[lang].title,
  "description": aboutContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/about`,
  "mainEntity": {
    "@type": "Person",
    "name": "Regina Shaydullina",
    "jobTitle": "Professional Photographer and Videographer",
    "knowsLanguage": ["en", "nl", "ru", "ua"],
    "description": aboutContent[lang].bio.join(' '),
    "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/about.jpg`,
    "worksFor": organizationInfo
  }
});

export const getPhotographyPortfolioSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "CollectionPage",
  "name": portfolioContent[lang].title,
  "description": portfolioContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/portfolio/photography`,
  "mainEntity": {
    "@type": "ImageGallery",
    "name": "Photography Portfolio",
    "description": portfolioContent[lang].metaDescription,
    "provider": organizationInfo,
    "image": {
      "@type": "ImageObject",
      "contentUrl": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/photo.jpg`
    }
  }
});

export const getVideographyPortfolioSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "CollectionPage",
  "name": portfolioContent[lang].videoTitle,
  "description": portfolioContent[lang].videoMetaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/portfolio/videography`,
  "mainEntity": {
    "@type": "VideoGallery",
    "name": "Videography Portfolio",
    "description": portfolioContent[lang].videoMetaDescription,
    "provider": organizationInfo,
    "image": {
      "@type": "ImageObject",
      "contentUrl": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/video.jpg`
    }
  }
});

export const getPhotographyServicesSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "WebPage",
  "name": photographyServicesContent[lang].title,
  "description": photographyServicesContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/services/photography`,
  "mainEntity": {
    "@type": "Service",
    "serviceType": "Photography",
    "provider": organizationInfo,
    "areaServed": {
      "@type": "Place",
      "name": "Noord Holland"
    },
    "offers": photographyServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR",
      "areaServed": "Noord Holland",
      "availability": "https://schema.org/InStock",
    }))
  }
});

export const getVideographyServicesSchema = (lang: string) => ({
    ...baseSchema(lang),
  "@type": "WebPage",
  "name": videographyServicesContent[lang].title,
  "description": videographyServicesContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/services/videography`,
  "mainEntity": {
    "@type": "Service",
    "serviceType": "Videography",
    "provider": organizationInfo,
    "areaServed": {
      "@type": "Place",
      "name": "Noord Holland"
    },
    "offers": videographyServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR",
      "areaServed": "Noord Holland",
      "availability": "https://schema.org/InStock",
    }))
  }
});

export const getWeddingServicesSchema = (lang: string) => ({
    ...baseSchema(lang),
  "@type": "WebPage",
  "name": weddingServicesContent[lang].title,
  "description": weddingServicesContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/services/wedding`,
  "mainEntity": {
    "@type": "Service",
    "serviceType": "Wedding Photography and Videography",
    "provider": organizationInfo,
    "areaServed": {
      "@type": "Place",
      "name": "Noord Holland"
    },
    "offers": weddingServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR",
      "areaServed": "Noord Holland",
      "availability": "https://schema.org/InStock",
    }))
  }
});