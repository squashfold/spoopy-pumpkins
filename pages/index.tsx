import React from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

const IntroPage: React.FC = () => {
  return (
    <>
    <Head>
      <title>Food Planet Game | Welcome</title>
      <meta name="description" content="A game to encourage eco-friendly food decisions" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${inter.className} ${styles.container}`} >
      <h1 className={styles.title}>Welcome to Food Planet Game</h1>
      <p className={styles.text}>
        We&apos;re on a mission to make eco-friendly decisions. Get ready to dive into an exciting game filled with yummy food choices! You&apos;ll be presented with two delicious options and it&apos;s your mission to choose the one with the lower carbon footprint. You&apos;ll have 10 seconds to make your decision. The more correct answers you rack up, the better! So, let&apos;s test your knowledge and see how many green points you can score!
      </p>
      <div className={styles.ctaRow}>
        <Link className="ctaButton" href="/game">
          Let&apos;s play
        </Link>
      </div>
    </main >
    </>
  );
};

export default IntroPage;
