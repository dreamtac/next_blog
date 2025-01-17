'use client';
import Link from 'next/link';
// import { useState } from 'react';

interface Props {
    categoryParam: string;
}

export default function NavBar({ categoryParam }: Props) {
    if (categoryParam === '') {
        categoryParam = 'all';
    }
    const categories = ['All', 'Daily', 'Coding', 'Projects', 'etc'];
    // const [currentCategory, setCurrentCategory] = useState('All');

    return (
        <div className="bg-white text-black gap-12 p-4 pb-6 items-center justify-center hidden sm:flex dark:bg-slate-900 dark:text-slate-300">
            {categories.map(category => (
                <Link
                    key={category}
                    // href={'/blog'}
                    href={category.toLowerCase() === 'all' ? '/blog/all' : `/blog/${category.toLowerCase()}`}
                    className={`font-semibold border border-black dark:border-slate-300 px-3 py-1 rounded-md no-underline ${
                        categoryParam === category.toLowerCase() ? 'bg-black text-white dark:bg-gray-400' : ''
                    }`}
                >
                    {category}
                </Link>
            ))}
        </div>
    );
}
