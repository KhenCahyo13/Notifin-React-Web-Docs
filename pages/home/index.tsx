'use client';

import { useCallback } from 'react';

import { notifin } from '@khencahyo13/notifin';

import { homeData } from '@/pages/home/data';
import HomeView from '@/pages/home/view';

const Home = () => {
    const showPromiseDemo = useCallback(async () => {
        await notifin.promise(
            new Promise((resolve) => setTimeout(() => resolve('ok'), 1400)),
            {
                loading: {
                    title: 'Menyimpan konfigurasi...',
                    description: 'Mohon tunggu sebentar',
                },
                success: () => 'Konfigurasi berhasil disimpan',
                error: () => 'Gagal menyimpan konfigurasi',
            }
        );
    }, []);

    const showSuccessDemo = useCallback(() => {
        notifin.success('Deploy berhasil', {
            description: 'Build production selesai tanpa error.',
        });
    }, []);

    const showErrorDemo = useCallback(() => {
        notifin.error('Deploy gagal', {
            description: 'Periksa env var di pipeline CI.',
        });
    }, []);

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
