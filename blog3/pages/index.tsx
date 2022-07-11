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

        <div className={styles.paralaxStyle}>Paralax</div>
        <div className={styles.greenStyle}>green
        </div>
        <div className={styles.paralaxStyle}>Paralax</div>
        <div className={styles.whiteStyle}>white
        </div>
        <div className={styles.paralaxStyle}>Paralax</div>
        <div className={styles.redStyle}>red
        </div>
        <div className={styles.paralaxStyle}></div>
      </main>
      <Menu></Menu>
      <MenuR></MenuR>
      <SFooter></SFooter>
      <video className={styles.background_video} loop muted autoPlay  
        poster="https://simpledoers.eth.limo/max_logo.svg">
        <source src="https://simpledoers.eth.limo/video_bg.mp4"   
                type="video/mp4" />
      </video>
    </div>
  )
}

export default Home


