import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../Logo';
import { Language } from '../../content/about';
import { homeContent } from '../../content/home';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import LanguageSelector from './LanguageSelector';
import MobileMenuButton from './MobileMenuButton';
import { getMenuItems } from './utils';
import { languages } from '../../config/languages';
import { getCookie } from 'cookies-next';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = (router.query.lang || getCookie('preferredLanguage') || 'en') as Language;

  const content = homeContent[currentLang];
  
  useEffect(() => {
    if (currentLang) {
      localStorage.setItem('preferredLanguage', currentLang);
    }
  }, [currentLang]);

  const switchLanguage = (lang: Language) => {
    document.cookie = `preferredLanguage=${lang}; path=/; max-age=31536000`;
    
    if (router.pathname === '/') {
      router.push(`/${lang}`);
    } else {
      const newPath = router.pathname.replace('[lang]', lang);
      router.push(newPath);
    }
    
    setIsLangOpen(false);
  };

  
  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (pathname === `/${currentLang}`) {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${currentLang}/#portfolio`);
    }
  };

  const menuItems = getMenuItems(content, currentLang, { handlePortfolioClick });
  
  const isActive = (path: string) => {
    if (path === `/${currentLang}/portfolio`) {
      return pathname.includes(path);
    } else if (path === `/${currentLang}/services`) {
      return pathname.includes(path);
    } else {
      return pathname === path;
    }
  };

  const isSubActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="flex-0">
            <Link href={`/${currentLang}`} className="flex justify-start my-4">
              <Logo className="h-[50px] w-auto" />
            </Link>
          </div>

          <DesktopMenu
            menuItems={menuItems}
            handlePortfolioClick={handlePortfolioClick}
            isActive={isActive}
            isSubActive={isSubActive}
          />

          <LanguageSelector
            isLangOpen={isLangOpen}
            setIsLangOpen={setIsLangOpen}
            currentLang={currentLang}
            languages={languages}
            switchLanguage={switchLanguage}
          />

          <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <MobileMenu
          isOpen={isOpen}
          menuItems={menuItems}
          handlePortfolioClick={handlePortfolioClick}
          setIsOpen={setIsOpen}
          isActive={isActive}
          isSubActive={isSubActive}
        />
      </div>
    </nav>
  );
} 