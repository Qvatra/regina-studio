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
        { label: content.navigation.photography, path: `/portfolio/photography/${currentLang}` },
        { label: content.navigation.videography, path: `/portfolio/videography/${currentLang}` },
      ]
    },
    { label: content.navigation.services, path: `/services/${currentLang}` },
    { label: content.navigation.about, path: `/about/${currentLang}` },
    { label: content.navigation.contact, path: `/contact/${currentLang}` },
  ];
} 