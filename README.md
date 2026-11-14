# Portafolio digital — Abdiel Camargo

Sitio web personal de una sola página, construido con HTML, CSS y JavaScript puros
(sin frameworks ni paso de compilación).

**Sitio publicado:** https://abdiellzz.github.io/portafolio/

## Dirección de diseño

Estética de terminal / IDE de desarrollo, con una identidad propia:

- Tipografía monoespaciada: **Space Mono** para títulos y **JetBrains Mono** para texto e interfaz.
- Paleta oscura (`#101319`) con acento **violeta** (`#b07cf7`) y detalles en verde, ámbar y rosa.
- Componentes tipo **ventana de terminal**: barra con puntos, chip de ruta (`~/perfil — zsh`),
  sombras duras y bordes de 1 px.
- Tramas de puntos, etiquetas `#hash`, prefijos `//` y microcopy en español (`sobre_mí`, `cv.pdf`).
- Iconos SVG propios, nítidos a cualquier tamaño y sin dependencias externas.

## Contenido del repositorio

```
.
├── index.html                 # Página principal (todas las secciones)
├── assets/
│   ├── css/styles.css         # Estilos, componentes de ventana y responsive
│   ├── js/main.js             # Menú, scrollspy, progreso, copiar correo y animaciones
│   ├── fonts/                 # Space Mono y JetBrains Mono autoalojadas
│   ├── img/favicon.svg        # Icono del sitio
│   ├── img/og-image.png       # Imagen de vista previa para redes sociales
│   └── cv/                    # Currículum en PDF descargable
├── .github/workflows/deploy.yml
├── .nojekyll                  # Evita el procesamiento con Jekyll en GitHub Pages
└── README.md
```

## Secciones

1. **Inicio** — presentación, terminal con el perfil y logros destacados.
2. **Sobre mí** — perfil, datos de contacto y descarga del CV.
3. **Habilidades** — 9 áreas de especialidad con iconos SVG + panel de herramientas.
4. **Experiencia** — Universidad del Istmo, AIESEC y pasantía en Institute College Panamá / CSCYT.
5. **Proyectos** — ALLEN (IA local, 1.er lugar MIDES) y monitoreo en Kubernetes (Hackatón Copa Airlines).
6. **Formación** — educación, certificaciones y reconocimientos con estado.
7. **Contacto** — correo, teléfono, GitHub y ubicación.

## Características técnicas

- Diseño **responsive** (móvil, tableta y escritorio), verificado de 360 px a 1440 px.
- Accesibilidad: enlace para saltar al contenido, navegación por teclado, `aria-*`,
  foco visible y respeto por `prefers-reduced-motion`.
- SEO y redes sociales: Open Graph, Twitter Card, datos estructurados JSON-LD y tarjeta 1200×630.
- Sin dependencias externas: tipografías e iconos se sirven desde el propio sitio.
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
