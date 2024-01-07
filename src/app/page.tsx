import styles from './page.module.css'
import Hero from './components/Hero/Hero';

export default function Home() {

    return (
      <>
        <Hero />
        <main className={styles.main}></main>
      </>
    );
}
