import Link from 'next/link';

interface StyledLinkProps {
  href: string;
  text: string;
}

export default function StyledLink({ href, text }: StyledLinkProps) {
  return (
    <div className="flex justify-center mt-2">
      <Link 
        href={href} 
        className="text-gray-900 hover:text-gray-400 transition-colors font-semibold underline"
      >
        {text}
      </Link>
    </div>
  );
} 