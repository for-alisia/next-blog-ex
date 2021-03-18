import AllPosts from '../../components/posts/all-posts';

import { DUMMY_POSTS } from '../index';

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
