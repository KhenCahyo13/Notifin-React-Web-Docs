import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { Head as NextraHead } from 'nextra/components';

import { siteConfig } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [
        'notifin',
        'alert',
        'react',
        'react alert dialog',
        'notification',
        'radix',
        'typescript',
    ],
    alternates: {
        languages: {
            id: '/id',
            en: '/en',
            'x-default': '/id',
        },
    },
    openGraph: {
        type: 'website',
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
    },
    icons: {
        icon: '/icon.svg',
        shortcut: '/icon.svg',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    return (
        <html lang={locale} suppressHydrationWarning>
            <NextraHead
                color={{
                    hue: { light: 205, dark: 205 },
                    saturation: { light: 92, dark: 92 },
                    lightness: { light: 44, dark: 60 },
                }}
                backgroundColor={{
                    light: 'rgb(250,250,250)',
                    dark: 'rgb(17,17,17)',
                }}
            />
            <body
                className="antialiased"
                style={{
                    fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                }}
            >
                {children}
            </body>
        </html>
    );
}
