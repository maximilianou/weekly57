import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/Menu'
import MenuR from '../components/MenuR'
import SFooter from '../components/SFooter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next dApp</title>
        <meta name="description" content="Generated by create next dapp" />
        <link rel="icon" href="/max_logo.svg" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>

      </main>
      <Menu></Menu>
      <MenuR></MenuR>
      <SFooter></SFooter>
    </div>
  )
}

export default Home
