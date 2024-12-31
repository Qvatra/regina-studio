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
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7" />
        </svg>
        </button>
    </div>
  );
} 