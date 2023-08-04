import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ensia-hub.netlify.app',
      lastModified: new Date(),
    },
  ]
}