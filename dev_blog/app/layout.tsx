import HeaderComponent from '@/components/header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center bg-white h-full`}
            >
                <div className="flex flex-col items-center justify-center w-full max-w-screen-xl">
                    <HeaderComponent />
                    <div className="w-full px-4">{children}</div>
                </div>
            </body>
        </html>
    );
}
