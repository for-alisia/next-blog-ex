// @ts-nocheck
/** Components */
import Logo from './logo';
import Link from 'next/link';

/** Styles */
import classes from './main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
