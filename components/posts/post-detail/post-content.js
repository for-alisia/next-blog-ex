// @ts-nocheck

/** Dependencies */
import ReactMarkdown from 'react-markdown';

/** Components */
import PostHeader from './post-header';

/** Styles */
import classes from './post-content.module.css';

const DUMMY_POST = {
  title: 'Getting started with NextJS',
  slug: 'getting-started-with-nextjs',
  date: '2022-02-10',
  content: '# This is a first post',
  image: 'getting-started-nextjs.png',
};

const PostContent = () => {
  const imgPath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imgPath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
