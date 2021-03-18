/** Components */
import PostContent from '../../components/posts/post-detail/post-content';

/** Utils */
import { getPostsPaths, getPostBySlug } from '../../helpers/posts-util';

const PostPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticPaths() {
  const postsPaths = getPostsPaths();

  const pathParams = postsPaths.map((path) => ({
    params: {
      slug: path,
    },
  }));

  return {
    paths: pathParams,
    fallback: false,
  };
}

export function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug);

  return {
    props: {
      post,
    },
  };
}

export default PostPage;
