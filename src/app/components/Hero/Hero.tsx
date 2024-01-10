'use client';
import styles from './hero.module.css';
import type { ColorListPropTypes } from '@/utils/colorlist';
import { COLOR_LIST } from '@/utils/colorlist';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [heroStyle, setHeroStyle] = useState('var(--orange)');
  const [heroTitle, setHeroTitle] = useState('COLLECTIVE EATS')
  const [heroSubTitle, setHeroSubTitle] = useState('YEAH YOU RIGHT!');
  const thisPage = usePathname();

  const styleList = () => {
    return COLOR_LIST.map((menu) => {
      if (thisPage === menu.href) {
        console.log('menu.color', menu.color);
        setHeroStyle(`${menu.color}`);
        setHeroTitle(`${menu.title}`)
        setHeroSubTitle(`${menu.subtitle}`)
      }
    });
  };
  useEffect(() => {
    styleList();
  }, []);

  console.log('heroStyle', heroStyle);
  console.log('thisPage', thisPage);
  return (
      <section
        className={styles.hero}
        style={{ background: `${heroStyle}` }}
      >
        <div className='max-container flex-col'>
          <p className='bold'>
            {heroSubTitle}
          </p>
        <h1 className={styles.logo}>{heroTitle}</h1>
        </div>
      </section>
  );
}
