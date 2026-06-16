import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    name: 'Tecnologías',
    icon: 'lucide:code-xml',
    skills: [
      { name: 'SQL, bases de datos', percentage: 80, level: 'very-good' },
      { name: 'PHP, .NET (Backend)', percentage: 80, level: 'very-good' },
      { name: 'Android, MAUI (Móvil)', percentage: 50, level: 'average' },
      { name: 'Bootstrap, Material, PrimeNG', percentage: 80, level: 'very-good' },
      { name: 'JavaScript, Angular, React (Frontend)', percentage: 90, level: 'excellent' },
    ],
  },
  {
    name: 'Herramientas',
    icon: 'lucide:wrench',
    skills: [
      { name: 'Git y Postman', percentage: 90, level: 'excellent' },
      { name: 'Adobe Commerce (Magento 2)', percentage: 90, level: 'excellent' },
      { name: 'Administración de servidores Linux', percentage: 80, level: 'very-good' },
      { name: 'Navicat, Workbench', percentage: 90, level: 'excellent' },
      { name: 'MuleSoft, ActiveMQ', percentage: 70, level: 'good' },
    ],
  },
  {
    name: 'Metodologías',
    icon: 'lucide:workflow',
    skills: [
      { name: 'Scrum', percentage: 80, level: 'very-good' },
      { name: 'PMBOK', percentage: 50, level: 'average' },
      { name: 'Proceso de diseño (Design Thinking)', percentage: 70, level: 'good' },
      { name: 'CI/CD', percentage: 50, level: 'average' },
      { name: 'Arquitectura de Software', percentage: 50, level: 'average' },
    ],
  },
];
