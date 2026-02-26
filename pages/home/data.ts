import type { HomeData } from '@/pages/home/types';

export const homeData: HomeData = {
    badge: '@khencahyo13/notifin-react',
    headline: 'Alert dialog React yang cepat, tegas, dan mudah dipanggil.',
    subheadline:
        'Halaman ini menampilkan gambaran singkat Notifin, sementara referensi API dan tutorial lengkap tersedia di Docs.',
    packageLink: {
        href: 'https://www.npmjs.com/package/@khencahyo13/notifin-react',
        label: 'Lihat Package',
    },
    docsLink: {
        href: '/docs',
        label: 'Buka Docs',
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
    usageSnippet: `import { Notifin, notifin } from "@khencahyo13/notifin-react";

export default function App() {
  return (
    <>
      <Notifin motion="subtle" colorScheme="system" />
      <button onClick={() => notifin.success("Profile updated")}>
        Trigger
      </button>
    </>
  );
}`,
    quickStartLabel: 'Quick Start',
    demoLabel: 'Live Demo',
};
