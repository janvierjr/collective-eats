import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className='max-container flex-col'>
          <p className='bold'>A COLLECTION OF BELOVED RECIPES AMONGST FRIENDS</p>
          <h1 className={styles.logo}>COLLECTIVE EATS</h1>
        </div>
      </section>
      <main className={styles.main}></main>
    </>
  );
}
