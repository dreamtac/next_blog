'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/logo.png';

export default function HeaderComponent() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            {/* 헤더 영역 */}
            <div className="flex flex-row max-w-screen-xl w-full bg-white items-center justify-between px-4 mx-auto py-4 border-b border-black">
                {/* 모바일용 서랍 아이콘 */}
                <button onClick={() => setSideBarOpen(true)} className="md:hidden text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                        />
                    </svg>
                </button>

                {/* 로고 */}
                <Link href={'/'}>
                    <Image src={logo} alt="logo" className="h-14 md:h-16 lg:h-16 xl:h-20 w-auto" />
                </Link>

                {/* 검색 폼 */}
                <div className="hidden md:flex">
                    <form action="" className="flex flex-row gap-4">
                        <input type="text" placeholder="Search" className="border border-black text-black px-2" />
                        <button className="border border-black text-black">검색</button>
                    </form>
                </div>
            </div>

            {/* 오버레이 */}
            {sideBarOpen && (
                <div className="fixed inset-0 bg-black opacity-20 z-40" onClick={() => setSideBarOpen(false)} />
            )}

            {/* 사이드바 */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg h-full py-4 px-5 flex flex-col items-start border-r border-gray-400 transform transition-transform duration-300 ${
                    sideBarOpen ? 'translate-x-0' : '-translate-x-full'
                } *:text-black`}
            >
                <button onClick={() => setSideBarOpen(false)} className="mb-4">
                    ✕ 닫기
                </button>
                <ul className="space-y-4">
                    <li>전체 글 보기</li>
                    <li>일상</li>
                    <li>코딩 공부</li>
                    <li>포트폴리오</li>
                    <li>etc...</li>
                </ul>
            </div>
        </>
    );
}
