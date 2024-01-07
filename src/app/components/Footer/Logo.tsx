'use client';
import Link from 'next/link';
import type { ColorListPropTypes } from '../../../utils/colorlist';


const Logo = ({ color }: ColorListPropTypes) => {
  return (
    <Link href={'/'}>
      <h3 className={'logo'} style={{ color }} role='menuitem'>
        COLLECTIVE EATS
      </h3>
    </Link>
  );
};

export default Logo;
