import styles from '@/styles/Card.module.css'
import type FoodItem from '../interfaces/foodItem';
import Image from 'next/image'


interface CardProps {
  item: FoodItem;
  submitAnswer: any;
  i: number;
  highlighted: string;
}

const Card: React.FC<CardProps> = ({ item, submitAnswer, i, highlighted }) => {
  return (
    <>
      <button disabled={highlighted !== '' ? true : false} onClick={(event) => submitAnswer(event, item.value, i)} className={`${styles.card} ${highlighted == 'red' ? styles.red : highlighted == 'green' ? styles.green : ''}`}>
        <Image className={styles.image} src={`/images/game/${item?.name}.jpg`} alt="" width="599" height="420" loading='eager' />
        <span className={styles.title}>{item.name ? item.name : 'Item name'}</span>
        <span className="ctaButton --small">Select</span>
      </button>
    </>
  )
}

export default Card;
