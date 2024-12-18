export default function SidebarComponent({ onClose }: { onClose: () => void }) {
    return (
        <div className="flex flex-col h-full">
            {/* 모바일에서만 보이는 닫기 버튼 */}
            <button onClick={onClose} className="lg:hidden self-end mb-4">
                ✕
            </button>
            <ul className="space-y-4">
                <li>일상</li>
                <li>코딩 공부</li>
                <li>포트폴리오</li>
                <li>etc...</li>
                <li>전체 글 보기</li>
            </ul>
            <div className="mt-8 text-sm text-gray-600">
                모든 게시물을 볼 수 있는
                <br />
                일정의 네비게이션 바<p>(어떤 페이지를 가든 사라지지 않음)</p>
            </div>
        </div>
    );
}
