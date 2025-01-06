import { MenuItem } from './types';
import { Language } from '../../config/languages';
import { navigationContent } from '../../content/navigation';

export function getMenuItems(
  content: typeof navigationContent[Language], 
  currentLang: Language,
  handlers: {
    handlePortfolioClick: (e: React.MouseEvent) => void;
  }
): MenuItem[] {
  return [
    { label: content.home, path: `/${currentLang}` },
    { 
      label: content.portfolio, 
      path: `/${currentLang}/portfolio`,
      onClick: handlers.handlePortfolioClick,
      children: [
        { label: content.photography, path: `/${currentLang}/portfolio/photography` },
        { label: content.videography, path: `/${currentLang}/portfolio/videography` },
      ]
    },
    { 
      label: content.services, 
      path: `/${currentLang}/services`,
      children: [
        { label: content.photography, path: `/${currentLang}/services/photography` },
        { label: content.videography, path: `/${currentLang}/services/videography` },
        { label: content.wedding, path: `/${currentLang}/services/wedding` },
      ]
    },
    { label: content.about, path: `/${currentLang}/about` },
    { label: content.contact, path: `/${currentLang}/contact` },
  ];
} 