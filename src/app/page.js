import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import styles from './page.module.css'
import Products from './products/page'
import { metadata } from './layout'

export default function Home({ params, searchParams }) {
  return (
    <main className={styles.main}>
      {/* loading UI */}
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </main>
  )
}
