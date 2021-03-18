/** Components */
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

/** Utils */
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = ({ posts }) => {
  return (
    <>
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
