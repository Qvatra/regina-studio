import { GetServerSideProps } from 'next';
import { aboutContent } from '../content/about';

const languages = Object.keys(aboutContent);

function generateSiteMap(languages: string[]) {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const today = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${languages.map(lang => `
       <!-- Home pages -->
       <url>
         <loc>${baseUrl}/${lang}</loc>
         <lastmod>${today}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>1.0</priority>
       </url>

       <!-- Portfolio pages -->
       <url>
         <loc>${baseUrl}/${lang}/portfolio/photography</loc>
         <lastmod>${today}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.9</priority>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/portfolio/videography</loc>
         <lastmod>${today}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.9</priority>
       </url>

       <!-- Service pages -->
       <url>
         <loc>${baseUrl}/${lang}/services/photography</loc>
         <lastmod>${today}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/services/videography</loc>
         <lastmod>${today}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/services/wedding</loc>
         <lastmod>${today}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>

       <!-- Other pages -->
       <url>
         <loc>${baseUrl}/${lang}/about</loc>
         <lastmod>${today}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.7</priority>
       </url>
       <url>
         <loc>${baseUrl}/${lang}/contact</loc>
         <lastmod>${today}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.7</priority>
       </url>
     `).join('')}
   </urlset>`;
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