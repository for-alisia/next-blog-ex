/** Components */
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import Head from 'next/head';

/** Utils */
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>LENARO Blog</title>
        <meta name="description" content="Example of NextJS Blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const posts = getFeaturedPosts();
  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
}

export default HomePage;
