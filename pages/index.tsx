import React from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const IntroPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to GameName</h1>
        <p className={styles.text}>
          Embark on a delicious adventure to save the planet! In GameName, you get to pick your favorite foods and
          explore their carbon footprints. Discover which food choices are the greenest and which ones leave the biggest
          carbon pawprints. The fate of the world is in your hands, or rather, on your plate!
        </p>
        <Link className={styles.ctaButtonWrap} href="/game">
          <button className={styles.ctaButton}>Let's play</button>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
