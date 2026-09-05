# 📰 Munay Amaru — Diario de Vida · Pliego de Gaceta Antigua

Diario de vida, notas de campo, sonidos en 432 Hz, trazos sobre papel y lino, rutas nómadas y líneas de código de **Munay Amaru** (**Omar Trillo**). Sin poses ni etiquetas institucionales: registros de lo que se pudo hacer y dejar en este tiempo.

- 📦 **Repositorio GitHub:** [https://github.com/ruwaq/munay-sounds](https://github.com/ruwaq/munay-sounds)
- 🌐 **Plataformas:** [Bandcamp](https://munaysounds.bandcamp.com/) · [SoundCloud](https://soundcloud.com/munay_sounds) · [YouTube](https://youtube.com/@munay_sounds) · [Audius](https://audius.co/munaysounds)
- 🚀 **Despliegue:** [https://munay-amaru.pages.dev](https://munay-amaru.pages.dev) (Cloudflare Pages)

---

## 🌿 Raíz & Colaboraciones

- **Registro Vital:** **Munay Amaru** (**Omar Trillo**).
  - *Munay*: Amor incondicional y voluntad desde el corazón.
  - *Amaru*: Serpiente andina de la sabiduría, transmutación y flujo del agua.
- **Manos & Diálogos:**
  - **Eliana Colzani (Italia):** Óleo botánico sobre lino (*I Am a Tree*) y tintas orgánicas (*Hula Hop*).
  - **Jimena Vílchez (Perú):** Grabado calcográfico y texturas textiles (*Proyecto Tu Silencio!*).
  - **@gastipuray / Gastón Puray (Perú):** Tinta china sumi-e y gráfica andina (*Dioses EP*).
  - **Omar Franco (Perú / Europa):** Grabación analógica, ingeniería acústica, mezcla y masterización.

---

## 📰 Estructura del Diario (Pliegos & Secciones)

| # | Sección | Ruta | Estética & Contenido |
| :---: | :--- | :--- | :--- |
| **1** | **📰 Diario** | `/` | **Portada de Gaceta en 3 columnas asimétricas**: nota real de Termux bajo la lluvia (`23:18`), fotograbado de *I Am a Tree* con capitular clásica, reproductor sonoro directo a 432 Hz, pausa Samay y banda inferior de despachos y versos. |
| **2** | **🎨 Trazos** | `/tienda/` | **Cuaderno de Láminas**: obras sobre lino, papel de algodón, sumi-e y calcografía presentadas como láminas de taller de imprenta. |
| **3** | **📻 Sonidos** | `/sonidos/` | **Cintas Sonoras en 432 Hz**: grabaciones de campo, guitarras orgánicas, ficha técnica de microfonía analógica y respiración Samay. |
| **4** | **📜 Palabras** | `/palabras/` | **Papeles Sueltos**: poemas mayores, relatos de la lentitud y notas breves escritas en la terminal. |
| **5** | **🗺️ Rutas** | `/miradas/` | **Cuadernos de Camino**: despachos de viaje por Cárpatos (Rumania), Małopolska (Polonia), Kalamata (Grecia) y los Andes, con polaroids analógicas. |
| **6** | **✒️ Colofón** | `/sobre/` | **Colofón Vital**: testimonio honesto del diario, raíz del nombre andino y notas de correspondencia epistolar. |

---

## 🚀 Comandos de Terminal en Termux

```bash
# 1. Entrar al proyecto
cd ~/projects/munay-amaru

# 2. Modo desarrollo en vivo (Hot reload en tu teléfono)
npm run dev

# 3. Compilar el sitio estático para producción (28 páginas en ~2.4 segundos)
npm run build

# 4. Probar la versión compilada en local
npm run preview

# 5. Guardar cambios y subir a GitHub
git add .
git commit -m "feat: transformar a diario de vida estilo periodico antiguo"
git push origin main
```

---

## ✍️ Publicar Nuevas Entradas desde Termux con `nano`

Todas las entradas son archivos Markdown limpios en `src/content/`:

- **Notas de terminal / Pensamientos:** `src/content/pensamientos/` (soporta campos: `weather`, `device`, `mood`)
- **Poemas:** `src/content/poemas/`
- **Cintas Sonoras:** `src/content/sonidos/`
- **Cuadernos de Viaje:** `src/content/viajes/`
- **Polaroids Analógicas:** `src/content/miradas/`
- **Relatos:** `src/content/cuentos/`

---

## 🔒 Despliegue & Seguridad

- Build estático con **Astro 5** compilado a `./dist/`.
- Conectado a **Cloudflare Pages** vía `wrangler.json`.
- Secretos aislados en `~/.secrets.env` (`chmod 600`).
