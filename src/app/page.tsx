import styles from './page.module.css'
import Hero from './components/Hero/Hero';
import AuthForm from './components/Auth/AuthForm';
export default function Home() {

    return (
      <>
        <Hero />
        <main className={styles.main}>
          <div className={'max-container'}>
            < AuthForm />
          </div>
        </main>
      </>
    );
}
