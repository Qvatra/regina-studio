import Link from "next/link";

export default function BookSession() {
  return (
    <div className="flex justify-center my-8">
      <Link 
        href="/services" 
        className="text-gray-900 hover:text-gray-500 transition-colors font-semibold underline"
      >
        Book a session
      </Link>
    </div>
  );
} 