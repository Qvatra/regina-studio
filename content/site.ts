export const getAppSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Regina Photography",
  "url": process.env.NEXT_PUBLIC_WEBSITE_URL,
  "sameAs": [
    process.env.INSTAGRAM,
    process.env.FACEBOOK,
    process.env.YOUTUBE
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amsterdam",
    "addressRegion": "North Holland",
    "addressCountry": "NL"
  }
});