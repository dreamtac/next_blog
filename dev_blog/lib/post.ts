import { Post } from '@/types';
import { readdir } from 'fs/promises';
import path from 'path';

export async function getPosts(category: string): Promise<Post[]> {
    const postDir = path.join(process.cwd(), 'app', '(posts)');
    const slugs = (await readdir(postDir, { withFileTypes: true })).filter(dirent => dirent.isDirectory());

    const posts = (
        await Promise.all(
            slugs.map(async ({ name }) => {
                const { metadata } = await import(`../app/(posts)/${name}/page.mdx`);
                if (
                    category !== 'all' &&
                    !metadata.categories.map((cat: string) => cat.toLowerCase()).includes(category.toLowerCase())
                ) {
                    return null; // 조건에 맞지 않으면 null 반환
                }
                return { slug: name, ...metadata };
            })
        )
    ).filter(Boolean); // null 또는 undefined 제거

    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
    return posts;
}
