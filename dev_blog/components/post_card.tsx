import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function PostCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="rounded-md border-2 border-border-light dark:border-border-dark p-4 mb-4 dark:bg-background-dark bg-background-light">
                <div className="h-20 mb-4 relative">
                    <Image src={logo} alt="image" fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg dark:text-text-dark text-text-light">{post.title}</h2>
                    <div className="flex text-gray-500 gap-5">
                        <p>
                            <strong>게시일:</strong> {new Date(post.publishDate).toLocaleDateString()}{' '}
                        </p>
                        <p>
                            <strong>카테고리:</strong> {post.categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
