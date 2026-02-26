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

async function loadDocsPage(locale: string, mdxPath: string[]) {
    return importPage([locale, 'docs', ...mdxPath]);
}

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
    const { metadata } = await loadDocsPage(params.locale, mdxPath);
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
    const result = await loadDocsPage(params.locale, mdxPath);
    const { default: MDXContent, ...wrapperProps } = result;
    const { wrapper: Wrapper } = getMDXComponents();

    if (!Wrapper) {
        return <MDXContent {...props} params={params} />;
    }

    return (
        <Wrapper {...wrapperProps}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    );
}
