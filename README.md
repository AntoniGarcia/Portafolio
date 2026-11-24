# Portafolio de Ingeniería — Luis Antonio Serrano García

Portafolio técnico construido con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS v4**, con estética editorial monocroma de alto contraste (`#f7f7f5` / `#ffffff` / `#050505` + acento `#2c3c5d`).

## Características

- **Bilingüe (`ES / EN`):** Cambio instantáneo en la barra superior con persistencia en `localStorage` y soporte por URL (`/?lang=en`).
- **Proyectos con esquemas SVG:** Plataforma SaaS CFDI 4.0, *Bandwidth Monitor* y *Grupo Spring*, acompañados de barra lateral *Enfoque actual* y barra KPI segmentada (`315+`, `66`, `6`, `18,6`).
- **Diagrama interactivo de arquitectura CFDI 4.0:** Topología animada de 6 nodos alrededor del núcleo `ASP.NET Core 10` con inspección por capas y notas de decisiones técnicas (sin exponer código propietario).
- **Trayectoria y cierre editorial oscuro:** Línea de tiempo horizontal (`2022` → `Dic. 2026`), certificaciones, reloj local en vivo para Hidalgo, MX y **descarga directa del CV en PDF** (`public/CV_Luis_Antonio_Serrano_Garcia.pdf`).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Validación y compilación

```bash
npm run typecheck
npm run build
```

## Despliegue en Vercel

1. Inicializa Git y súbelo a tu repositorio en GitHub:
   ```bash
   git init
   git add .
   git commit -m "Inicializar portafolio editorial .NET"
   ```
2. Importa el repositorio en [vercel.com/new](https://vercel.com/new) y haz clic en **Deploy**.
