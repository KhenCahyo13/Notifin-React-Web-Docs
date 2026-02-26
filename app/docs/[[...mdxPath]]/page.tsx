import type { Metadata } from "next";

import { generateStaticParamsFor, importPage } from "nextra/pages";

import { useMDXComponents as getMDXComponents } from "@/mdx-components";

type DocsPageProps = {
  params: Promise<{
    mdxPath?: string[];
  }>;
};

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(
  props: DocsPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const mdxPath = params.mdxPath ?? [];
  const { metadata } = await importPage(["docs", ...mdxPath]);

  return metadata;
}

export default async function DocsPage(props: DocsPageProps) {
  const params = await props.params;
  const mdxPath = params.mdxPath ?? [];
  const { default: MDXContent, metadata, toc } = await importPage([
    "docs",
    ...mdxPath,
  ]);
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
