import type { MetadataRoute } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

import { getAbsoluteUrl } from '@/lib/seo';

const docsDirByLocale = {
    id: path.join(process.cwd(), 'content', 'id', 'docs'),
    en: path.join(process.cwd(), 'content', 'en', 'docs'),
} as const;

async function getDocPaths(locale: 'id' | 'en') {
    const dir = docsDirByLocale[locale];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    return entries
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .filter((name) => name.endsWith('.mdx'))
        .map((name) => name.replace(/\.mdx$/, ''))
        .filter((slug) => slug !== '_meta')
        .map((slug) =>
            slug === 'index' ? `/${locale}/docs` : `/${locale}/docs/${slug}`
        );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [idDocs, enDocs] = await Promise.all([
        getDocPaths('id'),
        getDocPaths('en'),
    ]);
    const staticPages = ['/id', '/en'];
    const urls = [...staticPages, ...idDocs, ...enDocs];
    const now = new Date();

    return urls.map((url) => ({
        url: getAbsoluteUrl(url),
        lastModified: now,
        changeFrequency: url.includes('/docs') ? 'weekly' : 'daily',
        priority: url === '/id' || url === '/en' ? 1 : 0.7,
    }));
}
