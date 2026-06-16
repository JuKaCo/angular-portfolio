import type { ImageMetadata } from 'astro';
import hicombo from '../assets/images/hicombo.jpg';
import portfolio from '../assets/images/portfolio.jpg';
import quickytools from '../assets/images/quickytools.png';
import profile from '../assets/images/profile.jpg';
// import cafeResto from '../assets/images/cafe-resto.png'; // TODO: add once CafeResto URL is provided
import unknown from '../assets/images/unknown.jpg';
import roger from '../assets/images/roger.jfif';
import sulagno from '../assets/images/sulagno.jfif';

/** Maps content data keys to optimized, build-time image assets. */
export const projectImages: Record<string, ImageMetadata> = {
  hicombo,
  portfolio,
  quickytools,
  // 'cafe-resto': cafeResto, // TODO: add once CafeResto URL is provided
};

export const avatarImages: Record<string, ImageMetadata> = {
  unknown,
  roger,
  sulagno,
};

export const profileImage = profile;
