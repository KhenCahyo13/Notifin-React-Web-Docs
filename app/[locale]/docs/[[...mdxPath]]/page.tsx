import type { Metadata } from 'next';

import { hasLocale } from 'next-intl';
import { importPage } from 'nextra/pages';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { getAbsoluteUrl } from '@/lib/seo';
import { useMDXComponents as getMDXComponents } from '@/mdx-components';

type DocsPageProps = {
    params: Promise<{
        locale: string;
        mdxPath?: string[];
    }>;
};

export async function generateMetadata(
    props: DocsPageProps
): Promise<Metadata> {
    const params = await props.params;

    if (!hasLocale(routing.locales, params.locale)) {
        notFound();
    }

    const mdxPath = params.mdxPath ?? [];
    const path = mdxPath.length
        ? `/${params.locale}/docs/${mdxPath.join('/')}`
        : `/${params.locale}/docs`;
    const { metadata } = await importPage(['docs', ...mdxPath], params.locale);
    const ogLocale = params.locale === 'id' ? 'id_ID' : 'en_US';

    return {
        ...metadata,
        alternates: {
            ...(metadata.alternates ?? {}),
            canonical: path,
            languages: {
                id: '/id/docs',
                en: '/en/docs',
                'x-default': '/id/docs',
            },
        },
        openGraph: {
            ...(metadata.openGraph ?? {}),
            type: 'article',
            url: getAbsoluteUrl(path),
            locale: ogLocale,
        },
    };
}

export default async function DocsPage(props: DocsPageProps) {
    const params = await props.params;

    if (!hasLocale(routing.locales, params.locale)) {
        notFound();
    }

    const mdxPath = params.mdxPath ?? [];
    const {
        default: MDXContent,
        metadata,
        toc,
    } = await importPage(['docs', ...mdxPath], params.locale);
    const { wrapper: Wrapper } = getMDXComponents();

    if (!Wrapper) {
        return <MDXContent {...props} params={params} />;
    }

    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    );
}
