import { type Post } from '@/types';
import PostCard from './post_card';

export function PostList({ posts }: { posts: Post[] }) {
    return (
        <ol className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map(({ slug, title, publishDate, categories }) => (
                <PostCard key={slug} post={{ slug, title, publishDate, categories }} />
            ))}
        </ol>
    );
}
