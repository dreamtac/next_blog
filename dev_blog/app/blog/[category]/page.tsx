import NavBar from '@/components/nav_bar';
export default async function CategoryHome({ params }: { params: { category: string } }) {
    const { category } = await params;
    return (
        <div>
            <NavBar categoryParam={`${category}`} />
            <h1>{category}</h1>
        </div>
    );
}
