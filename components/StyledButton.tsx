import Link from 'next/link';
import { ReactNode } from 'react';
import ArrowIcon from './icons/ArrowIcon';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function StyledButton({ 
  children, 
  href, 
  external = false,
  className = "",
  onClick
}: ButtonProps) {
  const baseStyles = "bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors text-center inline-flex items-center justify-center";
  const combinedStyles = `${baseStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          onClick={onClick}
        >
          {children}
          <ArrowIcon className="ml-2 w-4 h-4" />
        </a>
      );
    }
    return (
      <Link 
        href={href}
        className={combinedStyles}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 