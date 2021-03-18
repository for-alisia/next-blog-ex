// @ts-nocheck
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content', 'posts');

function getPostData(fileName) {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const slug = fileName.replace(/\.md$/, '');

  return { slug, ...data, content };
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
