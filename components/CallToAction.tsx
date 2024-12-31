import Link from "next/link";

interface CallToActionProps {
  href: string;
  text: string;
}

export default function CallToAction({ href, text }: CallToActionProps) {
  return (
    <div className="flex justify-center my-8">
      <Link 
        href={href} 
        className="text-gray-900 hover:text-gray-500 transition-colors font-semibold underline"
      >
        {text}
      </Link>
    </div>
  );
} 