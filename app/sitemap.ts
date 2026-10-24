import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://youaspirant.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about',
    '/guidance',
    '/programs',
    '/stories',
    '/testimonials',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/programs' || route === '/guidance' ? 0.9 : 0.7,
  }));
}
