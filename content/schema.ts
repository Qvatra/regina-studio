import { homeContent } from './home';
import { contactContent } from './contact';
import { aboutContent } from './about';
import { portfolioContent } from './portfolio';
import { photographyServicesContent } from './photographyServices';
import { videographyServicesContent } from './videographyServices';
import { weddingServicesContent } from './weddingServices';

const baseSchema = (lang: string) => ({
    "@context": "https://schema.org",
    "inLanguage": lang,
    "sameAs": [
        process.env.INSTAGRAM,
        process.env.FACEBOOK,
        process.env.YOUTUBE
    ]
});

const organizationInfo = {
  "@type": "Organization",
  "name": "Regina Photography",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amsterdam",
    "addressRegion": "North Holland",
    "addressCountry": "NL"
  },
};

export const getHomeSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "WebPage",
  "name": homeContent[lang].title,
  "description": homeContent[lang].description,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`,
  "mainEntity": {
    ...organizationInfo,
    "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/banner.jpg`,
  }
});

export const getContactSchema = (lang: string) => ({
    ...baseSchema(lang),
    "@type": "ContactPage",
    "name": contactContent[lang].title,
    "description": contactContent[lang].metaDescription,
    "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/contact`,
    "mainEntity": {
        ...organizationInfo,
        "contactPoint": [
        {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["en", "nl", "ru", "ua"],
            "url": process.env.WATSAPP,
            "contactOption": "WhatsApp"
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
    ...organizationInfo,
    "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/about.jpg`,
    "description": aboutContent[lang].bio.join(' '),
    "founder": {
      "@type": "Person",
      "name": "Regina Shaydullina",
      "jobTitle": "Professional Photographer and Videographer",
      "knowsLanguage": ["en", "nl", "ru", "ua"]
    }
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
    "provider": organizationInfo,
    "name": "Photography Portfolio",
    "description": portfolioContent[lang].metaDescription,
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
    "provider": organizationInfo,
    "name": "Videography Portfolio",
    "description": portfolioContent[lang].videoMetaDescription,
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
    ...organizationInfo,
    "@type": "Service",
    "serviceType": "Photography",
    "offers": photographyServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR"
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
    ...organizationInfo,
    "@type": "Service",
    "serviceType": "Videography",
    "offers": videographyServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR"
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
    ...organizationInfo,
    "@type": "Service",
    "serviceType": "Wedding Photography and Videography",
    "offers": weddingServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR"
    }))
  }
});