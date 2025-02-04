import { ReactNode } from 'react';
import React from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
  testId?: string;
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

export function Card({ className = "", children, testId = "card" }: CardProps) {
  const cardClassName = `block p-5 h-full bg-gray-100 cursor-default flex flex-col ${className}`;

  return (
    <div className={cardClassName} data-testid={testId}>{children}</div>
  );
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`text-xl font-semibold mb-2 cursor-default ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`text-gray-600 flex-grow cursor-default ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`text-gray-500 font-medium mt-auto pt-4 ${className}`}>
      {children}
    </div>
  );
} 