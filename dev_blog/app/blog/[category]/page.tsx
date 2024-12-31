import NavBar from '@/components/nav_bar';
import { PostList } from '@/components/post_list';
import { getPosts } from '@/lib/post';
export default async function CategoryHome({ params }: { params: { category: string } }) {
    const { category } = await params;
    const posts = await getPosts(category);
    return (
        <div>
            <NavBar categoryParam={`${category}`} />
            <PostList posts={posts} />
        </div>
    );
}
