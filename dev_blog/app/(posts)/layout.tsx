import Toc from '@/components/toc';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="flex justify-center min-h-screen">
                <div className="prose max-w-3xl w-full px-4">{children}</div>
            </div>

            <Toc />
        </div>
    );
}
