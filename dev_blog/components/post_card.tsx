import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function PostCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="square border border-gray-200 p-4 mb-4">
                <div className="h-20 mb-4 relative">
                    <Image src={logo} alt="image" fill className="object-cover" />
                </div>
                <h2>{post.title}</h2>
                <p>
                    <strong>Published:</strong> {new Date(post.publishDate).toLocaleDateString()}{' '}
                    <strong>Categories:</strong> {post.categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
                </p>
            </div>
        </Link>
    );
}
