/**
 * Utilidades de internacionalización y metadatos para Munay Amaru — Pabellón de Arte Zen.
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
  es: 'Munay Amaru',
  en: 'Munay Amaru',
};

export const SITE_SUBTITLE = {
  es: 'Diario de vida · Pensamientos, sonidos, trazos & rutas',
  en: 'Life journal · Notes, sounds, marks & routes',
};

export const SITE_DESCRIPTION = {
  es: 'Diario de vida y cuaderno abierto de Munay Amaru (Omar Trillo). Registros de lo hecho: música, notas, gráfica y caminos.',
  en: 'Open life journal by Munay Amaru (Omar Trillo). Records of existence: music, notes, art and roads.',
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
