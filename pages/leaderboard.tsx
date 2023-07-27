import React from 'react';
import styles from '@/styles/Leaderboard.module.css';

const Leaderboard: React.FC = () => {
    const leaderboardData = [
        { name: 'John Doe', score: 100 },
        { name: 'Jane Smith', score: 90 },
        { name: 'Michael Johnson', score: 85 },
        { name: 'Sarah Brown', score: 80 },
        { name: 'David Lee', score: 78 },
        { name: 'Emily Davis', score: 75 },
        { name: 'Robert Wilson', score: 70 },
        { name: 'Olivia Anderson', score: 65 },
        { name: 'William Martin', score: 60 },
        { name: 'Sophia White', score: 55 },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Leaderboard</h1>
                <table className={styles.leaderboard}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.name}</td>
                                <td>{entry.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
