import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '../styles/Navbar.module.css';

const inter = Inter({ subsets: ['latin'] });

const Navbar: React.FC = () => {
    return (
      <nav className={`${styles.navbar} ${inter.className}`}>
            <Link className={styles.navButton} href="/">Home</Link>
            <Link className={styles.navButton} href="/high-scores">High Scores</Link>
        </nav>
    );
};

export default Navbar;
