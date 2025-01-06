'use client';

import { useEffect, useState } from 'react';

const Toc = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log(entry.target.id);
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0% 0% -80% 0%' }
        );

        const elements = document.querySelectorAll('h2, h3');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <nav>
            <ul>
                <li className={activeId === 'section1' ? 'active' : ''}>
                    <a href="#section1">Section 1</a>
                </li>
                <li className={activeId === 'section2' ? 'active' : ''}>
                    <a href="#section2">Section 2</a>
                </li>
                {/* Add more sections as needed */}
            </ul>
            <style jsx>{`
                .active {
                    font-weight: bold;
                }
            `}</style>
        </nav>
    );
};

export default Toc;
