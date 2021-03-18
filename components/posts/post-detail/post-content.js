// @ts-nocheck

/** Dependencies */
import ReactMarkdown from 'react-markdown';

/** Components */
import PostHeader from './post-header';

/** Styles */
import classes from './post-content.module.css';

const PostContent = ({ post: { title, slug, image, content } }) => {
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
