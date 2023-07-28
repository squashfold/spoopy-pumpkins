import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.leaderboardButton} href="/leaderboard">High Scores</Link>
    </nav>
  );
};

export default Navbar;
