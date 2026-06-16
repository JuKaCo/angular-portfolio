import type { Social } from './types';

/** Locale-agnostic site identity & config. */
export const site = {
  name: 'Juan Carlos Condori Caviña',
  shortName: 'Juan Carlos Condori',
  email: 'jucaco89@gmail.com',
  location: 'El Alto, La Paz, Bolivia',
  jobTitle: 'Full Stack Developer & E-commerce Specialist',
  /** Google Search Console verification (preserved from the Angular app). */
  googleSiteVerification: 'HQVZ48AxJnbNzgI5_f5PTP-5LiNjXJFYgo1gNONHvWQ',
  /** Stable, unhashed social image under public/ (crawlers need a fixed URL). */
  ogImage: 'og/profile.jpg',
} as const;

export const socials: Social[] = [
  {
    icon: 'simple-icons:linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/juan-carlos-condori-cavi%C3%B1a-6a37b3163/',
  },
  { icon: 'simple-icons:github', label: 'GitHub', href: 'https://github.com/JuKaCo' },
  { icon: 'simple-icons:instagram', label: 'Instagram', href: 'https://www.instagram.com/jukarioka' },
  {
    icon: 'simple-icons:skype',
    label: 'Skype',
    href: 'https://join.skype.com/invite/kYIbMnYHCCkt',
  },
];
