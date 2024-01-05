import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavMenu from './components/Navigation/NavMenu';
import Footer from './components/Footer/Footer';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
