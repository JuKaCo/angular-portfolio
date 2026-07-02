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
    title: 'QuickyTools',
    image: 'quickytools',
    tech: 'Astro, TypeScript, Tailwind CSS',
    description:
      'A collection of free, fast online tools — calculators, generators, and converters — with no sign-up required. Built as a static site with Astro, TypeScript, and Tailwind CSS for instant load times and great SEO.',
    liveUrl: 'https://quickytools.app',
    liveLabel: 'Open app',
  },
  {
    title: 'CafeResto',
    image: 'cafe-resto',
    tech: 'Astro, TypeScript, Tailwind CSS',
    description:
      'A browser-based point-of-sale (POS) system for cafés and restaurants — table management, orders, products, and sales reports, all running client-side. Built with Astro, TypeScript, and Tailwind CSS.',
    liveUrl: 'https://quickytools.app/en/demo/caferesto/',
    liveLabel: 'Open demo',
  },
  {
    title: 'Capibara Pet for VS Code',
    image: 'capibara-pet',
    tech: 'TypeScript, VS Code API, Webview, CSS Sprites',
    description:
      'A VS Code extension that adds an animated capybara pet to your editor — it walks around, runs while you type, gets scared by errors, takes coffee breaks, and falls asleep when you go idle. Flicker-free sprite-sheet animations, zero runtime dependencies, published on the Visual Studio Marketplace.',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=JuanCarlosCondori.capibara-pet',
    liveLabel: 'Marketplace',
    sourceUrl: 'https://github.com/JuKaCo/capibara-pet-for-VSC',
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
