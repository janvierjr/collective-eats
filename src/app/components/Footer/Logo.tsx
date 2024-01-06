'use client';
import styles from './footer.module.css';
import Link from 'next/link';

export type LogoPropTypes = {
  name: string;
  color: string;
  href: string;
};

const Logo = ({ color }: LogoPropTypes) => {
  return (
    <Link href={'/'}>
      <h3 className={'logo'} style={{ color }} role='menuitem'>
        COLLECTIVE EATS
      </h3>
    </Link>
  );
};

export default Logo;
