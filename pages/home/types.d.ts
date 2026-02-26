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
    onErrorDemo: () => void;
    onPromiseDemo: () => Promise<void>;
    onSuccessDemo: () => void;
}
