import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  external = false,
  className = "",
  onClick
}: ButtonProps) {
  const baseStyles = "bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-center inline-flex items-center justify-center";
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