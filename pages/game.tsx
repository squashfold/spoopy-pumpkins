import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Game.module.css';
import Card from '../Components/FoodItemCard';
import Modal from '../Components/Modal';

import type FoodItem from '../interfaces/foodItem';
const originalItems: FoodItem[] = require('../cache/foodData').data;
const inter = Inter({ subsets: ['latin'] });

// Pre-shuffle the originalItems array
const shuffledItems = [...originalItems];
for (let i = shuffledItems.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
}

let currentIndex = 0;

const getRandomItems = (): [FoodItem, FoodItem] => {
  if (shuffledItems.length < 2) {
    throw new Error('Not enough items to play the game.');
  }

  // Get the next two items from the shuffled array
  const item1 = shuffledItems[currentIndex];
  const item2 = shuffledItems[currentIndex + 1];
  currentIndex += 2;

  // If we reach the end of the array, reshuffle and reset the currentIndex
  if (currentIndex >= shuffledItems.length) {
    currentIndex = 0;
    // Re-shuffle the array
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }
  }

  return [item1, item2];
}

const GamePage: React.FC = () => {
  const [randomItems, setRandomItems] = useState<[FoodItem, FoodItem]>([originalItems[0], originalItems[1]]);
  const [score, setScore] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState(30); // Set how long the game should be (30s)
  const [result, setResult] = useState<string[]>(['', '']);
  const [timerActive, setTimerActive] = useState(true);
  const [gameEnded, setGameEnded] = useState(false); // New state to track if the game has ended
  const [showModal, setShowModal] = useState(false);
  const [answer, setAnswer] = useState(false)

  const startTimer = () => {
    // Start the timer only if it's active and remainingTime is greater than 0
    if (timerActive && remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the timer when component unmounts or when the game ends
      return () => clearTimeout(timer);
    }

    // End the game if remainingTime reaches 0
    if (remainingTime === 0 && !gameEnded) {
      setTimerActive(false);
      setGameEnded(true); // Mark the game as ended
      handleGameEnd();
    }
  };

  const handleNewRound = () => {
    setTimeout(() => {
      try {
        const [item1, item2] = getRandomItems();
        setRandomItems([item1, item2]);
        setResult(['', ''])
      } catch (error) {
        console.log("error.message");
      }
    }, 1000);

  }

  type CardAnswer = { index: number, value: number };

  const compareValues = (selectedCard: CardAnswer, randomItems: FoodItem[]) => {
    // Scores
    const [firstItem, secondItem] = randomItems;
    const choseFirstCard = selectedCard.index === 0;

    if (choseFirstCard) {
      if (selectedCard.value < secondItem.value) {
        setScore(score + 5);
        setAnswer(true)
        return ['correct', 'incorrect'];
      } else {
        setAnswer(false)
        return ['incorrect', 'correct'];
      }
    } else {
      if (selectedCard.value < firstItem.value) {
        setScore(score + 5);
        setAnswer(true)
        return ['incorrect', 'correct'];
      } else {
        setAnswer(false)
        return ['correct', 'incorrect'];
      }
    }
  };

  const submitAnswer = (event: any, value: number, item: number) => {
    const selectedCard = { index: item, value: value }
    setResult(compareValues(selectedCard, randomItems));
    setTimerActive(false);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      handleNewRound();
      setTimerActive(true)
    }, 3000);
  }

  useEffect(() => {
    // setRandomItems(getRandomItems());
    startTimer();
  }, [remainingTime, timerActive]);

  const handleGameEnd = () => {

    // Step 1: Retrieve existing scores from localStorage and parse it into an array
    const existingScores = JSON.parse(localStorage.getItem('scores') || '[]');

    // Step 2: Create a new score object containing the score and current datetime
    const newScore = {
      score,
      datetime: new Date().toISOString(), // Store the datetime in ISO format
    };

    // Step 3: Add the new score object to the existing scores array
    existingScores.push(newScore);

    // Step 4: Save the updated scores array back to localStorage
    localStorage.setItem('scores', JSON.stringify(existingScores));

    // Step 5: Redirect to "/end" automatically after a delay to allow the transition to be visible
    window.location.href = "/end";
  };

  return (
    <>
      <Head>
        <title>Food Planet Game | The Game</title>
        <meta name="description" content="A game to encourage eco-friendly food decisions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.status}>
          <p className={styles.metadata}>Score
            <span className={styles.datum}>{score}</span>
          </p>
          <p className={styles.metadata}>Time Remaining
            <span className={styles.datum}>{remainingTime}</span>
          </p>
        </div>
        <h1 className={styles.header}>Which has the smaller carbon footprint?</h1>
        <div className={styles.cards}>
          <Card item={randomItems[0] ? randomItems[0] : originalItems[0]} submitAnswer={submitAnswer} i={0} result={result[0]} />
          <span className={styles.separator}>vs</span>
          <Card item={randomItems[1] ? randomItems[1] : originalItems[1]} submitAnswer={submitAnswer} i={1} result={result[1]} />
        </div>
      </main>
      {showModal && <Modal isCorrect={answer} result={result} items={randomItems}/>}
    </>
  )
}

export default GamePage;
