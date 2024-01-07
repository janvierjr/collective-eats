'use client';
import styles from './footer.module.css';
import Logo from './Logo'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COLOR_LIST } from '@/utils/colorlist';



const Footer = () => {
  const currentPage = usePathname();
  // console.log('currentPage', currentPage)
  return (
    <footer className={styles.footer}>
      <div className={'max-container flex-col margin-auto flex-center'}>
        {COLOR_LIST.map(menu => {
          return (
            currentPage === menu.href && (
                <Logo key={menu.name}  {...menu} />
            )
          );
        })}
      <p className={`${styles.footerCredit} txt-white`}>
        ©2024. MADE BY BERNIE & NATASHA. FOR THOSE WHO LIVE TO EAT WELL.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
