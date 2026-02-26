const fallbackSiteUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Notifin React",
  description:
    "@khencahyo13/notifin-react, function-first alert dialog library for React.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, ""),
  githubUrl: "https://github.com/KhenCahyo13/Notifin",
  npmUrl: "https://www.npmjs.com/package/@khencahyo13/notifin-react",
};

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
