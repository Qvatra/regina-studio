import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import { navigationContent } from '../../content/navigation';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import LanguageSelector from './LanguageSelector';
import MobileMenuButton from './MobileMenuButton';
import { getMenuItems } from './utils';
import { languages, Language } from '../../config/languages';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = (router.query.lang || 'en') as Language;

  const content = navigationContent[currentLang];
  
  const switchLanguage = (lang: Language) => {
    document.cookie = `preferredLanguage=${lang}; path=/; max-age=31536000`;

    const newPath = router.pathname.replace('[lang]', lang);
    router.push(newPath);
    
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
            <Link href="/" className="flex justify-start my-4">
              <Logo className="h-[50px] w-auto" />
            </Link>
          </div>

          <DesktopNavigation
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

        <MobileNavigation
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