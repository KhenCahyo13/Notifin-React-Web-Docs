'use client';

import { Notifin } from '@khencahyo13/notifin-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import type { HomeViewProps } from '@/pages/home/types';
import { FC, memo } from 'react';
import Link from 'next/link';

const HomeView: FC<HomeViewProps> = ({
    data,
    onErrorDemo,
    onPromiseDemo,
    onSuccessDemo,
}) => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(130deg,#f2f7ff_0%,#eefcf9_55%,#fff9ef_100%)]">
            <Notifin motion="slide" colorScheme="system" />

            <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-10">
                <Card>
                    <CardHeader className="gap-4">
                        <Badge
                            variant="outline"
                            className="uppercase text-muted-foreground"
                        >
                            {data.badge}
                        </Badge>
                        <CardTitle className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
                            {data.headline}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-3">
                        <Button asChild>
                            <Link
                                href={data.packageLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {data.packageLink.label}
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href={data.docsLink.href}>
                                {data.docsLink.label}
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                <section className="grid gap-4 md:grid-cols-3">
                    {data.features.map((item) => (
                        <Card key={item.title}>
                            <CardHeader className="gap-2">
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                                    {item.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </section>

                <section className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
                    <Card>
                        <CardHeader>
                            <CardDescription className="text-[12px] font-semibold tracking-[0.14em] uppercase">
                                {data.quickStartLabel}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <pre className="overflow-x-auto text-xs leading-relaxed md:text-sm">
                                <code>{data.usageSnippet}</code>
                            </pre>
                        </CardContent>
                    </Card>

                    <Card className="h-fit">
                        <CardHeader>
                            <CardDescription className="text-[12px] font-semibold tracking-[0.14em] uppercase">
                                {data.demoLabel}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-3">
                            <Button
                                onClick={onSuccessDemo}
                                className="bg-emerald-600 text-white hover:bg-emerald-500"
                            >
                                Trigger Success
                            </Button>
                            <Button
                                onClick={onErrorDemo}
                                className="bg-rose-600 text-white hover:bg-rose-500"
                            >
                                Trigger Error
                            </Button>
                            <Button
                                onClick={onPromiseDemo}
                                className="bg-sky-600 text-white hover:bg-sky-500"
                            >
                                Trigger Promise Flow
                            </Button>
                        </CardContent>
                    </Card>
                </section>

                <footer className="text-center text-sm text-muted-foreground">
                    by <span className="font-medium">Khen Cahyo</span>
                </footer>
            </main>
        </div>
    );
};

export default memo(HomeView);
