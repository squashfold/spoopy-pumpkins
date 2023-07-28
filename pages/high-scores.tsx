import React, { useEffect, useState } from 'react';
import styles from '@/styles/HighScores.module.css';

interface scoreEntry {
    index: number;
    score: number;
    datetime: string;
}

const HighScores: React.FC = () => {

    const [scores, setScores] = useState<scoreEntry[]>([]);
    const [lastScore, setLastScore] = useState<scoreEntry | null>(null);

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
        const lastScore = existingScores[existingScores.length - 1];
        existingScores.sort((a: scoreEntry, b: scoreEntry) => b.score - a.score);
        existingScores.forEach((score: scoreEntry, index: number) => {
            score.index = index + 1;
        });
        const last20Scores = existingScores.slice(0, 20);
        setScores(last20Scores);
        // Add newest score at the bottom if it's not already in the top 20
        if (!last20Scores.some((score: scoreEntry) => score.score === lastScore.score)) {
            setScores((scores) => [...scores, lastScore]);
        }

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
                                <td>{entry.index}</td>
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
