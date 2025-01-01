import { Language } from '../../content/about';

interface LanguageSelectorProps {
  isLangOpen: boolean;
  setIsLangOpen: (value: boolean) => void;
  currentLang: Language;
  languages: { [key in Language]: string };
  switchLanguage: (lang: Language) => void;
}

export default function LanguageSelector({
  isLangOpen,
  setIsLangOpen,
  currentLang,
  languages,
  switchLanguage
}: LanguageSelectorProps) {
  return (
    <div className="absolute right-16 mr-3 top-8 md:relative md:top-0 md:right-0 md:mr-0">
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
      >
        <span className="text-sm">{languages[currentLang]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isLangOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
          {Object.entries(languages).map(([lang, name]) => (
            <button
              key={lang}
              onClick={() => switchLanguage(lang as Language)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currentLang === lang 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 