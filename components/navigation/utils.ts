import { MenuItem } from './types';
import { Language } from '../../content/about';
import { homeContent } from '../../content/home';

export function getMenuItems(
  content: typeof homeContent[Language], 
  currentLang: Language,
  handlers: {
    handlePortfolioClick: (e: React.MouseEvent) => void;
  }
): MenuItem[] {
  return [
    { label: content.navigation.home, path: `/${currentLang}` },
    { 
      label: content.navigation.portfolio, 
      path: `/${currentLang}/portfolio`,
      onClick: handlers.handlePortfolioClick,
      children: [
        { label: content.navigation.photography, path: `/${currentLang}/portfolio/photography` },
        { label: content.navigation.videography, path: `/${currentLang}/portfolio/videography` },
      ]
    },
    { 
      label: content.navigation.services, 
      path: `/${currentLang}/services`,
      children: [
        { label: content.navigation.photography, path: `/${currentLang}/services/photography` },
        { label: content.navigation.videography, path: `/${currentLang}/services/videography` },
        { label: content.navigation.wedding, path: `/${currentLang}/services/wedding` },
      ]
    },
    { label: content.navigation.about, path: `/${currentLang}/about` },
    { label: content.navigation.contact, path: `/${currentLang}/contact` },
  ];
} 