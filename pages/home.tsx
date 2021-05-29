import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GitHubProfile } from '../components/GitHubProfile'
import Link from 'next/link'

export default function Other() {
  return (
    <>
      <h2>Probando Pages</h2>
      <Link href="/">Index</Link>
    </>
  )
}