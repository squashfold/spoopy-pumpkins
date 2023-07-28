import React, { useEffect, useState } from 'react';
import styles from '@/styles/HighScores.module.css';

interface scoreEntry {
    score: number;
    datetime: string;
}

const HighScores: React.FC = () => {

    const [scores, setScores] = useState<scoreEntry[]>([]);

    // Helper function to format the datetime in a human-readable format
    const formatDate = (datetime: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(datetime).toLocaleString(undefined, options);
    };

    useEffect(() => {
        const existingScores = JSON.parse(localStorage.getItem('scores') || '[]');
        // extract the 20 more recent scores
        const last20Scores = existingScores.reverse().slice(0, 20);
        setScores(last20Scores);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>HighScores</h1>
                <table className={styles.scores}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{`${entry.score} ${entry.score === 1 ? 'Point' : 'Points'}`}</td>
                                <td>{formatDate(entry.datetime)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HighScores;
