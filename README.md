# MoMaA — Moreno Mateo Arquitectos

Sitio web oficial del estudio de arquitectura MoMaA, Marbella.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **next-intl** (ES / EN)
- **Vercel** (deploy)

## Instalación

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Redirige automáticamente a `/es`.

## Estructura de carpetas

```
momaa/
├── messages/
│   ├── es.json          ← Traducciones español
│   └── en.json          ← Traducciones inglés
├── src/
│   ├── app/
│   │   └── [locale]/    ← Rutas /es/* y /en/*
│   ├── components/
│   │   ├── atoms/       ← Button, Tag, Icon, SectionLabel, StatItem
│   │   ├── sections/    ← HeroSection, FeaturedProjects, AboutSection, StatsBar, ServicesSection, ContactSection
│   │   └── layout/      ← Navbar, Footer
│   ├── lib/
│   │   └── utils.ts     ← cn() helper
│   └── styles/
│       └── globals.css  ← Design tokens + variables CSS
├── i18n.ts              ← Config next-intl
├── middleware.ts        ← Redirección de locale
└── next.config.ts
```

## Variables de diseño (globals.css)

Todos los colores, tipografías, espaciados y tamaños están definidos como variables CSS en `src/styles/globals.css`.

Las principales:
- `--color-primary: #c8ff00` — verde ácido
- `--color-bg: #0d0d0d` — fondo oscuro
- `--color-surface: #141414`
- `--font-display: Syne` — títulos
- `--font-sans: Inter` — cuerpo
- `--max-width: 1800px`
- `--radius: 0px` — sin bordes redondeados

## Internacionalización

Las rutas funcionan como:
- `/es` → Home en español
- `/en` → Home en inglés
- `/es/proyectos` → Proyectos en español

Los textos están en `messages/es.json` y `messages/en.json`. Para añadir una nueva página, añade las claves al JSON y usa `useTranslations('nombreSeccion')` en el componente.

## Deploy en Vercel

```bash
vercel deploy
```

No requiere configuración adicional. Vercel detecta automáticamente Next.js.
