import Link from 'next/link';
import { languages } from '../config/languages';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import EmailIcon from './icons/EmailIcon';

const socialLinks = [
  {
    href: process.env.NEXT_PUBLIC_FACEBOOK,
    label: "Facebook",
    icon: FacebookIcon()
  },
  {
    href: process.env.NEXT_PUBLIC_INSTAGRAM,
    label: "Instagram",
    icon: InstagramIcon()
  },
  {
    href: process.env.NEXT_PUBLIC_YOUTUBE,
    label: "YouTube",
    icon: YoutubeIcon()
  },
  {
    href: process.env.NEXT_PUBLIC_WATSAPP,
    label: "WhatsApp",
    icon: WhatsappIcon()
  },
  {
    href: process.env.NEXT_PUBLIC_EMAIL,
    label: "Email",
    icon: EmailIcon()
  }
];

export default function Footer() {
  return (
    <footer className="mt-auto pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-8">
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-500 transition-all hover:scale-125 transform-gpu origin-center"
          >
            <span className="sr-only">{label}</span>
            {icon}
          </a>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-8">
        <div className="mt-8 flex justify-center items-center gap-4">
          {Object.entries(languages).map(([lang, name]) => (
            <Link
              key={lang}
              href={`/${lang}`}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {name}
              <span className="ml-4 last:hidden text-gray-300">|</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
} 