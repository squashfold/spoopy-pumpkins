import styles from '@/styles/Card.module.css'
import type FoodItem from '../interfaces/foodItem';
import Image from 'next/image'


interface CardProps {
  item: FoodItem;
  submitAnswer: any;
  i: number;
}

const Card: React.FC<CardProps> = ({ item, submitAnswer, i }) => {
  return (
    <>
      <div className={styles.card}>
        <Image className={styles.image} src={`/images/game/${item?.name}.jpg`} alt="" width="599" height="420" loading='eager' />
        <span className={styles.title}>{item.name ? item.name : 'Item name'}</span>
        <button className="ctaButton --small" onClick={(event) => submitAnswer(event, i)}>Select</button>
      </div>
    </>
  )
}

export default Card;
