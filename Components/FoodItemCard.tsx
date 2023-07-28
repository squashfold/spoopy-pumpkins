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
      <button type='button' disabled={highlighted !== '' ? true : false} onClick={(event) => submitAnswer(event, item.value, i)} className={`${styles.card} ${highlighted == 'red' ? styles.red : highlighted == 'green' ? styles.green : ''}`}>
        <span className={styles.title}>{item.name ? item.name : 'Item name'}</span>
        <Image className={styles.image} src={`/images/game/${item?.name}.jpg`} alt="" width="600" height="600" loading='eager' />
      </button>
    </>
  )
}

export default Card;
