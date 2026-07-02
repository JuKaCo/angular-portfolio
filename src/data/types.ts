/** Shared content types for the bilingual data layer.
 *  Each locale under src/data/{en,es} exports objects matching these shapes. */

export interface Social {
  /** Iconify name, e.g. "simple-icons:linkedin" */
  icon: string;
  label: string;
  href: string;
}

export interface Hero {
  /** Lead-in shown before the rotating keywords, e.g. "Specialized in:" */
  intro: string;
  /** Keywords cycled by the typing animation. */
  keywords: string[];
}

export interface About {
  occupation: string;
  bio: string;
  bio2: string;
  facts: { icon: string; label: string }[];
  email: string;
}

export interface Skill {
  name: string;
  /** 0-100 proficiency, drives the animated bar. */
  percentage: number;
  level: 'excellent' | 'very-good' | 'good' | 'average';
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  title: string;
  org: string;
  year: string;
  certificateUrl?: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface Project {
  title: string;
  /** key into the projectImages map (src/data/images.ts), resolved at build time */
  image: string;
  tech: string;
  description: string;
  liveUrl?: string;
  liveLabel?: string;
  sourceUrl?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** key into the images map resolved at build time */
  avatar: 'unknown' | 'roger' | 'sulagno';
}

/** UI chrome strings (nav labels, section titles, buttons). */
export interface UI {
  nav: {
    home: string;
    about: string;
    skills: string;
    cv: string;
    portfolio: string;
    contact: string;
  };
  sections: {
    about: string;
    skills: string;
    cv: string;
    education: string;
    experience: string;
    portfolio: string;
    contact: string;
    testimonials: string;
    languages: string;
    interests: string;
  };
  buttons: {
    details: string;
    projectDetails: string;
    source: string;
    viewLive: string;
    viewCertificate: string;
    getInTouch: string;
    downloadCv: string;
  };
  interests: { sport: string };
  meta: {
    title: string;
    description: string;
  };
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface LocaleData {
  hero: Hero;
  about: About;
  stats: Stat[];
  skills: SkillCategory[];
  experience: Job[];
  education: EducationItem[];
  languages: LanguageSkill[];
  projects: Project[];
  testimonials: Testimonial[];
  ui: UI;
}
