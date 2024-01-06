'use client';
import styles from './footer.module.css';
import Logo from './Logo'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FOOTER_COLOR_LIST = [
  { name: 'orange', color: 'var(--orange)', href: '/' },
  { name: 'sky-blue', color: 'var(--sky-blue)', href: 'addrecipe' },
  { name: 'lime-green', color: 'var(--lime-green)', href: 'saverecipe' },
];

const Footer = () => {
  const currentPage = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={'max-container flex-col margin-auto flex-center'}>
        {FOOTER_COLOR_LIST.map(menu => {
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
