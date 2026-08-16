# 🏛️ Munay Amaru — Pabellón de Arte Contemporáneo & Santuario Sonoro

Santuario digital de creación interdisciplinaria, arte contemporáneo, poesía contemplativa y fonoteca en 432 Hz de **Munay Amaru** (**Omar Trillo**).

- 📦 **Repositorio GitHub:** [https://github.com/ruwaq/munay-sounds](https://github.com/ruwaq/munay-sounds)
- 🌐 **Plataformas Oficiales:** [Bandcamp](https://munaysounds.bandcamp.com/) · [SoundCloud](https://soundcloud.com/munay_sounds) · [YouTube](https://youtube.com/@munay_sounds) · [Audius](https://audius.co/munaysounds)

---

## 🌿 Identidad & Círculo de Creadores

- **El Artista:** **Munay Amaru** (**Omar Trillo**).
  - *Munay*: Amor incondicional y voluntad afectiva desde el centro del corazón.
  - *Amaru*: Serpiente sagrada andina de la sabiduría, transmutación y flujo eterno del agua.
- **Colaboradores de Artes Plásticas & Ingeniería:**
  - **Eliana Colzani (Italia):** Obras de portada para *I Am a Tree* (Óleo botánico sobre lino) y *Hula Hop* (Tintas orgánicas sobre papel de algodón).
  - **Jimena Vílchez (Perú):** Obra visual, grabado calcográfico y texturas textiles en *Proyecto Tu Silencio!*.
  - **@gastipuray / Gastón Puray (Perú):** Obra visual en tinta china ritual *sumi-e* y gráfica andina surrealista en *Dioses EP*.
  - **Omar Franco (Perú / Europa):** Grabación analógica, ingeniería acústica, mezcla y masterización.

---

## 🏛️ Estructura del Museo & Pabellones

| # | Pabellón | Ruta Local | Propósito & Contenido |
| :---: | :--- | :--- | :--- |
| **1** | **⛩️ Santuario** | `/` | Atrio de entrada contemplativo, Obra en Resonancia del día (*I Am a Tree*) y aforismo de la pausa. |
| **2** | **🏛️ Galería** | `/tienda/` | Gran sala de exhibición permanente: vitrinas de museo en paspartú flotante (*Float Mount*) y placas curatoriales. |
| **3** | **📻 Pabellón Sonoro** | `/sonidos/` | Cámara acústica en 432 Hz con guía de respiración *Samay (4-4-6-2)*, *Piedras al Mar*, *Nacer*, *Allinllachu*, *Luce di Alba*. |
| **4** | **📜 Poética** | `/palabras/` | Alcoba literaria: poemas mayores (*Liturgia de las piedras*, *Anatomía de la raíz*, *El peso de la luz*) y filosofía *Ayni*. |
| **5** | **🌐 Geopoética** | `/miradas/` | Cuadernos de expedición espiritual del artista nómada: Rumania (Apuseni), Polonia (Małopolska), Grecia (Kalamata) y Perú (Andes/Pacífico). |
| **6** | **🕯️ Manifiesto** | `/sobre/` | Manifiesto ético del silencio, identidad de Munay Amaru y círculo de creadores. |

---

## 🚀 Comandos de Terminal en Termux

```bash
# 1. Entrar al proyecto
cd ~/projects/diario-artista

# 2. Ver la web en local desde tu teléfono (Abre http://localhost:4321)
npm run preview

# 3. Compilar el sitio estático para producción (28 páginas en ~2.2 segundos)
npm run build

# 4. Modo desarrollo en vivo (Hot reload)
npm run dev

# 5. Guardar cambios y subir a GitHub
git add .
git commit -m "feat: actualizar contenido"
git push origin main
```

---

## ✍️ Cómo Publicar Nuevas Obras con `nano`

Todas las piezas se editan como archivos Markdown limpios en `src/content/`:

- **Poemas:** `src/content/poemas/`
- **Sonidos / Tracks:** `src/content/sonidos/`
- **Expediciones de Viaje:** `src/content/viajes/`
- **Registros Visuales:** `src/content/miradas/`
- **Pensamientos & Aforismos:** `src/content/pensamientos/`

---

## 🔒 Credenciales & Despliegue

- Las credenciales privadas de GitHub y Cloudflare se encuentran aisladas de forma segura en `~/.secrets.env` con permisos `chmod 600`.
- El flujo de integración continua está configurado en `.github/workflows/deploy.yml`.
