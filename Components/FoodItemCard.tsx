import styles from '@/styles/Card.module.css'
import type FoodItem from '../interfaces/foodItem';
import Image from 'next/image'


interface CardProps {
  item: FoodItem;
  submitAnswer: any;
  i: number;
  result: string;
}

const Card: React.FC<CardProps> = ({ item, submitAnswer, i, result }) => {
  return (
    <>
      <button
        type='button'
        disabled={result !== ''}
        onClick={(event) => submitAnswer(event, item.value, i)}
        data-result={result || null}
        className={styles.card}>
        <span className={styles.title}>{item.name ? item.name : 'Item name'}<span className={styles.result}>{result}</span></span>
        <Image className={styles.image} src={`/images/game/${item?.name}.jpg`} alt="" width="600" height="600" loading='eager' />
      </button>
    </>
  )
}

export default Card;
