import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    light: '#FFFFFF', // 밝은 배경
                    dark: '#111827', // 어두운 배경
                },
                text: {
                    light: '#1F2937', // 밝은 텍스트
                    dark: '#F3F4F6', // 어두운 텍스트
                },
                border: {
                    light: '#E5E7EB', // 밝은 테두리
                    dark: '#374151', // 어두운 테두리
                },
                foreground: 'var(--foreground)',
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('@tailwindcss/typography')],
} satisfies Config;
