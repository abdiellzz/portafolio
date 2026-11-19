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
├── index.html                 # Página principal
├── proyectos.html             # Página independiente de proyectos
├── assets/
│   ├── css/app.css           # Estilos, terminal y responsive
│   ├── js/main.js             # Menú, scrollspy, progreso y animaciones
│   ├── fonts/                 # JetBrains Mono e Inter autoalojadas
│   ├── img/favicon.svg        # Icono del sitio
│   ├── img/og-image.png       # Imagen de vista previa para redes sociales
│   ├── img/aws-iam/           # 23 capturas de la guía ilustrada de AWS IAM
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
5. **Proyectos** — guía ilustrada del laboratorio «Introducción a AWS IAM», con 23 capturas y video integrado.
6. **Formación** — educación, certificaciones y reconocimientos con estado.
7. **Contacto** — enlaces directos e iconos de correo, GitHub, LinkedIn y teléfono.

## Características técnicas

- Diseño **responsive** verificado en 390, 834 y 1440 px, con menú móvil accesible.
- Accesibilidad: enlace para saltar al contenido, navegación por teclado, `aria-*`,
  foco visible y respeto por `prefers-reduced-motion`.
- SEO y redes sociales: Open Graph, Twitter Card, datos estructurados JSON-LD y tarjeta 1200×630.
- Tipografías e iconos SVG autoalojados; el reproductor de YouTube solo se carga en el video del laboratorio.
- Estilos de impresión para guardar la página como PDF.

## Ejecutar en local

Al ser un sitio estático, basta con servir la carpeta:

```bash
python3 -m http.server 8080
# Abre http://localhost:8080
```

## Publicación

El flujo de trabajo `.github/workflows/deploy.yml` publica el sitio en GitHub Pages
con GitHub Actions en cada push a `main` o a la rama de trabajo activa.

Para habilitarlo manualmente la primera vez:

1. **Settings → Pages**.
2. En *Build and deployment*, selecciona **Source: GitHub Actions**.
3. El repositorio debe ser público (plan gratuito) para que el sitio sea accesible.

## Créditos

Diseñado y desarrollado por **Abdiel Camargo** · 2026.
