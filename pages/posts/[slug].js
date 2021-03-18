/** Components */
import PostContent from '../../components/posts/post-detail/post-content';

/** Utils */
import { getPostsPaths, getPostBySlug } from '../../helpers/posts-util';

const PostPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticPaths() {
  return {
    paths: getPostsPaths().map((path) => ({
      params: {
        slug: path,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export default PostPage;
