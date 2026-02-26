import type { AppLocale } from '@/i18n/routing';
import type { HomeData } from '@/pages/home/types';

const usageSnippet = `import { Notifin, notifin } from "@khencahyo13/notifin-react";

export default function App() {
  return (
    <>
      <Notifin motion="subtle" colorScheme="system" />
      <button onClick={() => notifin.success("Profile updated")}>
        Trigger
      </button>
    </>
  );
}`;

const byLocale: Record<AppLocale, Omit<HomeData, 'docsLink'>> = {
    id: {
        badge: '@khencahyo13/notifin-react',
        headline: 'Alert dialog React yang cepat, tegas, dan mudah dipanggil.',
        subheadline:
            'Halaman ini menampilkan gambaran singkat Notifin, sementara referensi API dan tutorial lengkap tersedia di Docs.',
        packageLink: {
            href: 'https://www.npmjs.com/package/@khencahyo13/notifin-react',
            label: 'Lihat Package',
        },
        features: [
            {
                title: 'Function-first API',
                description:
                    'Panggil notif dari mana saja dengan satu baris, tanpa setup rumit.',
            },
            {
                title: 'Theme & Motion Ready',
                description:
                    'Mendukung dark/light scheme, motion preset, dan override tampilan.',
            },
            {
                title: 'Queue + Promise Helper',
                description:
                    'Kelola antrean dialog dan ikat state async lewat notifin.promise().',
            },
        ],
        usageSnippet,
        quickStartLabel: 'Quick Start',
        demoLabel: 'Live Demo',
    },
    en: {
        badge: '@khencahyo13/notifin-react',
        headline: 'Fast, assertive React alert dialogs with a simple API.',
        subheadline:
            'This page showcases Notifin, while complete API references and guides are available in Docs.',
        packageLink: {
            href: 'https://www.npmjs.com/package/@khencahyo13/notifin-react',
            label: 'View Package',
        },
        features: [
            {
                title: 'Function-first API',
                description:
                    'Trigger dialogs from anywhere with a single line of code.',
            },
            {
                title: 'Theme & Motion Ready',
                description:
                    'Built-in light/dark scheme support, motion presets, and theme overrides.',
            },
            {
                title: 'Queue + Promise Helper',
                description:
                    'Handle queued dialogs and async flow with notifin.promise().',
            },
        ],
        usageSnippet,
        quickStartLabel: 'Quick Start',
        demoLabel: 'Live Demo',
    },
};

export function getHomeData(locale: AppLocale): HomeData {
    const data = byLocale[locale];

    return {
        ...data,
        docsLink: {
            href: `/${locale}/docs`,
            label: locale === 'id' ? 'Buka Docs' : 'Open Docs',
        },
    };
}
