import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Quantum Club',
  description: 'Empowering the Next Generation of Gamers, Coders, and Thinkers',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
