import Toc from '@/components/toc';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex justify-center w-full px-4">
            <div className="prose max-w-3xl w-full">{children}</div>
            <div className="hidden lg:block">
                <Toc />
            </div>
        </div>
    );
}
