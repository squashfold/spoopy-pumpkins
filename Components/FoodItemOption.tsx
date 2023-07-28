import Image from 'next/image'
import FoodItem from '@/interfaces/foodItem.js';
import styles from '@/styles/FoodItem.module.css'

const FoodItemOption: React.FC<FoodItem|undefined> = (foodItem) => {
  return (
    <button className={styles.foodItem} type='button'>
      <Image className={styles.image} src={`/images/game/${foodItem?.name}.jpg`} alt="" width="599" height="420" />
      <span className={styles.name}>{foodItem?.name || 'TEMP'}</span>
    </button>
  )
}

export default FoodItemOption
