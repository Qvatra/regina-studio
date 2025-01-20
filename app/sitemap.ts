import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

  type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';

  const createAlternates = (route: string) => ({
    languages: {
      en: `${baseUrl}/en${route}`,
      nl: `${baseUrl}/nl${route}`,
      ru: `${baseUrl}/ru${route}`,
    },
  });

  const createSitemapEntry = ({ route, changeFrequency, priority }: { route: string, changeFrequency: ChangeFrequency, priority: number }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    alternates: createAlternates(route),
    priority,
  });

  return [
    createSitemapEntry({ route: '', changeFrequency: 'monthly', priority: 1 }),
    createSitemapEntry({ route: '/about', changeFrequency: 'monthly', priority: 0.8 }),
    createSitemapEntry({ route: '/contact', changeFrequency: 'monthly', priority: 0.8 }),
    createSitemapEntry({ route: '/services/photography', changeFrequency: 'monthly', priority: 0.8 }),
    createSitemapEntry({ route: '/services/videography', changeFrequency: 'monthly', priority: 0.8 }),
    createSitemapEntry({ route: '/services/wedding', changeFrequency: 'monthly', priority: 0.8 }),
  ];
}