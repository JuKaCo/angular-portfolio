import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'lucide:monitor-smartphone',
    skills: [
      { name: 'Angular y TypeScript', percentage: 90, level: 'excellent' },
      { name: 'React', percentage: 85, level: 'very-good' },
      { name: 'Flutter (Dart)', percentage: 70, level: 'good' },
      { name: 'PrimeNG, Bootstrap, Tailwind', percentage: 85, level: 'very-good' },
      { name: 'JavaScript, HTML5, CSS3', percentage: 90, level: 'excellent' },
    ],
  },
  {
    name: 'Backend',
    icon: 'lucide:server',
    skills: [
      { name: '.NET / C#', percentage: 85, level: 'very-good' },
      { name: 'Node.js y Slim PHP', percentage: 80, level: 'very-good' },
      { name: 'PostgreSQL, MySQL, SQL Server', percentage: 90, level: 'excellent' },
      { name: 'Microservicios y APIs REST', percentage: 85, level: 'very-good' },
      { name: 'Kafka, Redis, MongoDB', percentage: 70, level: 'good' },
    ],
  },
  {
    name: 'Herramientas y otros',
    icon: 'lucide:wrench',
    skills: [
      { name: 'Git y Jenkins CI/CD', percentage: 90, level: 'excellent' },
      { name: 'Azure', percentage: 75, level: 'good' },
      { name: 'Adobe Commerce (Magento 2)', percentage: 90, level: 'excellent' },
      { name: 'Scrum y Agile', percentage: 80, level: 'very-good' },
      { name: 'Desarrollo asistido por IA (Claude Code, Windsurf)', percentage: 85, level: 'very-good' },
    ],
  },
];
