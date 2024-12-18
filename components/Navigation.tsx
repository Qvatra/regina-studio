import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-black text-white">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <Image
                src="/assets/logo.png"
                alt="Studio Regina Logo"
                width={40}
                height={40}
                className="w-auto h-8"
                priority
              />
              <span className="text-xl font-bold">Studio Regina</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}>
              Home
            </Link>

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Portfolio
              </button>
              <div className="absolute left-0 top-full w-48 pt-2 -mt-2 z-50">
                <div className="rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <div className="py-1">
                    <Link href="/portfolio-photography"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                      Photography
                    </Link>
                    <Link href="/portfolio-videography"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                      Videography
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/services') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}>
              Services
            </Link>
            <Link href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}>
              About
            </Link>
            <Link href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}>
            Home
          </Link>

          {/* Mobile Portfolio Dropdown */}
          <div>
            <button
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Portfolio
            </button>
            <div className={`${isPortfolioOpen ? 'block' : 'hidden'} pl-4`}>
              <Link href="/portfolio-photography"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Photography
              </Link>
              <Link href="/portfolio-videography"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Videography
              </Link>
            </div>
          </div>

          <Link href="/services"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/services') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}>
            Services
          </Link>
          <Link href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/about') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}>
            About
          </Link>
          <Link href="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/contact') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 