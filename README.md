# 🌲 Munay Amaru — Mundo 2D Interactivo & Archivo Vivo

Mundo espacial 2D interactivo (estilo *Gather.town / RPG top-down*) y diario de vida de **Munay Amaru** (**Omar Trillo**). 

Exploración en mapa de bosque con personaje caminante, puntos de interacción para arte, música en 432 Hz, poemas y bitácoras nómadas, optimizado para móviles (*tap-to-move*) y con modo lista accesible.

- 📦 **Repositorio GitHub:** [https://github.com/ruwaq/munay-amaru](https://github.com/ruwaq/munay-amaru)
- 🌐 **Plataformas:** [Bandcamp](https://munaysounds.bandcamp.com/) · [SoundCloud](https://soundcloud.com/munay_sounds) · [YouTube](https://youtube.com/@munay_sounds) · [Audius](https://audius.co/munaysounds)
- 🚀 **Despliegue:** [https://munay-amaru.pages.dev](https://munay-amaru.pages.dev) (Cloudflare Pages)

---

## 🛠️ Stack Tecnológico

- **Entorno & Build:** Vite (ESM rápido y ultra-ligero)
- **Motor 2D:** KAPLAY.js (aceleración WebGL 2D por GPU, ~45 kB)
- **Capa UI & Modales:** HTML5 semántico + CSS3 moderno (con tipografías *Cormorant Garamond* y *Plus Jakarta Sans*)
- **Controles:** Teclado (WASD / Flechas) + Táctil móvil (*Tap-to-move* inteligente)
- **Accesibilidad:** Modo dual (Mundo 2D interactivo / Vista directa en lista)

---

## 🗺️ Espacios del Mapa

1. 🏛️ **Taller de Trazos:** Galería de láminas, óleos botánicos (*Munay*, *I Am a Tree*, *Retrato de Riga*).
2. 🎶 **Santuario Sonoro (432 Hz):** Cintas y pistas de campo con reproductor nativo.
3. 🔥 **Fogata de Palabras:** Poemas, fábulas de micelio y notas de libreta.
4. 🧭 **Carreta de Rutas:** Crónicas de residencia nómada (Rumania, Polonia, Andes, Grecia, Báltico).
5. 📬 **Buzón de Correspondencia:** Contacto directo por correo y enlaces oficiales.

---

## 📚 Documentación

- [Arquitectura del Mundo 2D](docs/ARQUITECTURA_MUNDO_2D.md)
- [Dossier de Información & Obra de Munay Amaru](docs/INFORMACION_MUNAY_AMARU.md)
- [Dossier Histórico de Obras y Espacios](docs/DOSSIER_OBRAS_Y_ESPACIOS.md)

---

## 📁 Estructura del Proyecto

```text
├── assets/                  # Medios: audios reales y fotografías de láminas
│   ├── audio/              # Grabaciones en 432 Hz
│   └── images/             # Óleos, pasteles y polaroids
├── contenido/               # Textos y escritos puros en Markdown
│   ├── cuentos/
│   ├── miradas/
│   ├── pensamientos/
│   ├── poemas/
│   ├── sonidos/
│   └── viajes/
├── docs/                    # Documentación de arquitectura e identidad
└── archivo-antiguo/         # Copia de seguridad completa de versiones anteriores
```
