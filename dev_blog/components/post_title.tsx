export default function PostTitle({ title, date }: { title: string; date: string }) {
    // 날짜를 원하는 형식으로 변환
    const formattedDate = new Date(date).toISOString().slice(0, 10).replace(/-/g, '-');

    return (
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</p>
        </div>
    );
}
