import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Non dolore elit cillum eu.</p>
      <p className={styles.text}>Nisi ad ea consectetur est elit cillum ea deserunt occaecat ad sit.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </>
  )
}
