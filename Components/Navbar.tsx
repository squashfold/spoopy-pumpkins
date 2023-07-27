import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/high-scores">
                <button className={styles.highScoresButton}>High Scores</button>
            </Link>
        </nav>
    );
};

export default Navbar;
