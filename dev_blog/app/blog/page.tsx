import NavBar from '@/components/nav_bar';
import { PostList } from '@/components/post_list';
import { getPosts } from '@/lib/post';

export default async function BlogHome() {
    const posts = await getPosts('all');
    return (
        <div className="w-full">
            <NavBar categoryParam="" />
            <PostList posts={posts} />
        </div>
    );
}
