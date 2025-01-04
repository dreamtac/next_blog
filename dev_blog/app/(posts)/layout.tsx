export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="prose max-w-3xl">{children}</div>
        </div>
    );
}
