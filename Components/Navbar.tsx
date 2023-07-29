import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import styles from '../styles/Navbar.module.css';

const inter = Inter({ subsets: ['latin'] });

const Navbar: React.FC = () => {
    const router = useRouter();
    const isEndPage = router.pathname === '/end';

    return (
        <nav className={`${styles.navbar} ${inter.className}`}>
            <Link className={styles.navButton} href="/">Home</Link>
            <Link
                className={`${styles.navButton} ${isEndPage ? styles.hithere : ''}`}
                href="/high-scores">
                High Scores
            </Link>
        </nav>
    );
};

export default Navbar;
