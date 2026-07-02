import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'lucide:monitor-smartphone',
    skills: [
      { name: 'Angular & TypeScript', percentage: 90, level: 'excellent' },
      { name: 'React', percentage: 85, level: 'very-good' },
      { name: 'PrimeNG, Bootstrap, Tailwind', percentage: 85, level: 'very-good' },
      { name: 'JavaScript, HTML5, CSS3', percentage: 90, level: 'excellent' },
    ],
  },
  {
    name: 'Backend',
    icon: 'lucide:server',
    skills: [
      { name: '.NET / C#', percentage: 85, level: 'very-good' },
      { name: 'Node.js & Slim PHP', percentage: 80, level: 'very-good' },
      { name: 'PostgreSQL, MySQL, SQL Server', percentage: 90, level: 'excellent' },
      { name: 'Microservices & REST APIs', percentage: 85, level: 'very-good' },
      { name: 'Kafka, Redis, MongoDB', percentage: 70, level: 'good' },
    ],
  },
  {
    name: 'Tools & Others',
    icon: 'lucide:wrench',
    skills: [
      { name: 'Git & Jenkins CI/CD', percentage: 90, level: 'excellent' },
      { name: 'Azure', percentage: 75, level: 'good' },
      { name: 'Adobe Commerce (Magento 2)', percentage: 90, level: 'excellent' },
      { name: 'Scrum & Agile', percentage: 80, level: 'very-good' },
      { name: 'AI-assisted dev (Claude Code, Windsurf)', percentage: 85, level: 'very-good' },
      { name: 'Automated testing (E2E, unit, load)', percentage: 80, level: 'very-good' },
    ],
  },
];
