import type { NextConfig } from "next";
import nextra from "nextra";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const withNextra = nextra({
  search: {
    codeblocks: false,
  },
});

const nextConfig: NextConfig = {
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
  },
};

export default withNextra(withNextIntl(nextConfig));
