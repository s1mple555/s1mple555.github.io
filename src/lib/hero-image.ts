import { getImage } from 'astro:assets';
import { siteConfig } from '../config';

export async function getHeroImage() {
  if (!siteConfig.avatar) return null;
  return getImage({
    src: siteConfig.avatar,
    width: 960,
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 579px) min(78vw, 300px, 38svh), (max-width: 859px) clamp(240px, 34vw, 280px), (max-width: 1100px) clamp(320px, 36vw, 400px), 480px',
    format: 'webp',
    quality: 82,
    priority: true,
    decoding: 'async',
  });
}
