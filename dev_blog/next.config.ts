import nextMDX from '@next/mdx';
import type { NextConfig } from 'next';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */
const options = {
    // See Options section below.
    keepBackground: false,
    theme: 'rose-pine',
};

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [[rehypePrettyCode, options]],
    },
});

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    /* 추가 설정 가능 */
};

export default withMDX(nextConfig);
