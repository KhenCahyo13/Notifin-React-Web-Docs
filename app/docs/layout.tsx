import type { ReactNode } from 'react';

import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';

export default async function DocsLayout({
    children,
}: {
    children: ReactNode;
}) {
    const pageMap = await getPageMap('/docs');

    return (
        <Layout
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/KhenCahyo13/Notifin/tree/main"
            navbar={
                <Navbar
                    logo={<strong>Notifin</strong>}
                    projectLink="https://github.com/KhenCahyo13/Notifin"
                />
            }
            footer={
                <Footer>
                    <span>by Khen Cahyo</span>
                </Footer>
            }
            sidebar={{
                autoCollapse: true,
                defaultMenuCollapseLevel: 1,
            }}
        >
            {children}
        </Layout>
    );
}
