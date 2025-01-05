import nextMDX from '@next/mdx';
import type { NextConfig } from 'next';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const rehypePrettyCodeOptions = {
    // See Options section below.
    keepBackground: true,
    theme: 'min-dark',
    // transformers: [
    //     transformerCopyButton({
    //         visibility: 'always',
    //         feedbackDuration: 3000,
    //     }),
    // ],
};

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions], rehypeSlug],
    },
});

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    /* 추가 설정 가능 */
};

export default withMDX(nextConfig);
