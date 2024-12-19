import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string, isMobile?: boolean) => {
    if (path === '/') return pathname === '/';
    
    // Check if current page is a portfolio page and path is portfolio button
    if (path === 'portfolio') {
      // Don't highlight portfolio button in mobile when sub-pages are active
      if (isMobile) return false;
      return pathname?.includes('/portfolio-');
    }
    
    return pathname === path;
  };

  const isSubActive = (path: string) => pathname === path;

  useEffect(() => {
    if (window.location.hash === '#portfolio') {
      setTimeout(() => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname]);

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPortfolioOpen(false);
    setIsOpen(false);
    
    if (pathname === '/') {
      // If already on home page, just scroll to portfolio section
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, navigate to home with hash
      router.push('/#portfolio');
    }
  };

  return (
    <nav className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo centered */}
        <div className="flex justify-center py-4">
          <Link href="/" className="flex-shrink-0 flex flex-col items-center h-[60px]">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:justify-center md:space-x-8 pt-2 pb-6">
          <Link 
            href="/" 
            className={`text-sm uppercase tracking-wider ${
              isActive('/') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Home
          </Link>

          {/* Portfolio Dropdown */}
          <div className="relative group">
            <button 
              onClick={handlePortfolioClick}
              className={`text-sm uppercase tracking-wider ${
                isActive('portfolio') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Portfolio
            </button>
            <div className="absolute left-0 top-full w-48 pt-2 -mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="bg-white py-2 shadow-lg">
                <Link 
                  href="/portfolio-photography"
                  className={`block px-4 py-2 text-sm ${
                    isSubActive('/portfolio-photography') 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Photography
                </Link>
                <Link 
                  href="/portfolio-videography"
                  className={`block px-4 py-2 text-sm ${
                    isSubActive('/portfolio-videography') 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Videography
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/services"
            className={`text-sm uppercase tracking-wider ${
              isActive('/services') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/about"
            className={`text-sm uppercase tracking-wider ${
              isActive('/about') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact"
            className={`text-sm uppercase tracking-wider ${
              isActive('/contact') ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button - moved to top right */}
        <div className="md:hidden absolute top-6 right-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 scale-125`}
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

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}>
              Home
            </Link>

            {/* Mobile Portfolio Dropdown */}
            <div>
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isActive('portfolio', true) ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Portfolio
              </button>
              <div className={`${isPortfolioOpen ? 'block' : 'hidden'} pl-4`}>
                <Link href="/portfolio-photography"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isSubActive('/portfolio-photography') 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}>
                  Photography
                </Link>
                <Link href="/portfolio-videography"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isSubActive('/portfolio-videography') 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}>
                  Videography
                </Link>
              </div>
            </div>

            <Link href="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/services') ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}>
              Services
            </Link>
            <Link href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}>
              About
            </Link>
            <Link href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 