// import Image from 'next/image'
import styles from '@/styles/Card.module.css'

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src="https://source.unsplash.com/sf_1ZDA1YFw" alt="banana" width="599" height="420" loading="lazy" />
      <span className={styles.title}>Title</span>
      <button className="ctaButton --small">Select</button>
    </div>
  )
}

export default Card;
