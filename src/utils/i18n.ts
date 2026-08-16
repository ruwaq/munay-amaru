/**
 * Utilidades de internacionalización para Munay Sounds — Diario de Artista.
 * Español (es) en raíz (/), Inglés (en) con prefijo (/en).
 * Soporte para contenido asimétrico.
 */

export type Locale = 'es' | 'en';

export const SITE_TITLE = {
  es: 'Munay Sounds',
  en: 'Munay Sounds',
};

export const SITE_SUBTITLE = {
  es: 'diario sonoro & cuaderno creativo abierto',
  en: 'sound journal & open creative notebook',
};

export const SITE_DESCRIPTION = {
  es: 'Diario creativo y fonoteca analógica de Munay Sounds: música, poesía, paisajes sonoros, fotografía y relatos.',
  en: 'Creative journal and analog sound library by Munay Sounds: music, poetry, field recordings, photography and travel tales.',
};

export const SOCIAL_LINKS = {
  bandcamp: 'https://munaysounds.bandcamp.com/',
  soundcloud: 'https://soundcloud.com/munay_sounds',
  youtube: 'https://youtube.com/@munay_sounds',
  instagram: 'https://instagram.com/munay_sounds',
  linktree: 'https://linktr.ee/munay_sounds',
};

export const NAV_LABELS = {
  es: {
    home: 'Ahora',
    words: 'Palabras',
    gazes: 'Miradas',
    sounds: 'Sonidos',
    about: 'Munay',
  },
  en: {
    home: 'Now',
    words: 'Words',
    gazes: 'Gazes',
    sounds: 'Sounds',
    about: 'Munay',
  },
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
