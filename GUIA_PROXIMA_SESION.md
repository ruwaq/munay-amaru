# 📌 Guía y Memoria de Contexto para la Próxima Sesión
### *Proyecto: Munay Amaru — Pabellón de Arte Contemporáneo & Santuario Sonoro*

---

## 🧭 Estado Actual del Proyecto (Cierre de Sesión)

1. **Nombre Oficial:** **Munay Amaru** (Nombre espiritual andino de **Omar Trillo**).
2. **Estética & UX:**
   - Inspirada en **Tadao Ando**, **Isamu Noguchi**, concepto japonés del ***Ma*** (espacio vacío fértil) y el ***Wabi-Sabi***.
   - Eliminados por completo los elementos tipo scrapbook / fanzine informal.
   - Vitrinas de museo contemporáneo en paspartú flotante (*Float Mount Frame*) con placas curatoriales de sala (*Museum Labels*).
3. **Catálogo de Obras Integradas:**
   - **Eliana Colzani:** Portadas de *I Am a Tree* (Óleo botánico sobre lino) y *Hula Hop* (Tintas orgánicas sobre papel de algodón).
   - **Jimena Vílchez:** Obra visual y grabado calcográfico en *Proyecto Tu Silencio!*.
   - **@gastipuray (Gastón Puray):** Obra visual en tinta china *sumi-e* en *Dioses EP*.
   - **Omar Franco:** Grabación analógica, ingeniería acústica y masterización.
   - **Munay Amaru:** *Piedras al Mar*, *Nacer*, *Partes Del Universo*, *Allinllachu*, *Luce di Alba*, *Una y otra vez*, *SEIS*, *La Noche Azul Remix*.
4. **Pabellón Sonoro & 432 Hz:**
   - Círculo de respiración *Samay (4-4-6-2)*.
   - Insignias de frecuencia 432 Hz y fichas técnicas de microfonía de campo.
5. **Geopoética Nómada:**
   - 4 crónicas de viaje espiritual: Rumania (*Cárpatos*), Polonia (*Małopolska*), Grecia (*Kalamata*) y Perú (*Andes y Costa Pacífica*).
6. **Infraestructura Técnica & Despliegue:**
   - **Framework:** Astro 5 (Static Output).
   - **Build:** 28 páginas estáticas compiladas en 2.2 segundos.
   - **Git & GitHub:** Repositorio en `https://github.com/ruwaq/munay-sounds` con branch `main` y GitHub Actions CI configurado.
   - **Credenciales:** Aisladas y protegidas en `~/.secrets.env` (`chmod 600`).

---

## 🎯 Ideas y Tareas Abiertas para la Siguiente Sesión

- [ ] **Despliegue en Cloudflare Pages:** Conectar el repositorio de GitHub `ruwaq/munay-sounds` en el dashboard de Cloudflare para tener dominio `.pages.dev` o vincular un dominio personalizado propio.
- [ ] **Incorporación de Audios MP3 Reales:** Reemplazar los archivos de prueba en `public/audio/` con los audios master en alta fidelidad cuando estén listos.
- [ ] **Nuevas Salas o Exposiciones:** Añadir nuevas series pictóricas o escultóricas con sus correspondientes fichas de museo.
- [ ] **Modo Inmersivo de Pantalla Completa:** Implementar un botón opcional de "Entrar en Penumbra / Modo Meditación Profunda" en el Pabellón Sonoro con visualizador cimático suave.

---

## 🛠️ Comandos de Reactivación Rápida
```bash
# Iniciar servidor local
cd ~/projects/munay-amaru
npm run preview

# Compilar y subir cambios
git add .
git commit -m "feat: actualizar"
git push origin main
```
