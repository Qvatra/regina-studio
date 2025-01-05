import { GetServerSideProps } from 'next';
import { aboutContent } from '../content/about';

const languages = Object.keys(aboutContent);

function generateSiteMap(languages: string[]) {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the home page for each language -->
     ${languages.map(lang => `
       <url>
         <loc>${baseUrl}/${lang}</loc>
       </url>
     `).join('')}
     
     <!-- Add portfolio pages -->
     ${languages.map(lang => `
       <url>
         <loc>${baseUrl}/${lang}/portfolio/photography</loc>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/portfolio/videography</loc>
       </url>
     `).join('')}

     <!-- Add service pages -->
     ${languages.map(lang => `
       <url>
         <loc>${baseUrl}/${lang}/services/photography</loc>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/services/videography</loc>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/services/wedding</loc>
       </url>
     `).join('')}

     <!-- Add other pages -->
     ${languages.map(lang => `
       <url>
         <loc>${baseUrl}/${lang}/about</loc>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/contact</loc>
       </url>
     `).join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const languages = Object.keys(aboutContent);
  const sitemap = generateSiteMap(languages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap; 