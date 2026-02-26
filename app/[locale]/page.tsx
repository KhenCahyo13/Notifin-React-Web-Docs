import Home from "@/pages/home";
import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { getAbsoluteUrl, siteConfig } from "@/lib/seo";

const localeMeta = {
  id: {
    title: "Notifin React - Home",
    description:
      "Landing page showcase untuk @khencahyo13/notifin-react dengan demo penggunaan langsung.",
    ogLocale: "id_ID",
  },
  en: {
    title: "Notifin React - Home",
    description:
      "Landing showcase for @khencahyo13/notifin-react with live usage demos.",
    ogLocale: "en_US",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMeta[locale];
  const path = `/${locale}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      languages: {
        id: "/id",
        en: "/en",
        "x-default": "/id",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: getAbsoluteUrl(path),
      locale: meta.ogLocale,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: getAbsoluteUrl(`/${locale}`),
    inLanguage: locale,
    softwareVersion: "1.x",
    sameAs: [siteConfig.githubUrl, siteConfig.npmUrl],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home locale={locale} />
    </>
  );
}
