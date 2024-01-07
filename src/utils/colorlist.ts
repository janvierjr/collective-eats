export type ColorListPropTypes = {
  name: string;
  color: string;
  href: string;
  title: string;
  subtitle: string;
};

export const COLOR_LIST = [
  {
    name: 'orange',
    color: 'var(--orange)',
    href: '/',
    title: 'COLLECTIVE EATS',
    subtitle: 'A COLLECTION OF BELOVED RECIPES AMONGST FRIENDS',
  },
  {
    name: 'sky-blue',
    color: 'var(--sky-blue)',
    href: '/addrecipe',
    title: 'ADD A RECIPE',
    subtitle: 'SUBMIT A DELICIOUS EAT',
  },
  {
    name: 'lime-green',
    color: 'var(--lime-green)',
    href: '/saverecipe',
    title: 'SAVED RECIPES',
    subtitle: 'DELECTABLE TREASURES TO SHARE, OF COURSE',
  },
];
