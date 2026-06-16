import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Plataforma de comercio electrónico',
    image: 'hicombo',
    tech: 'Magento 2, PHP, PHTML, MVC, MySQL',
    description:
      'Solución de comercio electrónico empresarial para HANSA, una importante importadora boliviana. Se migraron datos de productos, categorías y precios desde un proyecto previo. Construida sobre Magento 2 con cobertura B2C y B2B, e integrada con CRM y ERP a través de servicios REST.',
    liveUrl: 'https://www.hi.com.bo',
    liveLabel: 'Visitar tienda',
  },
  {
    title: 'QuickyTools',
    image: 'quickytools',
    tech: 'Astro, TypeScript, Tailwind CSS',
    description:
      'Una colección de herramientas online gratuitas y rápidas —calculadoras, generadores y convertidores— sin necesidad de registro. Construida como sitio estático con Astro, TypeScript y Tailwind CSS para tiempos de carga instantáneos y excelente SEO.',
    liveUrl: 'https://quickytools.app',
    liveLabel: 'Abrir app',
  },
  {
    title: 'CafeResto',
    image: 'cafe-resto',
    tech: 'Astro, TypeScript, Tailwind CSS',
    description:
      'Sistema de punto de venta (POS) en el navegador para cafeterías y restaurantes: gestión de mesas, órdenes, productos y reportes de ventas, todo del lado del cliente. Construido con Astro, TypeScript y Tailwind CSS.',
    liveUrl: 'https://quickytools.app/en/demo/caferesto/',
    liveLabel: 'Abrir demo',
  },
  {
    title: 'Portafolio profesional',
    image: 'portfolio',
    tech: 'Astro, React, Tailwind CSS, Three.js, i18n',
    description:
      'Mi portafolio personal, reconstruido con un stack moderno orientado a lo visual. Sitio estático generado con Astro, fondo 3D interactivo de estrellas con React Three Fiber, animaciones al hacer scroll y soporte bilingüe completo (EN/ES). Desplegado en GitHub Pages.',
    liveUrl: 'https://jukaco.github.io/angular-portfolio/',
    liveLabel: 'Ver en vivo',
    sourceUrl: 'https://github.com/JuKaCo/angular-portfolio',
  },
];
