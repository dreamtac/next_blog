import type { MDXComponents } from 'mdx/types';
// import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // h1: ({ children }) => <h1 style={{ color: 'black', fontSize: '48px' }}>{children}</h1>,
        // li: ({ children }) => <li style={{ color: 'red' }}>{children}</li>,
        // img: props => <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...(props as ImageProps)} />,
        ...components,
    };
}
