import { type Post } from '@/types';
import PostCard from './post_card';

export function PostList({ posts }: { posts: Post[] }) {
    return (
        <ol className="text-black px-3">
            {posts.map(({ slug, title, publishDate, categories }) => (
                <PostCard key={slug} post={{ slug, title, publishDate, categories }} />
            ))}
        </ol>
    );
}
