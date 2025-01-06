import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex justify-center">
        <button
            onClick={scrollToTop}
            className={'bg-transparent text-gray-800 p-2 hover:text-gray-400 mx-auto mt-8'}
            aria-label="Scroll to top"
        >
        <ChevronUpIcon className="w-6 h-6" />
        </button>
    </div>
  );
} 