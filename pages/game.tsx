import dynamic from 'next/dynamic.js';
import Head from 'next/head'
const Game = dynamic(() => import('@/Components/Game'), { ssr: false })

const GamePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game />
    </>
  )
}

export default GamePage;
