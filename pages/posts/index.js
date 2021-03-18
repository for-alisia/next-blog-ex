/** Components */
import AllPosts from '../../components/posts/all-posts';

/** Utils */
import { getAllPosts } from '../../helpers/posts-util';

const PostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
