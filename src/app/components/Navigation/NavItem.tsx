'use client';
import styles from './navbar.module.css';
import Link from 'next/link';

export type NavItemPropTypes = {
  text: string;
  color: string;
  href: string;
  active: boolean;
}

const NavItem = ({text, color, href, active}: NavItemPropTypes) => {
  return (
    <Link href={href}>
      <div
        className={`nav__item ${active} ? "active" : ""`}
        style={{ color: color }}
        role='menuitem'
      >
        {text}
      </div>
    </Link>
  );
};

export default NavItem;