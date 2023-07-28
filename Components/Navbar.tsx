import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navButton} href="/">Home</Link>
            <Link className={styles.navButton} href="/high-scores">High Scores</Link>
        </nav>
    );
};

export default Navbar;
