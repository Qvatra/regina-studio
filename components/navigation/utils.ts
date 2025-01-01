import { MenuItem } from './types';
import { Language } from '../../content/about';
import { homeContent } from '../../content/home';

export function getMenuItems(content: typeof homeContent[Language], currentLang: Language): MenuItem[] {
  return [
    { label: content.navigation.home, path: '/' },
    { 
      label: content.navigation.portfolio, 
      path: '/portfolio',
      children: [
        { label: content.navigation.photography, path: '/portfolio/photography' },
        { label: content.navigation.videography, path: '/portfolio/videography' },
      ]
    },
    { label: content.navigation.services, path: '/services' },
    { label: content.navigation.about, path: `/about/${currentLang}` },
    { label: content.navigation.contact, path: '/contact' },
  ];
} 