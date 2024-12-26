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
        <div className="bg-white text-black gap-12 p-4 items-center justify-center hidden md:flex">
            {categories.map(category => (
                <Link
                    key={category}
                    // href={'/blog'}
                    href={`/blog/${category.toLowerCase()}`}
                    className={`font-semibold border border-black px-3 py-1 rounded-md ${
                        categoryParam === category.toLowerCase() ? 'bg-black text-white' : ''
                    }`}
                    onClick={() => {
                        // setCurrentCategory(category);
                    }}
                >
                    {category}
                </Link>
            ))}
        </div>
    );
}
