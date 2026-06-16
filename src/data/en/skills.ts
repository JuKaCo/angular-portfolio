import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    name: 'Technologies',
    icon: 'lucide:code-xml',
    skills: [
      { name: 'SQL, databases', percentage: 80, level: 'very-good' },
      { name: 'PHP, .NET (Backend)', percentage: 80, level: 'very-good' },
      { name: 'Android, MAUI (Mobile)', percentage: 50, level: 'average' },
      { name: 'Bootstrap, Material, PrimeNG', percentage: 80, level: 'very-good' },
      { name: 'JavaScript, Angular, React (Frontend)', percentage: 90, level: 'excellent' },
    ],
  },
  {
    name: 'Tools',
    icon: 'lucide:wrench',
    skills: [
      { name: 'Git & Postman', percentage: 90, level: 'excellent' },
      { name: 'Adobe Commerce (Magento 2)', percentage: 90, level: 'excellent' },
      { name: 'Linux Server Administration', percentage: 80, level: 'very-good' },
      { name: 'Navicat, Workbench', percentage: 90, level: 'excellent' },
      { name: 'MuleSoft, ActiveMQ', percentage: 70, level: 'good' },
    ],
  },
  {
    name: 'Methodologies',
    icon: 'lucide:workflow',
    skills: [
      { name: 'Scrum', percentage: 80, level: 'very-good' },
      { name: 'PMBOK', percentage: 50, level: 'average' },
      { name: 'Design Thinking', percentage: 70, level: 'good' },
      { name: 'CI/CD', percentage: 50, level: 'average' },
      { name: 'Software Architecture', percentage: 50, level: 'average' },
    ],
  },
];
