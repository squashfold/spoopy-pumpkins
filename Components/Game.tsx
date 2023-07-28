import React from 'react';
import styles from '@/styles/Game.module.css'
import { Inter } from 'next/font/google'
import { data as foodItems } from '../cache/foodData.js'
import FoodItem from '@/interfaces/foodItem.js';
import FoodItemOption from './FoodItemOption';

const inter = Inter({ subsets: ['latin'] })

const Game: React.FC = (foodItemsInPlay: any) => {
    return (
      <div className={`${styles.main} ${inter.className}`}>
       <div className={styles.container}>
           <p className={styles.metadata}>Score
             <span className={styles.datum}>10</span>
           </p>
           <p className={styles.metadata}>Time Remaining
             <span className={styles.datum}>10:10</span>
           </p>
         </div>
         <h1 className={styles.header}>Which has the lowest impact?</h1>
         <div className={styles.cards}>
           <FoodItemOption {...(foodItemsInPlay.pop())}/>
           <span className={styles.separator}>vs</span>
           <FoodItemOption {...(foodItemsInPlay.pop())}/>
        </div>
      </div>
    );
};

export default Game;