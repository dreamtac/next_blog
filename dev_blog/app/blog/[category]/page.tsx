import NavBar from '@/components/nav_bar';
import { PostList } from '@/components/post_list';
import { getPosts } from '@/lib/post';
import { notFound } from 'next/navigation';
export default async function CategoryHome({ params }: { params: { category: string } }) {
    const { category } = await params;
    const posts = await getPosts(category);
    const validCategories = ['all', 'coding', 'daily', 'projects', 'etc'];
    if (!validCategories.includes(category)) {
        return notFound();
    }
    return (
        <div>
            <NavBar categoryParam={`${category}`} />
            <PostList posts={posts} />
        </div>
    );
}
