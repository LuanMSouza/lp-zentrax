import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://zentrax.dvls.com.br',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://zentrax.dvls.com.br/cadastro',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://zentrax.dvls.com.br/termos',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://zentrax.dvls.com.br/privacidade',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}