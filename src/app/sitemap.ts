import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://kg.github.io/aquascene'
    : 'http://localhost:3000'
    
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}