import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function MobileMenuButton({ isOpen, setIsOpen }: MobileMenuButtonProps) {
  return (
    <div className="flex items-center md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} aria-hidden="true" />
        <XMarkIcon className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} aria-hidden="true" />
      </button>
    </div>
  );
}