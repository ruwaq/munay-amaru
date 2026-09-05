# 📌 Guía y Memoria de Contexto para la Próxima Sesión
### *Proyecto: Munay Amaru — Diario de Vida · Pliego de Gaceta Antigua*

---

## 🧭 Estado Actual del Proyecto

1. **Concepto Rector:** **Diario de Vida** (sin etiquetas de museo, sin definirse como artista; solo registros reales de lo que se pudo hacer: pensamientos, arte, música, código y caminos).
2. **Estética & Layout:**
   - **Pliego de periódico antiguo / gaceta asimétrica de 3 columnas** con CSS Grid.
   - Tipografías: *Cormorant Garamond* (cuerpo y plomo), *Cinzel* (titulares y labels), *Courier Prime* (terminal y notas de campo), *Plus Jakarta Sans* (lectura limpia).
   - Sin tarjetas flotantes, sin sombras ni bordes redondeados modernos.
   - Filetes de imprenta, fotograbados con filtro de litografía y texto justificado con separación silábica.
3. **Páginas y Rutas Actualizadas (28 páginas estáticas):**
   - `/`: Portada en 3 columnas (Nota de Terminal real de Termux, Obra *I Am a Tree* con capitular, reproductor 432 Hz y despachos de viaje).
   - `/tienda/`: Cuaderno de Trazos & Láminas (Eliana Colzani, Jimena Vílchez, @gastipuray, Omar Franco).
   - `/sonidos/`: Cintas Sonoras en 432 Hz y registros de campo.
   - `/palabras/`: Papeles sueltos, poemas, relatos y notas de libreta.
   - `/miradas/`: Cuadernos de ruta y polaroids analógicas.
   - `/sobre/`: Colofón vital de Munay Amaru (Omar Trillo).
   - `/posts/[...slug]`: Detalle individual limpio de cada pieza.
4. **Infraestructura:**
   - **Astro 5.4.2** (Static output, 28 páginas compiladas en ~2.4s).
   - Repositorio GitHub: `https://github.com/ruwaq/munay-sounds` (`main`).
   - Despliegue listo para Cloudflare Pages vía `wrangler.json`.

---

## 🛠️ Comandos de Reactivación Rápida
```bash
# Iniciar servidor de desarrollo en Termux
cd ~/projects/munay-amaru
npm run dev

# Compilar para producción
npm run build

# Subir a GitHub
git add .
git commit -m "feat: transformar a diario de vida estilo periodico antiguo"
git push origin main
```
