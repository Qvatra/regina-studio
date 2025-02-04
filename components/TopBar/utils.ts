import { MenuItem } from './types';
import { Language } from '@/config/languages';
import { navigationContent } from '@/content/navigation';

export function getMenuItems(
  content: typeof navigationContent[Language], 
  currentLang: Language,
  handlers: {
    handlePortfolioClick: (e: React.MouseEvent) => void;
  }
): MenuItem[] {
  return [
    { 
      testId: 'home-nav-item',
      label: content.home, 
      path: `/${currentLang}` 
    },
    { 
      testId: 'portfolio-nav-item',
      label: content.portfolio, 
      path: `/${currentLang}/portfolio`,
      onClick: handlers.handlePortfolioClick,
      children: [
        { 
          testId: 'photography-portfolio-nav-item',
          label: content.photography, 
          path: `/${currentLang}/portfolio/photography` 
        },
        { 
          testId: 'videography-portfolio-nav-item',
          label: content.videography, 
          path: `/${currentLang}/portfolio/videography` 
        },
      ]
    },
    { 
      testId: 'services-nav-item',
      label: content.services, 
      path: `/${currentLang}/services`,
      children: [
        { 
          testId: 'photography-services-nav-item',
          label: content.photography, 
          path: `/${currentLang}/services/photography` 
        },
        { 
          testId: 'videography-services-nav-item',
          label: content.videography, 
          path: `/${currentLang}/services/videography` 
        },
        { 
          testId: 'wedding-services-nav-item',
          label: content.wedding, 
          path: `/${currentLang}/services/wedding` 
        },
      ]
    },
    { 
      testId: 'about-nav-item',
      label: content.about, 
      path: `/${currentLang}/about` 
    },
    { 
      testId: 'contact-nav-item',
      label: content.contact, 
      path: `/${currentLang}/contact` 
    },
  ];
} 