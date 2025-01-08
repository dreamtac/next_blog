'use client';

import { useEffect, useState } from 'react';

const Toc = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [elements, setElements] = useState<Element[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0% 0% -90% 0%', // 하단 마진을 조금 더 줄임
                threshold: 0.1, // 요소가 뷰포트의 10%에 진입할 때 활성화
            }
        );

        const elements = Array.from(document.querySelectorAll('h2, h3'));
        setElements(elements);
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="hidden lg:block lg:fixed top-1/4 right-5 w-48 overflow-y-auto bg-gray-100 border border-gray-300 rounded-lg">
            <ul>
                {elements.map(el => (
                    <li key={el.id}>
                        <a href={`#${el.id}`} className={activeId === el.id ? 'text-red-500' : ''}>
                            {el.textContent}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Toc;
