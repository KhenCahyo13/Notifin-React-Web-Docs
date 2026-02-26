'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import { notifin } from '@khencahyo13/notifin-react';

import type { AppLocale } from '@/i18n/routing';
import { getHomeData } from '@/pages/home/data';
import HomeView from '@/pages/home/view';

const Home = ({ locale }: { locale: AppLocale }) => {
    const homeData = getHomeData(locale);
    const isId = locale === 'id';
    const router = useRouter();
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const theme: 'light' | 'dark' = resolvedTheme === 'dark' ? 'dark' : 'light';

    const showPromiseDemo = useCallback(async () => {
        await notifin.promise(
            new Promise((resolve) => setTimeout(() => resolve('ok'), 1400)),
            {
                loading: {
                    title: isId
                        ? 'Menyimpan konfigurasi...'
                        : 'Saving configuration...',
                    description: isId ? 'Mohon tunggu sebentar' : 'Please wait',
                },
                success: () =>
                    isId
                        ? 'Konfigurasi berhasil disimpan'
                        : 'Configuration saved successfully',
                error: () =>
                    isId
                        ? 'Gagal menyimpan konfigurasi'
                        : 'Failed to save configuration',
            }
        );
    }, [isId]);

    const showSuccessDemo = useCallback(() => {
        notifin.success(isId ? 'Deploy berhasil' : 'Deploy succeeded', {
            description: isId
                ? 'Build production selesai tanpa error.'
                : 'Production build completed without errors.',
        });
    }, [isId]);

    const showErrorDemo = useCallback(() => {
        notifin.error(isId ? 'Deploy gagal' : 'Deploy failed', {
            description: isId
                ? 'Periksa env var di pipeline CI.'
                : 'Check environment variables in your CI pipeline.',
        });
    }, [isId]);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [setTheme, theme]);

    const toggleLocale = useCallback(() => {
        const nextLocale = locale === 'id' ? 'en' : 'id';
        const nextPath = pathname?.replace(
            /^\/(id|en)(?=\/|$)/,
            `/${nextLocale}`
        );

        router.push(nextPath || `/${nextLocale}`);
    }, [locale, pathname, router]);

    return (
        <HomeView
            data={homeData}
            locale={locale}
            theme={theme}
            onToggleLocale={toggleLocale}
            onToggleTheme={toggleTheme}
            onSuccessDemo={showSuccessDemo}
            onErrorDemo={showErrorDemo}
            onPromiseDemo={showPromiseDemo}
        />
    );
};

export default Home;
