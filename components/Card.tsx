import { ReactNode } from 'react';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function Card({ href, className = "", children, onClick }: CardProps) {
  const cardClassName = `block p-5 h-full group bg-gray-100 hover:bg-gray-200 transition-all hover:scale-105 flex flex-col ${className}`;

  return href ? (
    <Link href={href} className={cardClassName}>{children}</Link>
  ) : (
    <div onClick={onClick} className={cardClassName}>{children}</div>
  );
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`text-xl font-semibold mb-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`text-gray-600 flex-grow ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`text-gray-500 font-medium mt-4 ${className}`}>
      {children}
    </div>
  );
} 