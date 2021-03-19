/** Components */
import AllPosts from '../../components/posts/all-posts';
import Head from 'next/head';

/** Utils */
import { getAllPosts } from '../../helpers/posts-util';

const PostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts Page</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
}

export default PostsPage;
