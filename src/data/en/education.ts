import type { EducationItem, LanguageSkill } from '../types';

export const education: EducationItem[] = [
  {
    title: 'Scrum Fundamentals Certified (SFC™)',
    org: 'scrumstudy.com',
    year: '2022',
    certificateUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=896454',
  },
  {
    title: 'EF SET English Certificate 60/100 (B2 Upper Intermediate)',
    org: 'efset.org',
    year: '2023',
    certificateUrl: 'https://www.efset.org/cert/YV8GZu',
  },
  {
    title: 'Higher Education Graduate',
    org: 'Universidad Mayor de San Andrés, BO',
    year: 'November 2017',
  },
  {
    title: "Bachelor's in Computer Science",
    org: 'Universidad Mayor de San Andrés, BO',
    year: 'July 2015',
  },
];

export const languages: LanguageSkill[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Advanced' },
];
