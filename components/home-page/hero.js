// @ts-nocheck
/** Components */
import Image from 'next/image';

/** Styles */
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.image}>
            <Image src="/images/avatar.jpg" alt="Lena Ro Avatar" width={500} height={500} />
          </div>
          <div className={classes.content}>
            <h1>Lena Ro: JS developer</h1>
            <p>
              I like to learn and discover new technologies. This blog is an example of using React
              with NextJS;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
