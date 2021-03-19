// @ts-nocheck

/** Dependencies */
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

/** Components */
import PostHeader from './post-header';
import Image from 'next/image';

/** Styles */
import classes from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = ({ post: { title, slug, image, content } }) => {
  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image src={image.url} alt={image.alt} width={600} height={300} />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return <SyntaxHighlighter language={language} children={value} style={atomDark} />;
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
      <ReactMarkdown renderers={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
