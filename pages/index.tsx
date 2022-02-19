import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { categorys } from '../constant/category';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          원하는 종류를 골라보세요!
        </h1>

        <p className={styles.description}>
          {/* Get started by editing{' '} <code className={styles.code}>pages/index.tsx</code> */}
        </p>

        <div className={styles.grid}>
          {
            categorys.map(category => (
              <Link key={category.KEY} href="https://www.gsshop.com/shop/wine/cate.gs?msectid=1548240#SECT|REG_DATE|1|1548240|1548253" >
                <a className={styles.card}>
                  <div className={styles.titleContainer}>
                    <img className={styles.icon} src={category?.ICON} />
                    <h2>{category.VALUE} &rarr;</h2>
                  </div>
                  <p>Find in-depth information about Next.js features and API.</p>
                </a>
              </Link> 
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Home
