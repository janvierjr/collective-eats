import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import localFont from 'next/font/local';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const brice =  localFont({src: '../../public/fonts/Brice-BlackSemiExpanded.otf'})

export const metadata: Metadata = {
  title: 'Collective Eats',
  description: 'A collection of beloved recipes amongst friends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
