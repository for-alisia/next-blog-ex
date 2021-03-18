// @ts-nocheck

/** Styles */
import classes from './all-posts.module.css';

/** Components */
import PostsGrid from './posts-grid';

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
