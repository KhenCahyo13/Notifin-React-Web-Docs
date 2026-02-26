export interface HomeFeature {
    description: string;
    title: string;
}

export interface HomeLink {
    href: string;
    label: string;
}

export interface HomeData {
    badge: string;
    demoLabel: string;
    docsLink: HomeLink;
    features: HomeFeature[];
    headline: string;
    packageLink: HomeLink;
    quickStartLabel: string;
    subheadline: string;
    usageSnippet: string;
}

export interface HomeViewProps {
    data: HomeData;
    locale: "id" | "en";
    theme: "light" | "dark";
    onToggleLocale: () => void;
    onToggleTheme: () => void;
    onErrorDemo: () => void;
    onPromiseDemo: () => Promise<void>;
    onSuccessDemo: () => void;
}
