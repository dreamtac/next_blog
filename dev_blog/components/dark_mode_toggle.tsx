'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('theme') === 'dark';
        setIsDarkMode(darkMode);

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button onClick={toggleTheme} className="p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
