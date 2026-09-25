import { MetadataRoute } from 'next'
import { SEGMENTOS } from '@/lib/segmentos'

export default function sitemap(): MetadataRoute.Sitemap {
    const paginasSegmento = SEGMENTOS.map(s => ({
        url: `https://zentrax.dvls.com.br/para/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        ...paginasSegmento,
        {
            url: 'https://zentrax.dvls.com.br/calculadora-fiado',
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        },
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