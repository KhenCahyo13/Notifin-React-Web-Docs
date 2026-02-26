import Home from "@/pages/home";
import type { AppLocale } from "@/i18n/routing";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return <Home locale={locale} />;
}
