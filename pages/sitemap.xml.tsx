import { GetServerSideProps } from 'next';
import { aboutContent } from '../content/about';
import { contactContent } from '../content/contact';

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${baseUrl}/about</loc>
        ${Object.keys(aboutContent).map((lang) => `
          <xhtml:link 
            rel="alternate"
            hreflang="${lang}"
            href="${baseUrl}/about/${lang}"
          />`).join('')}
        <changefreq>monthly</changefreq>
      </url>
      <url>
        <loc>${baseUrl}/contact</loc>
        ${Object.keys(contactContent).map((lang) => `
          <xhtml:link 
            rel="alternate"
            hreflang="${lang}"
            href="${baseUrl}/contact/${lang}"
          />`).join('')}
        <changefreq>monthly</changefreq>
      </url>
      ${Object.keys(aboutContent).map((lang) => `
        <url>
          <loc>${baseUrl}/about/${lang}</loc>
          <changefreq>monthly</changefreq>
        </url>
      `).join('')}
      ${Object.keys(contactContent).map((lang) => `
        <url>
          <loc>${baseUrl}/contact/${lang}</loc>
          <changefreq>monthly</changefreq>
        </url>
      `).join('')}
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap; 