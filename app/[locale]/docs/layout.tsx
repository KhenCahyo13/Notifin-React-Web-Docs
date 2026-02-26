import type { ReactNode } from 'react';

import { hasLocale } from 'next-intl';
import Image from 'next/image';
import { getPageMap } from 'nextra/page-map';
import { Layout, Navbar } from 'nextra-theme-docs';
import { notFound } from 'next/navigation';
import 'nextra-theme-docs/style.css';

import { routing } from '@/i18n/routing';

export default async function DocsLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const pageMap = await getPageMap(`/${locale}/docs`);

    return (
        <Layout
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/KhenCahyo13/Notifin/tree/main"
            navbar={
                <Navbar
                    logo={
                        <span className="inline-flex items-center">
                            <Image
                                src="/notifin-mark-light.svg"
                                alt="Notifin React"
                                width={30}
                                height={30}
                                className="dark:hidden"
                                priority
                            />
                            <Image
                                src="/notifin-mark-dark.svg"
                                alt="Notifin React"
                                width={30}
                                height={30}
                                className="hidden dark:block"
                                priority
                            />
                        </span>
                    }
                    projectLink="https://github.com/KhenCahyo13/Notifin"
                />
            }
            i18n={[
                { locale: 'id', name: 'Bahasa Indonesia' },
                { locale: 'en', name: 'English' },
            ]}
            sidebar={{
                autoCollapse: true,
                defaultMenuCollapseLevel: 1,
            }}
        >
            {children}
        </Layout>
    );
}
