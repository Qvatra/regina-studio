import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';

type MenuItem = {
  label: string;
  path: string;
  children?: { label: string; path: string; }[];
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { label: 'Home', path: '/' },
    { 
      label: 'Portfolio', 
      path: '/portfolio',
      children: [
        { label: 'Photography', path: '/portfolio/photography' },
        { label: 'Videography', path: '/portfolio/videography' },
      ]
    },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/portfolio') {
      return pathname.includes(path);
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
    setIsOpen(false);
    
    if (pathname === '/') {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#portfolio');
    }
  };

  const navItemClassName = (isItemActive: boolean) => 
    `text-sm uppercase tracking-wider ${
      isItemActive ? 'text-gray-900 font-bold tracking-wide' : 'text-gray-500 hover:text-gray-900 hover:font-bold hover:tracking-wide'
    }`;

  const mobileNavItemClassName = (isItemActive: boolean) =>
    `block px-3 py-2 rounded-md text-base font-medium ${
      isItemActive ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }`;

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="flex-1 md:flex-none">
            <Link href="/" className="flex justify-center md:justify-start my-4">
              <Logo className="h-[50px] w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - right */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              item.children ? (
                <div key={item.path} className="relative group">
                  <button 
                    onClick={handlePortfolioClick}
                    className={navItemClassName(isActive(item.path))}
                  >
                    {item.label}
                  </button>
                  <div className="absolute left-0 top-full w-48 pt-2 -mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link 
                          key={child.path}
                          href={child.path}
                          className={`block px-4 py-2 ${navItemClassName(isSubActive(child.path))}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className={navItemClassName(isActive(item.path))}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex-0 flex justify-end md:hidden">
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
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              item.children ? (
                <div key={item.path}>
                  <div
                    className={mobileNavItemClassName(isActive(''))}
                    onClick={handlePortfolioClick}
                  >
                    {item.label}
                  </div>
                  <div className='block pl-4'>
                    {item.children.map((child) => (
                      <Link 
                        key={child.path}
                        href={child.path}
                        className={mobileNavItemClassName(isSubActive(child.path))}
                        onClick={() => setIsOpen(val => !val)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={mobileNavItemClassName(isActive(item.path))}
                  onClick={() => setIsOpen(val => !val)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 