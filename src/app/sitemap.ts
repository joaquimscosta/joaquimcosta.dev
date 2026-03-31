import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://joaquimcosta.dev'

  const lastModified = new Date('2026-03-31')

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/articles`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/uses`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
