# 🗺️ Arquitectura del Mundo 2D Interactivo — Munay Amaru

Documento de diseño técnico y conceptual para la nueva web personal de **Munay Amaru**, inspirada en la exploración espacial 2D de **Gather.town / RPG top-down**, optimizada para dispositivos móviles y construida paso a paso.

---

## 1. Visión y Concepto Rector

Transformar la web en un **espacio espacial vivo y contemplativo**:
- En lugar de una web estática convencional o un 3D pesado, el visitante entra a un **claro de bosque 2D** (estilo pixel art / naturaleza orgánica).
- Un personaje o nómada camina por el mapa.
- Conforme explora y se acerca a elementos del entorno (cabañas, fogata, río, gramófono, caballete), se activan las obras reales de Munay Amaru: pinturas, grabaciones en 432 Hz, poemas y bitácoras de viaje.
- **Acceso universal:** Para quien tenga prisa o prefiera leer directamente, siempre habrá disponible un interruptor visible: *"Ver en modo lista"*.

---

## 2. Decisiones Técnicas Fundamentales

### A. Stack Tecnológico Elegido
- **Empaquetador:** **Vite** (rápido, ligero, estándar moderno ESM).
- **Motor 2D:** **KAPLAY.js** (el sucesor activo, mantenido y moderno de Kaboom.js).
  - *¿Por qué?* Pesa solo **~45 kB**, usa aceleración por hardware WebGL 2D por lotes (no calienta la CPU móvil), soporta mapas Tiled y maneja colisiones y cámaras suaves con poco código.
- **Capa de Contenido / UI:** **HTML5 + CSS nativo (Modales artesanales)**.
  - En lugar de renderizar textos largos o reproductores de audio en el lienzo de píxeles, la interacción abre elegantes modales HTML con tipografía serena (*Cormorant Garamond* y *Plus Jakarta Sans*) y reproductores de audio HTML5 nativos.
- **Despliegue:** Estático puro en **Cloudflare Pages / GitHub Pages** (gratuito, seguro, sin servidores de backend).

### B. Estrategia Mobile-First (Teléfonos Inteligentes)
1. **Control "Tap-to-Move" (Tocar para caminar):**
   - Elimina la frustración de los joysticks virtuales que tapan la pantalla.
   - El usuario toca con el dedo el lugar al que desea ir y el personaje camina fluidamente hacia las coordenadas esquivando obstáculos.
   - En ordenadores, se complementa con flechas y teclas `W-A-S-D`.
2. **Eficiencia Energética y Batería:**
   - Cero cálculo continuo de CPU por software: el motor descansa cuando el personaje está quieto.
   - Manejo de `100dvh` para evitar que la barra de direcciones de Safari en iOS o Chrome en Android corte el lienzo.
3. **Botón de Accesibilidad Directa:**
   - Un botón flotante permanente: *"Modo Lectura / Lista"* para acceder al contenido sin necesidad de jugar.

---

## 3. Los 5 Espacios del Mundo en el Mapa

```
                              [ Bosque Alto / Cárpatos ]
                                         │
                   ┌─────────────────────┴─────────────────────┐
                   │                                           │
         [ 🏛️ Taller de Trazos ]                    [ 🎶 Cabaña Sonora 432 Hz ]
         Caballete de pintura                        Gramófono & cuerdas
         (8 láminas y óleos)                         (14 pistas de audio)
                   │                                           │
                   └─────────────────────┬─────────────────────┘
                                         │
                              [ 🔥 Fogata de Palabras ]
                              Poemas, relatos y terminal
                                         │
                   ┌─────────────────────┴─────────────────────┐
                   │                                           │
         [ 🧭 Carreta de Rutas ]                     [ 📬 Buzón & Redes ]
         Bitácoras de 5 países                       Contacto y enlaces
```

1. **🏛️ El Taller de Trazos & Materia:**
   - Caballete de madera con pintura bajo un alero.
   - Al interactuar: abre el visor de láminas con zoom, técnica y texto (*Munay*, *I Am a Tree*, *Retrato de Riga*, etc.).
2. **🎶 El Santuario Sonoro en 432 Hz:**
   - Junto al río / agua en movimiento.
   - Al interactuar: despliega la cinta con las 14 pistas en 432 Hz, ficha técnica y reproductor.
3. **🔥 La Fogata de Palabras:**
   - Troncos para sentarse junto al fuego.
   - Al interactuar: se abre el libro de poemas, relatos (*Illari*, *La marea baja*) y notas de terminal.
4. **🧭 La Carreta de Rutas & Brújula:**
   - Equipaje nómada y poste de señales.
   - Al interactuar: bitácoras de viaje (Rumania, Polonia, Andes, Grecia, Letonia).
5. **📬 El Buzón de Correspondencia:**
   - Buzón rústico de madera.
   - Al interactuar: correo directo a Omar Trillo y enlaces a Bandcamp, SoundCloud, YouTube y Audius.

---

## 4. Hoja de Ruta Paso a Paso

Cada paso se construye y se prueba de forma independiente antes de pasar al siguiente:

- [ ] **Paso 1: Configuración Base con Vite + KAPLAY**
  - Inicializar `package.json` mínimo con Vite y KAPLAY.
  - Crear `index.html` y `main.js` base.
  - Probar que el lienzo 2D carga a 60 FPS en local y móvil.
- [ ] **Paso 2: Personaje y Controles Híbridos (Móvil & Desktop)**
  - Cargar sprite del personaje con animaciones en 4 direcciones (caminar y quieto).
  - Implementar movimiento por teclado (WASD/flechas) y por toque táctil (*Tap-to-move*).
  - Probar en pantalla táctil de móvil.
- [ ] **Paso 3: Construcción del Mapa y Colisiones**
  - Incorporar tileset de naturaleza (bosque, caminos, agua y obstáculos).
  - Configurar cámara suave que sigue al personaje.
  - Probar que el personaje no atraviesa árboles ni agua.
- [ ] **Paso 4: Puntos de Interacción y Sistema de Modales HTML**
  - Colocar los 5 puntos clave (Caballete, Cabaña sonora, Fogata, Carreta, Buzón).
  - Al acercarse el personaje, mostrar el indicador de interacción ("Toca o pulsa Espacio").
  - Al activar, desplegar el modal HTML elegante con la información real de Munay Amaru.
- [ ] **Paso 5: Audio Espacial e Integración Sonora 432 Hz**
  - Sonido ambiental suave según la zona del mapa.
  - Reproductores nativos de las 14 pistas.
- [ ] **Paso 6: Modo Lista / Accesibilidad y Despliegue Final**
  - Crear la vista alternativa en lista para lectura rápida.
  - Compilar y desplegar en Cloudflare Pages.
