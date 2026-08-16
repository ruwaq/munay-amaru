/**
 * Utilidades de internacionalización y metadatos para Munay Sounds — Pabellón de Arte Zen.
 * Español (es) en raíz (/), Inglés (en) con prefijo (/en).
 */

export type Locale = 'es' | 'en';

export const ARTIST_INFO = {
  civilName: 'Omar Trillo',
  spiritualName: 'Munay Amaru',
  spiritualMeaning: {
    es: '«Munay» (amor incondicional, voluntad pura desde el corazón) y «Amaru» (serpiente sagrada andina de la sabiduría, transmutación y el flujo eterno del agua).',
    en: '«Munay» (unconditional love, pure will from the heart) and «Amaru» (the sacred Andean serpent of wisdom, transmutation, and the eternal flow of water).'
  }
};

export const SITE_TITLE = {
  es: 'Munay Sounds',
  en: 'Munay Sounds',
};

export const SITE_SUBTITLE = {
  es: 'Pabellón de Arte Contemporáneo & Santuario Sonoro',
  en: 'Contemporary Art Pavilion & Sound Sanctuary',
};

export const SITE_DESCRIPTION = {
  es: 'Santuario de creación y fonoteca en 432 Hz de Munay Amaru (Omar Trillo): música orgánica, poesía contemplativa, artes plásticas y geopoética.',
  en: 'Creation sanctuary and 432 Hz sound vault by Munay Amaru (Omar Trillo): organic music, contemplative poetry, fine arts, and geopoetics.',
};

export const SOCIAL_LINKS = {
  bandcamp: 'https://munaysounds.bandcamp.com/',
  soundcloud: 'https://soundcloud.com/munay_sounds',
  youtube: 'https://youtube.com/@munay_sounds',
  instagram: 'https://instagram.com/munay_sounds',
  linktree: 'https://linktr.ee/munay_sounds',
};

export const LOCALES: Record<Locale, {
  label: string;
  code: string;
  pathPrefix: string;
  htmlLang: string;
}> = {
  es: { label: 'Español', code: 'es', pathPrefix: '', htmlLang: 'es-ES' },
  en: { label: 'English', code: 'en', pathPrefix: '/en', htmlLang: 'en-US' },
};

export function getLocaleFromUrl(url: URL): Locale {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en') return 'en';
  return 'es';
}
