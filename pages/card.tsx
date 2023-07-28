// import Image from 'next/image'
import styles from '@/styles/Card.module.css'
import type FoodItem from '../interfaces/foodItem';

interface CardProps {
  item: FoodItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.image} src="https://source.unsplash.com/sf_1ZDA1YFw" alt="banana" width="599" height="420" loading="lazy" />
        <span className={styles.title}>{item.name && item.name}</span>
        <button className="ctaButton --small">Select</button>
      </div>
    </>
  )
}

export default Card;
