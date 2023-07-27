import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/leaderboard">
                <button className={styles.leaderboardButton}>High Scores</button>
            </Link>
        </nav>
    );
};

export default Navbar;
