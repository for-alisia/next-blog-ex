/** Components */
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

export const DUMMY_POSTS = [
  {
    title: 'Getting started with NextJS',
    slug: 'getting-started-with-nextjs',
    date: '2022-02-10',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React app with a SSR',
    image: 'getting-started-nextjs.png',
  },
  {
    title: 'CSS-in-JS with Styled Components',
    slug: 'css-in-js-with-styled-components',
    date: '2022-11-04',
    excerpt:
      'Modern way to write CSS is to do it directly in your component. Add Styled Components to your project',
    image: 'css-in-js.png',
  },
  {
    title: 'State management in React: Redux, MobX or Context API?',
    slug: 'state-management-in-react-redux-mobx-or-context-api',
    date: '2022-06-08',
    excerpt:
      'How to handle a state in your React App? Pros and cons of the most popular ways to do it.',
    image: 'react-state-management.png',
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
