'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Left side navigation */}
        <nav className="flex items-center gap-8">
          <Link 
            href="/events" 
            className={`text-sm font-medium tracking-wide uppercase ${
              pathname === '/events' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Events
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium tracking-wide uppercase ${
              pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image 
              src="/assets/logo.png" 
              width={320} 
              height={140} 
              alt="OneFlow Sports logo" 
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Right side navigation */}
        <nav className="flex items-center gap-8">
          <Link 
            href="/contact" 
            className={`text-sm font-medium tracking-wide uppercase ${
              pathname === '/contact' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Contact
          </Link>
          <Link 
            href="/reserve" 
            className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
          >
            Reserve
          </Link>
        </nav>
      </div>
    </header>
  );
}
