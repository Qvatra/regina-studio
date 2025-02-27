import Link from 'next/link';
import { MenuItem } from './types';

interface DesktopMenuProps {
  menuItems: MenuItem[];
  handlePortfolioClick: (e: React.MouseEvent) => void;
  isActive: (path: string) => boolean;
  isSubActive: (path: string) => boolean;
}

export default function DesktopMenu({
  menuItems,
  isActive,
  isSubActive
}: DesktopMenuProps) {
  const navItemClassName = (isItemActive: boolean) => 
    `text-sm uppercase tracking-wider py-2 block ${
      isItemActive 
        ? 'text-gray-900 font-bold tracking-wide' 
        : 'text-gray-500 hover:text-gray-900 hover:font-bold hover:tracking-wide'
    }`;

  return (
    <div className="hidden md:flex md:items-center md:gap-2">
      {menuItems.map((item) => (
        <div key={item.path} className="w-[90px]">
          {item.children ? (
            <div className="relative group">
              <button
                data-testid={item.testId}
                onClick={item.onClick}
                className={`${navItemClassName(isActive(item.path))} text-center w-full`}
              >
                {item.label}
              </button>
              <div className="absolute left-0 top-full w-48 pt-2 -mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white py-2 shadow-md">
                  {item.children.map((child) => (
                    <Link 
                      data-testid={child.testId}
                      key={child.path}
                      href={child.path}
                      className={`block px-4 py-2 text-left ${navItemClassName(isSubActive(child.path))}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link 
              data-testid={item.testId}
              href={item.path} 
              className={`${navItemClassName(isActive(item.path))} text-center`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
} 