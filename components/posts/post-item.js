// @ts-nocheck
/** Components */
import Link from 'next/link';
import Image from 'next/image';

/** Styles */
import classes from './post-item.module.css';

const PostItem = ({ post: { title, image, excerpt, date, slug } }) => {
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
