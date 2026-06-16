import type { EducationItem, LanguageSkill } from '../types';

export const education: EducationItem[] = [
  {
    title: 'Scrum Fundamentals Certified (SFC™)',
    org: 'scrumstudy.com',
    year: '2022',
    certificateUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=896454',
  },
  {
    title: 'Certificado EF SET de inglés 60/100 (B2 Intermedio Superior)',
    org: 'efset.org',
    year: '2023',
    certificateUrl: 'https://www.efset.org/cert/YV8GZu',
  },
  {
    title: 'Diplomado en Educación Superior',
    org: 'Universidad Mayor de San Andrés, BO',
    year: 'Noviembre 2017',
  },
  {
    title: 'Licenciatura en Informática',
    org: 'Universidad Mayor de San Andrés, BO',
    year: 'Julio 2015',
  },
];

export const languages: LanguageSkill[] = [
  { name: 'Inglés', level: 'B2 Intermedio superior' },
];
