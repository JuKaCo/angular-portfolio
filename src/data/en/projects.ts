import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    image: 'hicombo',
    tech: 'Magento 2, PHP, PHTML, MVC, MySQL',
    description:
      'Enterprise e-commerce solution for HANSA, a leading Bolivian trading company. Successfully migrated product catalog, categories, and pricing data from legacy systems. Built on Magento 2 with comprehensive B2C and B2B capabilities, featuring seamless integration with CRM and ERP systems through REST services.',
    liveUrl: 'https://www.hi.com.bo',
    liveLabel: 'Visit store',
  },
  {
    title: 'Professional Portfolio',
    image: 'portfolio',
    tech: 'Astro, React, Tailwind CSS, Three.js, i18n',
    description:
      'My personal portfolio, rebuilt with a modern, visual-first stack. Static site generated with Astro, interactive 3D starfield background powered by React Three Fiber, scroll-driven animations, and full bilingual (EN/ES) support. Deployed on GitHub Pages.',
    liveUrl: 'https://jukaco.github.io/angular-portfolio/',
    liveLabel: 'View live',
    sourceUrl: 'https://github.com/JuKaCo/angular-portfolio',
  },
];
