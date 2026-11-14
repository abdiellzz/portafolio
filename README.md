# Portafolio digital — Abdiel Camargo

Sitio web personal de una sola página, construido con HTML, CSS y JavaScript puros
(sin frameworks ni paso de compilación).

**Sitio publicado:** https://abdiellzz.github.io/portafolio/

## Dirección de diseño

Interfaz limpia con acentos de terminal, sin decoración innecesaria:

- **JetBrains Mono** para títulos, etiquetas y datos; **Inter** para párrafos.
- Paleta oscura neutra (`#0c0e12`) con un único acento verde (`#7ee787`) y ámbar solo para premios.
- Un solo componente de terminal en el hero (`$ whoami`, `cat estado.log`) como firma visual.
- Secciones numeradas (`01`, `02`, …), tarjetas planas con bordes de 1 px y mucho aire.
- Fondo decorativo de terminal: cuadrícula de celdas, halo de fósforo, franja de barrido,
  líneas de escaneo y viñeta, todo en una capa fija `aria-hidden` que respeta
  `prefers-reduced-motion` y desaparece al imprimir.
- Sin degradados en los componentes, sombras duras, chips flotantes ni maquetas falsas.

## Contenido del repositorio

```
.
├── index.html                 # Página principal (todas las secciones)
├── assets/
│   ├── css/styles.css         # Estilos, terminal y responsive
│   ├── js/main.js             # Menú, scrollspy, progreso, copiar correo y animaciones
│   ├── fonts/                 # JetBrains Mono e Inter autoalojadas
│   ├── img/favicon.svg        # Icono del sitio
│   ├── img/og-image.png       # Imagen de vista previa para redes sociales
│   └── cv/                    # Currículum en PDF descargable
├── .github/workflows/deploy.yml
├── .nojekyll                  # Evita el procesamiento con Jekyll en GitHub Pages
└── README.md
```

## Secciones

1. **Inicio** — presentación, logros y terminal con el perfil.
2. **Sobre mí** — perfil, datos de contacto y descarga del CV.
3. **Habilidades** — 9 áreas de especialidad con iconos SVG + stack de herramientas.
4. **Experiencia** — Universidad del Istmo, AIESEC y pasantía en Institute College Panamá / CSCYT.
5. **Proyectos** — ALLEN (IA local, 1.er lugar MIDES) y monitoreo en Kubernetes (Hackatón Copa Airlines).
6. **Formación** — educación, certificaciones y reconocimientos con estado.
7. **Contacto** — correo, teléfono, GitHub y ubicación.

## Características técnicas

- Diseño **responsive** verificado en 390, 834 y 1440 px, con menú móvil accesible.
- Accesibilidad: enlace para saltar al contenido, navegación por teclado, `aria-*`,
  foco visible y respeto por `prefers-reduced-motion`.
- SEO y redes sociales: Open Graph, Twitter Card, datos estructurados JSON-LD y tarjeta 1200×630.
- Sin dependencias externas: tipografías e iconos SVG se sirven desde el propio sitio.
- Estilos de impresión para guardar la página como PDF.

## Ejecutar en local

Al ser un sitio estático, basta con servir la carpeta:

```bash
python3 -m http.server 8080
# Abre http://localhost:8080
```

## Publicación

El flujo de trabajo `.github/workflows/deploy.yml` publica el sitio en GitHub Pages
con GitHub Actions en cada push a `main`.

Para habilitarlo manualmente la primera vez:

1. **Settings → Pages**.
2. En *Build and deployment*, selecciona **Source: GitHub Actions**.
3. El repositorio debe ser público (plan gratuito) para que el sitio sea accesible.

## Créditos

Diseñado y desarrollado por **Abdiel Camargo** · 2026.
