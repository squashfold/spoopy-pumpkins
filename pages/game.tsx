import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Game.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Game() {
  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>test</p>
        </div>
      </main>
    </>
  )
}
