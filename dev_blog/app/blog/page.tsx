import NavBar from '@/components/nav_bar';
import { PostList } from '@/components/post_list';
import { getPosts } from '@/lib/post';

export default async function BlogHome() {
    const posts = await getPosts();
    return (
        <div>
            <NavBar categoryParam="" />
            {/* <First /> */}
            <PostList posts={posts} />
        </div>
    );
    // return redirect('/blog/all');
}
