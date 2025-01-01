import { GetServerSideProps } from 'next';
import { aboutContent } from '../content/about';
import { contactContent } from '../content/contact';
import { servicesContent } from '../content/services';
import { photographyServicesContent } from '../content/photographyServices';
import { videographyServicesContent } from '../content/videographyServices';
import { weddingServicesContent } from '../content/weddingServices';

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
      <url>
        <loc>${baseUrl}/services</loc>
        ${Object.keys(servicesContent).map((lang) => `
          <xhtml:link 
            rel="alternate"
            hreflang="${lang}"
            href="${baseUrl}/services/${lang}"
          />`).join('')}
        <changefreq>monthly</changefreq>
      </url>
      <url>
        <loc>${baseUrl}/services/photography</loc>
        ${Object.keys(photographyServicesContent).map((lang) => `
          <xhtml:link 
            rel="alternate"
            hreflang="${lang}"
            href="${baseUrl}/services/photography/${lang}"
          />`).join('')}
        <changefreq>monthly</changefreq>
      </url>
      <url>
        <loc>${baseUrl}/services/videography</loc>
        ${Object.keys(videographyServicesContent).map((lang) => `
          <xhtml:link 
            rel="alternate"
            hreflang="${lang}"
            href="${baseUrl}/services/videography/${lang}"
          />`).join('')}
        <changefreq>monthly</changefreq>
      </url>
      <url>
        <loc>${baseUrl}/services/wedding</loc>
        ${Object.keys(weddingServicesContent).map((lang) => `
          <xhtml:link 
            rel="alternate"
            hreflang="${lang}"
            href="${baseUrl}/services/wedding/${lang}"
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
      ${Object.keys(servicesContent).map((lang) => `
        <url>
          <loc>${baseUrl}/services/${lang}</loc>
          <changefreq>monthly</changefreq>
        </url>
      `).join('')}
      ${Object.keys(photographyServicesContent).map((lang) => `
        <url>
          <loc>${baseUrl}/services/photography/${lang}</loc>
          <changefreq>monthly</changefreq>
        </url>
      `).join('')}
      ${Object.keys(videographyServicesContent).map((lang) => `
        <url>
          <loc>${baseUrl}/services/videography/${lang}</loc>
          <changefreq>monthly</changefreq>
        </url>
      `).join('')}
      ${Object.keys(weddingServicesContent).map((lang) => `
        <url>
          <loc>${baseUrl}/services/wedding/${lang}</loc>
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