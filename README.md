# 🎨 Diario de Artista — Fanzine Digital & Cuaderno Abierto

Blog estático personal para artista multidisciplinario (poesía, cuentos, sonidos, fotografía y viajes). Diseñado con estética editorial vintage táctil, optimizado para escribirse desde Android/Termux con `nano` y desplegarse a costo $0.

---

## 🚀 Inicio Rápido en Termux

### 1. Previsualizar localmente
```bash
cd ~/projects/diario-artista
npm run dev
```
Abre en el navegador de tu móvil: `http://localhost:4321`

### 2. Compilar sitio estático
```bash
npm run build
```
Genera la carpeta `dist/` con 100% HTML/CSS estático ultrarrápido (en ~2 segundos).

---

## ✍️ Cómo Escribir y Publicar con `nano`

Todas las entradas son archivos Markdown en `src/content/`:

| Tipo | Carpeta | Ejemplo |
| :--- | :--- | :--- |
| **Poemas** | `src/content/poemas/` | `nano src/content/poemas/mi-poema.md` |
| **Cuentos** | `src/content/cuentos/` | `nano src/content/cuentos/mi-cuento.md` |
| **Pensamientos** | `src/content/pensamientos/` | `nano src/content/pensamientos/nota-hoy.md` |
| **Miradas** | `src/content/miradas/` | `nano src/content/miradas/polaroid.md` |
| **Viajes** | `src/content/viajes/` | `nano src/content/viajes/dia-01.md` |
| **Sonidos** | `src/content/sonidos/` | `nano src/content/sonidos/lluvia.md` |

### Plantilla rápida para nuevo poema:
```markdown
---
title: "Título del Poema"
date: 2026-08-16
draft: false
location: "Lugar de escritura"
audio:
  src: "/audio/mi-audio.mp3"
  duration: "01:30"
tags:
  - silencio
  - noche
---

Escribe tus versos aquí con ritmo libre.
```

---

## ☁️ Despliegue a Costo $0 (Cloudflare Pages / Vercel)

### Paso 1: Subir a tu repositorio GitHub
```bash
cd ~/projects/diario-artista
git init
git branch -M main
git add .
git commit -m "feat: diario de artista v1"
git remote add origin git@github.com:TU_USUARIO/diario-artista.git
git push -u origin main
```

### Paso 2: Conectar a Cloudflare Pages (Recomendado - Tráfico ilimitado)
1. En [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Selecciona tu repositorio.
3. Build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
4. ¡Listo! Cada `git push` desde Termux compilará y actualizará el blog en ~30 segundos.

---

## 💡 Atajos de Terminal para Termux (`~/.zshrc` o `~/.bashrc`)

Agrega estas líneas a tu `~/.zshrc` para máxima velocidad:

```bash
# Entrar al blog
alias blog="cd ~/projects/diario-artista"

# Publicar en un solo comando
pub() {
  cd ~/projects/diario-artista
  git add .
  git commit -m "$1"
  git push origin main
  echo "🚀 Publicación enviada. Estará en vivo en 30 segundos."
}
```
