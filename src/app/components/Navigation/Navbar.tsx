"use client"
import styles from './navbar.module.css';
import { useState } from 'react';
import NavItem from './NavItem';

const NAV_MENU_LIST = [
  { text: 'FIND A RECIPE', color: 'var(--orange)', href: '/'},
  { text: 'ADD A RECIPE', color: 'var(--sky-blue)', href: 'addrecipe' },
  { text: 'SAVED RECIPES', color: 'var(--lime-green)', href: 'saverecipe' },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <header>
      <nav className={styles.navigation}>
        <div className={'max-container'}>
          <div className='nav-menu-wrapper'>
            <button
              className={styles.hamburgerButton}
              aria-haspopup='true'
              aria-expanded={activeNav}
              type='button'
              onClick={() => setActiveNav(!activeNav)}
            >
              <div className={styles.topLine}></div>
              <div className={styles.bottomLine}></div>
            </button>
            <div
              className={`${activeNav ? 'active' : ''} nav-menu`}
              role='menu'
            >
              {NAV_MENU_LIST.map((menu, index) => {
                return (
                  <div
                    onClick={() => {
                      setActiveIndex(index)
                      setActiveNav(false)
                    }}
                    key={menu.text}>
                    <NavItem active={activeIndex === index} {...menu} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            aria-label='recipe search input'
            placeholder='SEARCH RECIPE...'
          ></input>
          <button
            className={'button bg-black txt-white'}
            type='submit'
            aria-label='recipe search button'
          >
            SEARCH
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;