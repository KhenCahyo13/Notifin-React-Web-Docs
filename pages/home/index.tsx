'use client';

import { useCallback } from 'react';

import { notifin } from '@khencahyo13/notifin-react';

import type { AppLocale } from '@/i18n/routing';
import { getHomeData } from '@/pages/home/data';
import HomeView from '@/pages/home/view';

const Home = ({ locale }: { locale: AppLocale }) => {
    const homeData = getHomeData(locale);
    const isId = locale === 'id';

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

    return (
        <HomeView
            data={homeData}
            onSuccessDemo={showSuccessDemo}
            onErrorDemo={showErrorDemo}
            onPromiseDemo={showPromiseDemo}
        />
    );
};

export default Home;
