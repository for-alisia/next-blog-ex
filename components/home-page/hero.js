// @ts-nocheck
/** Components */
import Image from 'next/image';

/** Styles */
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/avatar.jpg"
          alt="Lena Ro Avatar"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>Hi, I'm Lena Ro</h1>
      <p>I blog about web development - especially frameworks like Angular and React</p>
    </section>
  );
};

export default Hero;
