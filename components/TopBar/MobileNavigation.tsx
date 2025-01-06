import Link from 'next/link';
import { MenuItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  handlePortfolioClick: (e: React.MouseEvent) => void;
  setIsOpen: (value: boolean) => void;
  isActive: (path: string) => boolean;
  isSubActive: (path: string) => boolean;
}

export default function MobileMenu({
  isOpen,
  menuItems,
  setIsOpen,
  isActive,
  isSubActive
}: MobileMenuProps) {
  const mobileNavItemClassName = (isItemActive: boolean) =>
    `block px-3 py-2 rounded-md text-base font-medium ${
      isItemActive ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }`;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {menuItems.map((item) => (
          item.children ? (
            <div key={item.path}>
              <div
                className={mobileNavItemClassName(isActive(item.path))}
                onClick={item.onClick}
              >
                {item.label}
              </div>
              <div className='block pl-4'>
                {item.children.map((child) => (
                  <Link 
                    key={child.path}
                    href={child.path}
                    className={mobileNavItemClassName(isSubActive(child.path))}
                    onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
} 