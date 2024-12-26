// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import readingTime from 'reading-time';
// import dayjs from 'dayjs';

// const BASE_PATH = '../posts';
// const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// // Mdx 파싱: abstract / detail 구분
// const parsePost = async (postPath: string): Promise<Post> => {
//     const postAbstract = parsePostAbstract(postPath);
//     const postDetail = await parsePostDetail(postPath);
//     return { ...postAbstract, ...postDetail };
//   };

// // mdx Abstract
// export const parsePostAbstract = (postPath: string) => {
//     const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '');

//     const [category, slug] = filePath.split('/');

//     const url = `/blog/${category}/${slug}`;

//     return { url, category, slug };
// };

// // mdx Detail
// const parsePostDetail = async (postPath: string)=>{
//     const file = fs.readFileSync(postPath, 'utf-8');
//     const {data, content} = matter(file);
//     const grayMatter = data as PostMatter;
//     const readingMinutes = Math.ceil(readingTime(content).minutes);
//     const dateString = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일');
//     return {...grayMatter, dateString, content, readingMinutes};

// }

import { readdir } from 'fs/promises';
import path from 'path';

interface Post {
    slug: string;
    title: string;
    publishDate: string;
}

export async function getPosts(): Promise<Post[]> {
    const postDir = path.join(process.cwd(), 'app', '(posts)');
    const slugs = (await readdir(postDir, { withFileTypes: true })).filter(dirent => dirent.isDirectory());

    const posts = await Promise.all(
        slugs.map(async ({ name }) => {
            const { metadata } = await import(`../app/(posts)/${name}/page.mdx`);
            return { slug: name, ...metadata };
        })
    );

    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
    return posts;
}

// export async function getPosts(): Promise<Post[]> {
//     const postPath = path.resolve(process.cwd(), 'src', 'app', 'blog', '(posts)');
//     const slugs = (await readdir(postPath, { withFileTypes: true })).filter(dirent => dirent.isDirectory());

//     const posts = await Promise.all(
//         slugs.map(async ({ name }) => {
//             const { metadata } = await import(`../app/blog/(posts)/${name}/page.mdx`);
//             return { slug: name, ...metadata };
//         })
//     );

//     posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

//     return posts;
// }
