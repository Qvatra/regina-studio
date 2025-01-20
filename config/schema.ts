import { homeContent } from '@/content/home';
import { contactContent } from '@/content/contact';
import { aboutContent } from '@/content/about';
import { photographyServicesContent } from '@/content/photographyServices';
import { videographyServicesContent } from '@/content/videographyServices';
import { weddingServicesContent } from '@/content/weddingServices';
import { schemaContent } from '@/content/schema';

const baseSchema = (lang: string) => ({
    "@context": "https://schema.org",
    "inLanguage": lang,
});

const organizationInfo = (lang: string) => ({
  "@type": "Organization",
  "name": schemaContent[lang].company.name,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": schemaContent[lang].company.address,
    "addressRegion": schemaContent[lang].company.region,
    "addressCountry": "NL",
  },
  "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/banner.jpg`,
  "sameAs": [
    process.env.NEXT_PUBLIC_INSTAGRAM,
    process.env.NEXT_PUBLIC_FACEBOOK,
    process.env.NEXT_PUBLIC_YOUTUBE
  ]
});

export const getHomeSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "WebPage",
  "name": homeContent[lang].title,
  "description": homeContent[lang].description,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}`,
  "about": organizationInfo(lang),
});

export const getContactSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "ContactPage",
  "name": contactContent[lang].title,
  "description": contactContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/contact`,
  "mainEntity": {
      ...organizationInfo(lang),
      "areaServed": {
        "@type": "Place",
        "name": schemaContent[lang].company.region
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
    "name": schemaContent[lang].artist.name,
    "jobTitle": schemaContent[lang].artist.jobTitle,
    "knowsLanguage": ["en", "nl", "ru", "ua"],
    "description": schemaContent[lang].artist.description,
    "image": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/about.jpg`,
    "worksFor": organizationInfo(lang)
  }
});

// export const getPhotographyPortfolioSchema = (lang: string) => ({
//   ...baseSchema(lang),
//   "@type": "CollectionPage",
//   "name": portfolioContent[lang].title,
//   "description": portfolioContent[lang].metaDescription,
//   "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/portfolio/photography`,
//   "mainEntity": {
//     "@type": "ImageGallery",
//     "name": "Photography Portfolio",
//     "description": portfolioContent[lang].metaDescription,
//     "provider": organizationInfo(lang),
//     "image": {
//       "@type": "ImageObject",
//       "contentUrl": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/photo.jpg`
//     }
//   }
// });

// export const getVideographyPortfolioSchema = (lang: string) => ({
//   ...baseSchema(lang),
//   "@type": "CollectionPage",
//   "name": portfolioContent[lang].videoTitle,
//   "description": portfolioContent[lang].videoMetaDescription,
//   "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/portfolio/videography`,
//   "mainEntity": {
//     "@type": "VideoGallery",
//     "name": "Videography Portfolio",
//     "description": portfolioContent[lang].videoMetaDescription,
//     "provider": organizationInfo(lang),
//     "image": {
//       "@type": "ImageObject",
//       "contentUrl": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/video.jpg`
//     }
//   }
// });

export const getPhotographyServicesSchema = (lang: string) => ({
  ...baseSchema(lang),
  "@type": "WebPage",
  "name": photographyServicesContent[lang].title,
  "description": photographyServicesContent[lang].metaDescription,
  "url": `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/services/photography`,
  "mainEntity": {
    "@type": "Service",
    "serviceType": "Photography",
    "provider": organizationInfo(lang),
    "areaServed": {
      "@type": "Place",
      "name": schemaContent[lang].company.region
    },
    "offers": photographyServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR",
      "areaServed": schemaContent[lang].company.region,
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
    "provider": organizationInfo(lang),
    "areaServed": {
      "@type": "Place",
      "name": schemaContent[lang].company.region
    },
    "offers": videographyServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR",
      "areaServed": schemaContent[lang].company.region,
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
    "serviceType": "Photography/Videography",
    "provider": organizationInfo(lang),
    "areaServed": {
      "@type": "Place",
      "name": schemaContent[lang].company.region
    },
    "offers": weddingServicesContent[lang].packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR",
      "areaServed": schemaContent[lang].company.region,
      "availability": "https://schema.org/InStock",
    }))
  }
});