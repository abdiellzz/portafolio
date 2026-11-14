# Portafolio digital — Abdiel Camargo

Sitio web personal de una sola página, construido con HTML, CSS y JavaScript puros
(sin frameworks ni paso de compilación). Presenta perfil profesional, habilidades,
experiencia, proyectos, educación y certificaciones.

**Sitio publicado:** https://abdiellzz.github.io/portafolio/

## Contenido del repositorio

```
.
├── index.html                 # Página principal (todas las secciones)
├── assets/
│   ├── css/styles.css         # Estilos, temas claro/oscuro y diseño responsive
│   ├── js/main.js             # Navegación, scrollspy, tema, copiar correo, animaciones
│   ├── fonts/                 # Tipografía Inter autoalojada (sin dependencias externas)
│   ├── img/favicon.svg        # Icono del sitio
│   ├── img/og-image.png       # Imagen de vista previa para redes sociales
│   └── cv/                    # Currículum en PDF descargable
├── .github/workflows/deploy.yml
├── .nojekyll                  # Evita el procesamiento con Jekyll en GitHub Pages
└── README.md
```

## Secciones

1. **Inicio** — presentación, enfoque profesional y logros destacados.
2. **Sobre mí** — perfil, datos de contacto y descarga del CV.
3. **Habilidades** — nueve áreas de especialidad (cloud, datos, virtualización, seguridad, cifrado, amenazas, soporte, red y monitoreo) con iconos SVG propios, más el stack de herramientas.
4. **Experiencia** — trayectoria en soporte de TI, auditoría y pasantía.
5. **Proyectos** — ALLEN (IA local) y monitoreo en Kubernetes para la hackatón.
6. **Formación** — educación, certificaciones y reconocimientos.
7. **Contacto** — correo, teléfono, GitHub y ubicación.

## Características técnicas

- Diseño **responsive** (móvil, tableta y escritorio) y tema **claro/oscuro** con memoria local.
- Accesibilidad: enlace para saltar al contenido, navegación por teclado, `aria-*`,
  foco visible y respeto por `prefers-reduced-motion`.
- SEO y redes sociales: metadatos Open Graph, Twitter Card y datos estructurados JSON-LD.
- Sin dependencias externas: la tipografía y los iconos se sirven desde el propio sitio.
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
