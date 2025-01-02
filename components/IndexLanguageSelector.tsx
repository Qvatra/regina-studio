import Link from 'next/link';
import { Language } from '../content/about';
import { languages } from '../config/languages';

interface IndexLanguageSelectorProps {
  basePath: string;
}

export default function IndexLanguageSelector({ basePath }: IndexLanguageSelectorProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-8">Choose Your Language</h1>
      <div className="flex justify-center gap-8">
        {(Object.keys(languages) as Language[]).map((lang) => (
          <Link
            key={lang}
            href={`${basePath}${lang}`}
            className="text-lg text-gray-600 hover:text-gray-900"
          >
            {languages[lang]}
          </Link>
        ))}
      </div>
    </main>
  );
} 