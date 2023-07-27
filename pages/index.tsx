import React from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const IntroPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to GameName</h1>
        <p className={styles.text}>
          We&apos;re on a mission to make eco-friendly decisions. Get ready to dive into an exciting game filled with yummy food choices! You&apos;ll be presented with two delicious options and it&apos;s your mission to choose the one with the lower carbon footprint. You&apos;ll have 10 seconds to make your decision. The more correct answers you rack up, the better! So, let&apos;s test your knowledge and see how many green points you can score!
        </p>
        <Link className="ctaButtonWrap" href="/game">
          <button className="ctaButton">Let&apos;s play</button>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
