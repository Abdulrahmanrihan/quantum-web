'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();

  console.log('Current path:', pathname);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-indigo-700">
          <Link href="/" >  <Image src="/assets/logo.png" width={150} height={150} alt="logo" /></Link>
        </span>
        <nav className='flex flex-row gap-6'>
          <Link href="/" className={`mx-2 ${pathname === '/' ? 'text-indigo-700 font-semibold' : 'hover:text-indigo-700'}`}>Home</Link>
          <Link href="/about" className={`mx-2 ${pathname === '/about' ? 'text-indigo-700 font-semibold' : 'hover:text-indigo-700'}`}>About</Link>
          <Link href="/contact" className={`mx-2 ${pathname === '/contact' ? 'text-indigo-700 font-semibold' : 'hover:text-indigo-700'}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
