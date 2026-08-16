import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const poemas = await getCollection('poemas');
  const cuentos = await getCollection('cuentos');
  const pensamientos = await getCollection('pensamientos');
  const miradas = await getCollection('miradas');
  const viajes = await getCollection('viajes');
  const sonidos = await getCollection('sonidos');

  const allItems = [
    ...poemas.map(p => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.body?.slice(0, 160) || 'Poema',
      link: `/posts/poemas-${p.id}/`,
      categories: ['Poesía', ...(p.data.tags || [])],
    })),
    ...cuentos.map(c => ({
      title: c.data.title,
      pubDate: c.data.date,
      description: c.data.summary || c.body?.slice(0, 160) || 'Cuento',
      link: `/posts/cuentos-${c.id}/`,
      categories: ['Cuentos', ...(c.data.tags || [])],
    })),
    ...pensamientos.map(p => ({
      title: p.data.title || `Pensamiento del ${new Date(p.data.date).toLocaleDateString('es-ES')}`,
      pubDate: p.data.date,
      description: p.body?.slice(0, 160) || '',
      link: `/posts/pensamientos-${p.id}/`,
      categories: ['Diario', ...(p.data.tags || [])],
    })),
    ...miradas.map(m => ({
      title: m.data.title || `Mirada: ${m.data.analogDate}`,
      pubDate: m.data.date,
      description: m.data.footnote || 'Fotografía analógica',
      link: `/posts/miradas-${m.id}/`,
      categories: ['Fotografía', ...(m.data.tags || [])],
    })),
    ...viajes.map(v => ({
      title: v.data.title,
      pubDate: v.data.date,
      description: `Crónica de viaje en ${v.data.location.name}`,
      link: `/posts/viajes-${v.id}/`,
      categories: ['Viajes', ...(v.data.tags || [])],
    })),
    ...sonidos.map(s => ({
      title: s.data.title,
      pubDate: s.data.date,
      description: `Grabación sonora en ${s.data.location?.name || 'campo'}`,
      link: `/posts/sonidos-${s.id}/`,
      categories: ['Sonidos', ...(s.data.tags || [])],
    })),
  ];

  allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return rss({
    title: 'Diario de Artista',
    description: 'Un diario creativo abierto: poesía, cuentos, música, fotografía y relatos de viaje.',
    site: context.site,
    items: allItems,
    customData: `<language>es</language>`,
  });
}
