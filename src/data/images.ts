import type { ImageMetadata } from 'astro';
import hicombo from '../assets/images/hicombo.jpg';
import portfolio from '../assets/images/portfolio.jpg';
import profile from '../assets/images/profile.jpg';
import unknown from '../assets/images/unknown.jpg';
import roger from '../assets/images/roger.jfif';
import sulagno from '../assets/images/sulagno.jfif';

/** Maps content data keys to optimized, build-time image assets. */
export const projectImages: Record<string, ImageMetadata> = {
  hicombo,
  portfolio,
};

export const avatarImages: Record<string, ImageMetadata> = {
  unknown,
  roger,
  sulagno,
};

export const profileImage = profile;
