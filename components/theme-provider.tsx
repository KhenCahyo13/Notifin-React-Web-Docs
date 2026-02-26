'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function AppThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
        >
            {children}
        </ThemeProvider>
    );
}
