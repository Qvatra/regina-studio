import { MenuItem } from './types';
import { Language } from '../../content/about';
import { homeContent } from '../../content/home';

export function getMenuItems(content: typeof homeContent[Language], currentLang: Language): MenuItem[] {
  return [
    { label: content.navigation.home, path: `/${currentLang}` },
    { 
      label: content.navigation.portfolio, 
      path: '/portfolio',
      children: [
        { label: content.navigation.photography, path: `/${currentLang}/portfolio/photography` },
        { label: content.navigation.videography, path: `/${currentLang}/portfolio/videography` },
      ]
    },
    { label: content.navigation.services, path: `/${currentLang}/services` },
    { label: content.navigation.about, path: `/${currentLang}/about` },
    { label: content.navigation.contact, path: `/${currentLang}/contact` },
  ];
} 