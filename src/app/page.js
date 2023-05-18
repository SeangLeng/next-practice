import { Suspense } from 'react'
import Loading from './loading'
import styles from './page.module.css'
import Products from './products/page'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* loading UI */}
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </main>
  )
}
