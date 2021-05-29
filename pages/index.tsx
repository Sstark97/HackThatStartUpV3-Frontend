import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GitHubProfile } from '../components/GitHubProfile'
import Link from 'next/link'
import Login from './login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackTheStartUpV3-Individual</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login />
      </main>

    </div>
  )
}
