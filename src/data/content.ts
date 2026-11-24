export type Lang = "es" | "en";

export type ProjectId = "saas" | "sentinel" | "webser";

export interface ProjectSummaryCard {
  id: ProjectId;
  category: string;
  title: string;
  description: string;
  tags: string[];
  archActionLabel: string;
  repoUrl?: string;
  repoLabel?: string;
}

export interface ProjectArchNode {
  id: string;
  step: string;
  label: string;
  caption: string;
  detail: string;
  tech: string[];
}

export interface ProjectArchitectureSpec {
  id: ProjectId;
  tabNumber: string;
  tabLabel: string;
  tabStack: string;
  badge: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  repoCta?: string;
  repoNote: string;
  centerTitle: string;
  centerSub: string;
  flowLine: string;
  nodes: ProjectArchNode[];
}

export interface EngineeringNote {
  projectTag: string;
  featured?: boolean;
  title: string;
  excerpt: string;
  tags: string[];
  meta: string;
}

export interface JourneyStep {
  period: string;
  org: string;
  title: string;
  detail: string;
}

export interface PortfolioCopy {
  nav: {
    projects: string;
    architecture: string;
    engineering: string;
    journey: string;
    connect: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    firstLine: string;
    secondLine: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    coreStackLabel: string;
    coreStack: string[];
    panelBadge: string;
    panelTitle: string;
    panelCaption: string;
    panelStatus: string;
    panelItems: { label: string; value: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    hint: string;
    items: ProjectSummaryCard[];
    sidebarEyebrow: string;
    sidebarItems: { label: string; title: string; detail: string }[];
    sidebarCta: string;
  };
  stats: { value: string; label: string }[];
  focus: {
    eyebrow: string;
    title: string;
    description: string;
    pills: string[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nodeHint: string;
    specs: Record<ProjectId, ProjectArchitectureSpec>;
  };
  decisions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: EngineeringNote[];
  };
  journey: {
    leftEyebrow: string;
    experienceTitle: string;
    experiencePeriod: string;
    experienceSummary: string;
    certificationsEyebrow: string;
    certifications: { title: string; meta: string }[];
    languagesLine: string;
    rightEyebrow: string;
    rightTitle: string;
    steps: JourneyStep[];
  };
  footer: {
    role: string;
    disciplines: string;
    downloadCv: string;
    timeLabel: string;
    timeCity: string;
    timeAvailability: string;
    exploreTitle: string;
    workTitle: string;
    contactTitle: string;
    copyEmail: string;
    copied: string;
    tagline: string;
  };
}

export const PROFILE = {
  brand: "luis.serrano",
  name: "Luis Antonio Serrano García",
  email: "luisserrano1234hp@gmail.com",
  phone: "+52 771 650 0097",
  locationEs: "Pachuca de Soto, Hidalgo, México",
  locationEn: "Pachuca de Soto, Hidalgo, Mexico",
  github: "https://github.com/AntoniGarcia",
  linkedin:
    "https://www.linkedin.com/in/luis-antonio-serrano-garc%C3%ADa-data",
  resumePath: "/CV_Luis_Antonio_Serrano_Garcia.pdf",
};

export const PROJECT_ORDER: ProjectId[] = ["saas", "sentinel", "webser"];

export const COPY: Record<Lang, PortfolioCopy> = {
  es: {
    nav: {
      projects: "Proyectos",
      architecture: "Arquitectura",
      engineering: "Notas",
      journey: "Trayectoria",
      connect: "Hablemos",
      resume: "CV",
    },
    hero: {
      eyebrow: "INGENIERO DE SOFTWARE · .NET & FULL-STACK",
      firstLine: "Luis Antonio",
      secondLine: "Serrano García",
      lead: "Construyo APIs RESTful y plataformas SaaS multitenant en .NET, herramientas de observabilidad de red en Python e interfaces web responsivas con Next.js y TypeScript.",
      primaryCta: "Ver Proyectos",
      secondaryCta: "Descargar CV",
      coreStackLabel: "STACK PRINCIPAL",
      coreStack: [".NET 10 / C#", "SQL Server", "Python", "Next.js / TS"],
      panelBadge: "PERFIL DE INGENIERÍA",
      panelTitle: "Backend .NET, Redes & Web",
      panelCaption:
        "Tres frentes reales de desarrollo: sistemas transaccionales multiempresa, visibilidad defensiva de red local y frontend tipado.",
      panelStatus: "Disponible · Remoto / México",
      panelItems: [
        { label: "SAAS .NET", value: "Multitenant · 315+ xUnit" },
        { label: "CONCURRENCIA", value: "T-SQL UPDLOCK · 66 políticas" },
        { label: "PYTHON & REDES", value: "Multihilo RLock · SQLite" },
        { label: "FRONTEND WEB", value: "Next.js 14 · Tailwind · Radix" },
      ],
    },
    projects: {
      eyebrow: "PROYECTOS DESTACADOS",
      title: "Selecciona un proyecto para explorar su arquitectura.",
      hint: "Cada tarjeta abre su propio diagrama interactivo y resumen técnico debajo.",
      items: [
        {
          id: "saas",
          category: "PRODUCCIÓN · SAAS .NET",
          title: "Plataforma SaaS Multiempresa",
          description:
            "Sistema multiempresa en GRUPO MARPA IT (dominio fiscal CFDI 4.0) con aislamiento lógico en EF Core, bloqueos UPDLOCK, 315+ pruebas xUnit y despliegue en IIS.",
          tags: [".NET 10", "EF Core", "SQL Server", "Blazor PWA"],
          archActionLabel: "Ver arquitectura",
        },
        {
          id: "sentinel",
          category: "OPEN SOURCE · PYTHON & REDES",
          title: "Network Sentinel",
          description:
            "Monitor local de tráfico IPv4/IPv6 y panel defensivo de red con captura multihilo, topología, alertas deduplicadas, auditoría TCP/HTTP/TLS y SQLite.",
          tags: ["Python", "PyShark", "Streamlit", "SQLite"],
          archActionLabel: "Ver arquitectura",
          repoUrl: "https://github.com/AntoniGarcia/network-sentinel",
          repoLabel: "GitHub",
        },
        {
          id: "webser",
          category: "OPEN SOURCE · NEXT.JS & TS",
          title: "Grupo Spring (ResorTech)",
          description:
            "Aplicación web corporativa responsiva en Next.js 14 y TypeScript con 5 secciones, catálogo filtrable en tiempo real por 10 categorías y componentes Radix/shadcn.",
          tags: ["Next.js 14", "React 18", "TypeScript", "Tailwind v4"],
          archActionLabel: "Ver arquitectura",
          repoUrl: "https://github.com/AntoniGarcia/Web-ser",
          repoLabel: "GitHub",
        },
      ],
      sidebarEyebrow: "ENFOQUE ACTUAL",
      sidebarItems: [
        {
          label: "Backend .NET",
          title: "GRUPO MARPA IT · .NET 10",
          detail:
            "APIs multitenant, concurrencia en SQL Server, 315+ pruebas xUnit y operación en IIS.",
        },
        {
          label: "Python & Web",
          title: "Redes y Frontend moderno",
          detail:
            "Telemetría defensiva local con PyShark/Streamlit e interfaces en Next.js y TypeScript.",
        },
        {
          label: "Formación",
          title: "Ing. en TIC · ITSOEH",
          detail:
            "Cierre de residencia profesional (Dic. 2026) · Disponible para equipos backend o full-stack.",
        },
      ],
      sidebarCta: "Ver trayectoria completa",
    },
    stats: [
      {
        value: "315+",
        label: "Pruebas automatizadas xUnit en plataforma SaaS .NET",
      },
      {
        value: "66",
        label: "Permisos granulares por política y aislamiento multitenant",
      },
      {
        value: "6",
        label: "Vistas defensivas y auditoría TCP/HTTP/TLS en Network Sentinel",
      },
      {
        value: "10",
        label: "Categorías filtrables en tiempo real en el catálogo Next.js / TS",
      },
    ],
    focus: {
      eyebrow: "ENFOQUE DE INGENIERÍA",
      title: "Tecnologías que aplico en producción y proyectos.",
      description:
        "Base principal en desarrollo backend y full-stack con .NET y SQL Server, complementada con Python para redes y React/Next.js en frontend.",
      pills: [
        "C# & .NET (8 / 10)",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "SQL Server & T-SQL",
        "Arquitectura Multitenant",
        "Blazor WebAssembly & MudBlazor",
        "ASP.NET Core Identity & JWT",
        "Concurrencia (UPDLOCK)",
        "Data Protection (DPAPI)",
        "xUnit & Serilog & IIS",
        "Python · PyShark · SQLite",
        "Streamlit & Plotly",
        "Next.js · React · TypeScript",
        "Tailwind CSS & Radix UI",
      ],
    },
    architecture: {
      eyebrow: "ARQUITECTURA POR PROYECTO",
      title: "Explora cómo está diseñado cada sistema.",
      subtitle:
        "Cambia de proyecto para ver su diagrama dedicado y un resumen conciso; el código fuente y documentación extendida viven en cada repositorio.",
      nodeHint: "Haz clic en un nodo del diagrama para ver su rol.",
      specs: {
        saas: {
          id: "saas",
          tabNumber: "01",
          tabLabel: "SaaS Multiempresa",
          tabStack: ".NET 10 · SQL Server · IIS",
          badge: "Código propietario · GRUPO MARPA IT",
          title: "Plataforma SaaS Multiempresa (.NET 10)",
          summary:
            "Migración de un sistema fiscal de escritorio (CFDI 4.0) a una plataforma SaaS con aislamiento lógico por cuenta/empresa, concurrencia determinística y operación propia en IIS.",
          highlights: [
            "Query Filters globales en EF Core alimentados por claims JWT (CuentaId / EmpresaId) y 66 políticas de autorización.",
            "Reserva concurrente de folios con UPDATE ... WITH (UPDLOCK), Idempotency-Key y llamadas externas fuera de transacción SQL.",
            "315+ pruebas automatizadas en xUnit y migración desde Azure App Service (F1) / SQL gratuito a IIS con DPAPI y Serilog.",
          ],
          stack: [
            ".NET 10",
            "ASP.NET Core",
            "EF Core",
            "SQL Server",
            "Blazor WASM",
            "xUnit",
            "IIS",
          ],
          repoNote:
            "Por confidencialidad el código es privado; este diagrama resume la arquitectura en producción.",
          centerTitle: "ASP.NET Core 10",
          centerSub: "API · Identity · 66 Policies",
          flowLine: "Blazor WASM (JWT memoria) → API & Policies → Tx corta UPDLOCK → IIS / Serilog",
          nodes: [
            {
              id: "saas-client",
              step: "01",
              label: "Blazor WASM PWA",
              caption: "JWT en memoria · MudBlazor",
              detail:
                "Interfaz responsiva con JWT solo en memoria, compuerta de arranque contra cookie HttpOnly e Idempotency-Key en operaciones críticas.",
              tech: ["Blazor WASM", "MudBlazor", "PWA"],
            },
            {
              id: "saas-domain",
              step: "02",
              label: "Dominio & CFDI 4.0",
              caption: "decimal(18,6) · 6 variantes",
              detail:
                "Máquina de estados del comprobante, aritmética decimal(18,6), snapshots inmutables al timbrar e integración HTTP externa fuera de transacciones.",
              tech: ["C#", "CFDI 4.0", "XML / PDF"],
            },
            {
              id: "saas-sql",
              step: "03",
              label: "SQL Server & EF Core",
              caption: "UPDLOCK · Full-Text Search",
              detail:
                "Aislamiento lógico por Query Filters globales, reserva de folios con WITH (UPDLOCK) en SP y búsqueda Full-Text sobre catálogos SAT.",
              tech: ["SQL Server", "T-SQL", "EF Core 10"],
            },
            {
              id: "saas-ops",
              step: "04",
              label: "xUnit & IIS Server",
              caption: "315+ tests · DPAPI · Serilog",
              detail:
                "Suite de 315+ pruebas, cifrado de certificados/SMTP con Data Protection (DPAPI), logs rotados con Serilog y migración fuera de Azure F1.",
              tech: ["xUnit", "IIS", "DPAPI", "Serilog"],
            },
          ],
        },
        sentinel: {
          id: "sentinel",
          tabNumber: "02",
          tabLabel: "Network Sentinel",
          tabStack: "Python · PyShark · SQLite",
          badge: "Open Source · Python",
          title: "Network Sentinel · Bandwidth Monitor",
          summary:
            "Monitor local de tráfico IPv4/IPv6 por aplicación y panel defensivo de red con arquitectura multihilo, inventario acotado en RAM, auditoría TCP/HTTP/TLS y persistencia en SQLite.",
          highlights: [
            "Captura ARP/IPv4/IPv6 con TShark/PyShark en hilos separados (IP, DNS con caché TTL y procesos psutil cada 2 s) sincronizados con RLock.",
            "6 vistas en Streamlit/Plotly (mapa, dispositivos, puertos, DNS, auditoría y alertas deduplicadas cada 60 s) con persistencia de identidades MAC+subred en SQLite.",
            "Comprobaciones TCP/HTTP/TLS no destructivas y 6 módulos de pruebas automatizadas sobre loopback.",
          ],
          stack: [
            "Python 3.10+",
            "PyShark / TShark",
            "psutil",
            "Streamlit",
            "Plotly",
            "SQLite",
          ],
          repoUrl: "https://github.com/AntoniGarcia/network-sentinel",
          repoCta: "Ver documentación y código en GitHub",
          repoNote:
            "Guías de instalación, reglas de alertas, límites y suite de pruebas disponibles en el repositorio.",
          centerTitle: "Agregador RLock",
          centerSub: "RAM acotada · Flujos y Alertas",
          flowLine: "TShark / psutil (2s) → Agregador thread-safe (RLock) → SQLite & Streamlit",
          nodes: [
            {
              id: "sen-capture",
              step: "01",
              label: "Captura Multihilo",
              caption: "PyShark · TShark · psutil",
              detail:
                "Hilos independientes para tráfico IP, caché DNS (A/AAAA con TTL) y procesos del sistema cada 2 s, con cierre limpio de subprocesos y event loops.",
              tech: ["capture.py", "managed_capture.py", "psutil"],
            },
            {
              id: "sen-sec",
              step: "02",
              label: "Motor de Seguridad",
              caption: "Flujos · Alertas 60s",
              detail:
                "Inventario en RAM acotado (1024 hosts, 4096 flujos, 500 alertas) con reglas de cambio de MAC, barrido TCP SYN y servicios en claro deduplicadas.",
              tech: ["security.py", "RLock", "ARP / DNS"],
            },
            {
              id: "sen-audit",
              step: "03",
              label: "Auditoría & SQLite",
              caption: "TCP/HTTP/TLS · devices.sqlite3",
              detail:
                "Verificación no destructiva de 12 puertos, cabeceras OWASP y TLS; guarda identidades MAC+subred e historial de auditorías en SQLite.",
              tech: ["audit.py", "device_registry.py", "SQLite"],
            },
            {
              id: "sen-ui",
              step: "04",
              label: "Panel & Pruebas",
              caption: "Streamlit · 6 vistas · tests",
              detail:
                "Interfaz con actualización cada 2 s en Streamlit/Plotly, exportación CSV/JSON y 6 archivos de pruebas automatizadas con loopback TCP.",
              tech: ["app.py", "security_ui.py", "test_*.py"],
            },
          ],
        },
        webser: {
          id: "webser",
          tabNumber: "03",
          tabLabel: "Grupo Spring (ResorTech)",
          tabStack: "Next.js 14 · TypeScript · Tailwind",
          badge: "Open Source · Frontend Web",
          title: "Grupo Spring — ResorTech Industrial (Demo)",
          summary:
            "Sitio web corporativo responsivo construido en Next.js 14 (App Router), React 18 y TypeScript con catálogo industrial tipado, filtrado instantáneo y sistema UI sobre Radix.",
          highlights: [
            "Estructura en 5 secciones (Inicio, Nosotros, Catálogo, Servicios y Contacto) servidas desde App Router con SEO y estado de carga.",
            "Catálogo tipado en lib/data.ts con buscador en tiempo real, filtro por 10 categorías y modal de especificaciones por producto.",
            "Sistema de componentes reutilizables con Tailwind CSS v4, Radix UI / shadcn y formulario con validación cliente y enlace a WhatsApp.",
          ],
          stack: [
            "Next.js 14",
            "React 18",
            "TypeScript",
            "Tailwind CSS v4",
            "Radix UI / shadcn",
            "Lucide",
          ],
          repoUrl: "https://github.com/AntoniGarcia/Web-ser",
          repoCta: "Ver código y estructura en GitHub",
          repoNote:
            "El repositorio contiene los componentes completos, catálogo demo y configuración de pnpm.",
          centerTitle: "Next.js 14 App",
          centerSub: "5 Vistas · Estado Cliente",
          flowLine: "app/layout.tsx → 5 Vistas (page.tsx) → components/ui (Radix) + lib/data.ts",
          nodes: [
            {
              id: "web-router",
              step: "01",
              label: "App Router & Layout",
              caption: "SEO · Montserrat · Loading",
              detail:
                "Enrutado raíz en app/layout.tsx y app/page.tsx con metadatos SEO, tipografía Montserrat, tema visual y estado de carga dedicado.",
              tech: ["app/layout.tsx", "app/page.tsx", "Next.js 14"],
            },
            {
              id: "web-data",
              step: "02",
              label: "Catálogo Tipado",
              caption: "10 categorías · lib/data.ts",
              detail:
                "Modelo estricto en TypeScript con productos industriales, materiales, acabados, certificaciones ISO/IATF y datos de servicios.",
              tech: ["lib/data.ts", "TypeScript", "10 categorías"],
            },
            {
              id: "web-ui",
              step: "03",
              label: "Sistema UI Modular",
              caption: "Radix UI · shadcn · Tailwind v4",
              detail:
                "Primitivas accesibles (modales, carruseles, tarjetas, formularios y navegación móvil) estilizadas con tokens CSS y Tailwind v4.",
              tech: ["components/ui/*", "Radix UI", "Tailwind v4"],
            },
            {
              id: "web-ux",
              step: "04",
              label: "Búsqueda & Contacto",
              caption: "Filtro en vivo · WhatsApp",
              detail:
                "Buscador instantáneo + filtros combinados por categoría, modal detallado de producto y formulario con validación en cliente y envío por WhatsApp.",
              tech: ["React 18", "Validación cliente", "WhatsApp"],
            },
          ],
        },
      },
    },
    decisions: {
      eyebrow: "NOTAS DE INGENIERÍA",
      title: "Decisiones técnicas separadas por proyecto.",
      subtitle:
        "Cada tarjeta corresponde estrictamente a un proyecto real, sin mezclar responsabilidades ni stacks.",
      cards: [
        {
          projectTag: "SAAS .NET · GRUPO MARPA IT",
          featured: true,
          title: "Multitenancy, bloqueos UPDLOCK y migración de Azure F1 a IIS",
          excerpt:
            "Aislamiento lógico mediante Query Filters globales ligados al JWT, reserva de folios con UPDATE ... WITH (UPDLOCK), 315+ pruebas xUnit y migración desde los límites de Azure App Service (F1) a Windows Server/IIS con DPAPI y Serilog.",
          tags: [".NET 10", "UPDLOCK", "IIS · DPAPI"],
          meta: "Producción · Backend & Ops",
        },
        {
          projectTag: "PYTHON · NETWORK SENTINEL",
          title: "Captura multihilo con RLock y auditoría defensiva local",
          excerpt:
            "Separación de captura PyShark/TShark, caché DNS y procesos psutil en hilos propios sincronizados con RLock, RAM acotada, persistencia de identidades MAC+subred en SQLite y comprobaciones TCP/HTTP/TLS no destructivas.",
          tags: ["Python", "RLock", "SQLite"],
          meta: "Open Source · Redes",
        },
        {
          projectTag: "NEXT.JS & TS · GRUPO SPRING",
          title: "Catálogo filtrable en tiempo real sobre componentes Radix UI",
          excerpt:
            "Arquitectura frontend limpia en Next.js 14 App Router con datos estrictamente tipados en lib/data.ts, búsqueda instantánea sobre 10 categorías, modal de especificaciones técnicas y formulario validado con integración a WhatsApp.",
          tags: ["Next.js 14", "TypeScript", "Radix / shadcn"],
          meta: "Open Source · Frontend",
        },
      ],
    },
    journey: {
      leftEyebrow: "EXPERIENCIA Y CERTIFICACIONES",
      experienceTitle: "Desarrollador .NET Junior — GRUPO MARPA IT",
      experiencePeriod: "Ago. 2026 – Actualidad · Pachuca de Soto, Hgo.",
      experienceSummary:
        "Desarrollo full-stack en .NET 10, ASP.NET Core Web API, EF Core, SQL Server y Blazor WASM (PWA): multitenancy, concurrencia, 315+ pruebas xUnit, dominio fiscal CFDI 4.0 y migración a IIS.",
      certificationsEyebrow: "CERTIFICACIONES E IDIOMAS",
      certifications: [
        {
          title: "IBM SkillsBuild Data Analytics Certificate",
          meta: "IBM SkillsBuild · Dic. 2025",
        },
        {
          title: "Responsive Web Design Certification",
          meta: "freeCodeCamp · Jul. 2025",
        },
      ],
      languagesLine: "Idiomas: Español (Nativo) · Inglés (B1)",
      rightEyebrow: "TRAYECTORIA DE INGENIERÍA",
      rightTitle: "Evolución académica y profesional.",
      steps: [
        {
          period: "2022",
          org: "ITSOEH · Hidalgo",
          title: "Inicio de Ingeniería en TIC",
          detail:
            "Fundamentos de programación, estructuras de datos, redes y bases de datos relacionales.",
        },
        {
          period: "2025",
          org: "Open Source & Certificaciones",
          title: "Python, Redes y Next.js",
          detail:
            "Network Sentinel (PyShark/SQLite/Streamlit), Grupo Spring (Next.js 14/TS), freeCodeCamp e IBM.",
        },
        {
          period: "Ago. 2026",
          org: "GRUPO MARPA IT",
          title: "Desarrollador .NET Junior",
          detail:
            "Construcción integral de plataforma SaaS multitenant en .NET 10, 315+ pruebas xUnit y despliegue en IIS.",
        },
        {
          period: "Dic. 2026",
          org: "ITSOEH",
          title: "Cierre de Residencia y Egreso",
          detail:
            "Culminación de Ingeniería en TIC y disponibilidad para equipos backend o full-stack .NET.",
        },
      ],
    },
    footer: {
      role: "Desarrollador .NET Junior · Backend & Full-Stack",
      disciplines: "C# · .NET · SQL Server · Blazor · Python · Next.js / TypeScript",
      downloadCv: "Descargar CV (PDF)",
      timeLabel: "HORA LOCAL Y DISPONIBILIDAD",
      timeCity: "HIDALGO, MX",
      timeAvailability: "REMOTO · MX",
      exploreTitle: "EXPLORAR",
      workTitle: "PROYECTOS",
      contactTitle: "CONTACTO",
      copyEmail: "Copiar correo",
      copied: "¡Correo copiado!",
      tagline: "Construido con Next.js, TypeScript y Tailwind CSS.",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      architecture: "Architecture",
      engineering: "Notes",
      journey: "Journey",
      connect: "Let's connect",
      resume: "CV",
    },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · .NET & FULL-STACK",
      firstLine: "Luis Antonio",
      secondLine: "Serrano García",
      lead: "I build RESTful APIs and multi-tenant SaaS platforms in .NET, local network observability tooling in Python, and responsive web applications with Next.js and TypeScript.",
      primaryCta: "View Projects",
      secondaryCta: "Download CV",
      coreStackLabel: "CORE STACK",
      coreStack: [".NET 10 / C#", "SQL Server", "Python", "Next.js / TS"],
      panelBadge: "ENGINEERING PROFILE",
      panelTitle: ".NET Backend, Networks & Web",
      panelCaption:
        "Three concrete engineering fronts: multi-company transactional SaaS, defensive local network visibility, and type-safe web frontends.",
      panelStatus: "Available · Remote / Mexico",
      panelItems: [
        { label: ".NET SAAS", value: "Multitenant · 315+ xUnit" },
        { label: "CONCURRENCY", value: "T-SQL UPDLOCK · 66 policies" },
        { label: "PYTHON & NET", value: "Threaded RLock · SQLite" },
        { label: "WEB FRONTEND", value: "Next.js 14 · Tailwind · Radix" },
      ],
    },
    projects: {
      eyebrow: "SELECTED PROJECTS",
      title: "Select any project to inspect its architecture.",
      hint: "Each card opens its dedicated interactive diagram and concise overview below.",
      items: [
        {
          id: "saas",
          category: "PRODUCTION · .NET SAAS",
          title: "Multi-Company SaaS Platform",
          description:
            "Multi-tenant system built at GRUPO MARPA IT (CFDI 4.0 tax domain) with EF Core global filters, T-SQL UPDLOCK, 315+ xUnit tests, and IIS deployment.",
          tags: [".NET 10", "EF Core", "SQL Server", "Blazor PWA"],
          archActionLabel: "View architecture",
        },
        {
          id: "sentinel",
          category: "OPEN SOURCE · PYTHON & NETWORKING",
          title: "Network Sentinel",
          description:
            "Local IPv4/IPv6 per-app traffic monitor and defensive network dashboard featuring multi-threaded capture, topology, deduplicated alerts, TCP/HTTP/TLS audits, and SQLite.",
          tags: ["Python", "PyShark", "Streamlit", "SQLite"],
          archActionLabel: "View architecture",
          repoUrl: "https://github.com/AntoniGarcia/network-sentinel",
          repoLabel: "GitHub",
        },
        {
          id: "webser",
          category: "OPEN SOURCE · NEXT.JS & TS",
          title: "Grupo Spring (ResorTech)",
          description:
            "Responsive corporate web app built with Next.js 14 and TypeScript featuring 5 sections, a real-time 10-category filterable catalog, and Radix/shadcn UI components.",
          tags: ["Next.js 14", "React 18", "TypeScript", "Tailwind v4"],
          archActionLabel: "View architecture",
          repoUrl: "https://github.com/AntoniGarcia/Web-ser",
          repoLabel: "GitHub",
        },
      ],
      sidebarEyebrow: "CURRENT FOCUS",
      sidebarItems: [
        {
          label: ".NET Backend",
          title: "GRUPO MARPA IT · .NET 10",
          detail:
            "Multi-tenant APIs, SQL Server concurrency, 315+ xUnit tests, and self-hosted IIS ops.",
        },
        {
          label: "Python & Web",
          title: "Networking & Modern UI",
          detail:
            "Defensive local telemetry in PyShark/Streamlit and modular frontends in Next.js & TypeScript.",
        },
        {
          label: "Education",
          title: "B.S. in ICT · ITSOEH",
          detail:
            "Completing final internship (Dec 2026) · Open to Junior backend or full-stack roles.",
        },
      ],
      sidebarCta: "View full journey",
    },
    stats: [
      {
        value: "315+",
        label: "Automated xUnit tests in the .NET SaaS platform",
      },
      {
        value: "66",
        label: "Policy-based granular permissions with tenant isolation",
      },
      {
        value: "6",
        label: "Defensive views and TCP/HTTP/TLS auditing in Network Sentinel",
      },
      {
        value: "10",
        label: "Real-time filterable catalog categories in Next.js / TypeScript",
      },
    ],
    focus: {
      eyebrow: "ENGINEERING FOCUS",
      title: "Technologies I apply in production and projects.",
      description:
        "Primary foundation in .NET backend and SQL Server development, complemented by Python network tooling and React/Next.js frontend work.",
      pills: [
        "C# & .NET (8 / 10)",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "SQL Server & T-SQL",
        "Multitenant Architecture",
        "Blazor WebAssembly & MudBlazor",
        "ASP.NET Core Identity & JWT",
        "Concurrency (UPDLOCK)",
        "Data Protection (DPAPI)",
        "xUnit & Serilog & IIS",
        "Python · PyShark · SQLite",
        "Streamlit & Plotly",
        "Next.js · React · TypeScript",
        "Tailwind CSS & Radix UI",
      ],
    },
    architecture: {
      eyebrow: "ARCHITECTURE BY PROJECT",
      title: "Explore how each system is designed.",
      subtitle:
        "Switch between projects to inspect each dedicated diagram and concise overview; full source code and docs live on GitHub.",
      nodeHint: "Click any node in the diagram to inspect its role.",
      specs: {
        saas: {
          id: "saas",
          tabNumber: "01",
          tabLabel: "Multi-Company SaaS",
          tabStack: ".NET 10 · SQL Server · IIS",
          badge: "Proprietary codebase · GRUPO MARPA IT",
          title: "Multi-Company SaaS Platform (.NET 10)",
          summary:
            "Migration of a desktop tax system (CFDI 4.0) into a multi-tenant SaaS platform with strict logical isolation, deterministic SQL concurrency, and self-hosted IIS operations.",
          highlights: [
            "EF Core global Query Filters fed by signed JWT claims (CuentaId / EmpresaId) and 66 authorization policies.",
            "Concurrent folio reservation via UPDATE ... WITH (UPDLOCK), Idempotency-Key, and external HTTP calls outside DB transactions.",
            "315+ automated xUnit tests and migration off Azure App Service (F1) / free SQL tier to IIS with DPAPI and Serilog.",
          ],
          stack: [
            ".NET 10",
            "ASP.NET Core",
            "EF Core",
            "SQL Server",
            "Blazor WASM",
            "xUnit",
            "IIS",
          ],
          repoNote:
            "Source code is proprietary; this diagram summarizes the production architecture.",
          centerTitle: "ASP.NET Core 10",
          centerSub: "API · Identity · 66 Policies",
          flowLine: "Blazor WASM (in-memory JWT) → API & Policies → Short UPDLOCK Tx → IIS / Serilog",
          nodes: [
            {
              id: "saas-client",
              step: "01",
              label: "Blazor WASM PWA",
              caption: "In-memory JWT · MudBlazor",
              detail:
                "Responsive UI storing JWT strictly in memory, startup auth gate via HttpOnly cookie, and Idempotency-Key on critical writes.",
              tech: ["Blazor WASM", "MudBlazor", "PWA"],
            },
            {
              id: "saas-domain",
              step: "02",
              label: "Domain & CFDI 4.0",
              caption: "decimal(18,6) · 6 variants",
              detail:
                "Strict document state machine, decimal(18,6) math, immutable snapshots on stamping, and external HTTP calls outside SQL transactions.",
              tech: ["C#", "CFDI 4.0", "XML / PDF"],
            },
            {
              id: "saas-sql",
              step: "03",
              label: "SQL Server & EF Core",
              caption: "UPDLOCK · Full-Text Search",
              detail:
                "Global Query Filters for tenant isolation, stored-procedure folio locking with WITH (UPDLOCK), and Full-Text Search over SAT catalogs.",
              tech: ["SQL Server", "T-SQL", "EF Core 10"],
            },
            {
              id: "saas-ops",
              step: "04",
              label: "xUnit & IIS Server",
              caption: "315+ tests · DPAPI · Serilog",
              detail:
                "315+ automated tests, certificate/SMTP encryption via Data Protection (DPAPI), rotated Serilog logs, and migration off Azure F1.",
              tech: ["xUnit", "IIS", "DPAPI", "Serilog"],
            },
          ],
        },
        sentinel: {
          id: "sentinel",
          tabNumber: "02",
          tabLabel: "Network Sentinel",
          tabStack: "Python · PyShark · SQLite",
          badge: "Open Source · Python",
          title: "Network Sentinel · Bandwidth Monitor",
          summary:
            "Local per-application IPv4/IPv6 traffic monitor and defensive network dashboard built with multi-threaded capture, bounded RAM stores, TCP/HTTP/TLS auditing, and SQLite.",
          highlights: [
            "ARP/IPv4/IPv6 capture via TShark/PyShark on dedicated threads (IP, TTL DNS cache, and 2s psutil polling) synchronized with RLock.",
            "6 Streamlit/Plotly views (topology, devices, ports, DNS, audits, 60s deduplicated alerts) plus MAC+subnet identity persistence in SQLite.",
            "Non-destructive TCP/HTTP/TLS checks and 6 automated test suites verified against local loopback sockets.",
          ],
          stack: [
            "Python 3.10+",
            "PyShark / TShark",
            "psutil",
            "Streamlit",
            "Plotly",
            "SQLite",
          ],
          repoUrl: "https://github.com/AntoniGarcia/network-sentinel",
          repoCta: "View full docs & code on GitHub",
          repoNote:
            "Setup scripts, alert rules, memory limits, and automated test suites are available in the repository.",
          centerTitle: "RLock Aggregator",
          centerSub: "Bounded RAM · Flows & Alerts",
          flowLine: "TShark / psutil (2s) → Thread-safe Aggregator (RLock) → SQLite & Streamlit",
          nodes: [
            {
              id: "sen-capture",
              step: "01",
              label: "Threaded Capture",
              caption: "PyShark · TShark · psutil",
              detail:
                "Dedicated threads for IP packets, DNS cache (A/AAAA with TTL), and 2s process mapping, with safe subprocess and event-loop teardown.",
              tech: ["capture.py", "managed_capture.py", "psutil"],
            },
            {
              id: "sen-sec",
              step: "02",
              label: "Security Engine",
              caption: "Flows · 60s Alerts",
              detail:
                "Bounded RAM registries (1024 hosts, 4096 flows, 500 alerts) detecting MAC changes, TCP SYN sweeps, and cleartext services with 60s deduplication.",
              tech: ["security.py", "RLock", "ARP / DNS"],
            },
            {
              id: "sen-audit",
              step: "03",
              label: "Audit & SQLite",
              caption: "TCP/HTTP/TLS · devices.sqlite3",
              detail:
                "Non-destructive checks across 12 ports, OWASP HTTP headers, and TLS validation; persists MAC+subnet labels and audit history in SQLite.",
              tech: ["audit.py", "device_registry.py", "SQLite"],
            },
            {
              id: "sen-ui",
              step: "04",
              label: "Dashboard & Tests",
              caption: "Streamlit · 6 views · tests",
              detail:
                "2s live-refresh UI in Streamlit/Plotly, CSV/JSON export, and 6 automated test modules verified over loopback sockets.",
              tech: ["app.py", "security_ui.py", "test_*.py"],
            },
          ],
        },
        webser: {
          id: "webser",
          tabNumber: "03",
          tabLabel: "Grupo Spring (ResorTech)",
          tabStack: "Next.js 14 · TypeScript · Tailwind",
          badge: "Open Source · Web Frontend",
          title: "Grupo Spring — ResorTech Industrial (Demo)",
          summary:
            "Responsive corporate web application built on Next.js 14 (App Router), React 18, and TypeScript featuring a typed industrial catalog, live filtering, and Radix UI primitives.",
          highlights: [
            "5 structured sections (Home, About, Catalog, Services, Contact) powered by Next.js App Router with SEO metadata and loading state.",
            "Strongly typed catalog in lib/data.ts with real-time search, 10-category filtering, and per-product technical specification modals.",
            "Reusable UI library built on Tailwind CSS v4 and Radix UI / shadcn with client-side form validation and direct WhatsApp handoff.",
          ],
          stack: [
            "Next.js 14",
            "React 18",
            "TypeScript",
            "Tailwind CSS v4",
            "Radix UI / shadcn",
            "Lucide",
          ],
          repoUrl: "https://github.com/AntoniGarcia/Web-ser",
          repoCta: "View source & structure on GitHub",
          repoNote:
            "Full UI component library, demo catalog data, and pnpm scripts live in the repository.",
          centerTitle: "Next.js 14 App",
          centerSub: "5 Views · Client State",
          flowLine: "app/layout.tsx → 5 Views (page.tsx) → components/ui (Radix) + lib/data.ts",
          nodes: [
            {
              id: "web-router",
              step: "01",
              label: "App Router & Layout",
              caption: "SEO · Montserrat · Loading",
              detail:
                "Root layout in app/layout.tsx and app/page.tsx managing SEO metadata, typography, visual tokens, and dedicated loading view.",
              tech: ["app/layout.tsx", "app/page.tsx", "Next.js 14"],
            },
            {
              id: "web-data",
              step: "02",
              label: "Typed Catalog",
              caption: "10 categories · lib/data.ts",
              detail:
                "Strict TypeScript dataset modeling industrial products, materials, finishes, ISO/IATF certifications, and service descriptions.",
              tech: ["lib/data.ts", "TypeScript", "10 categories"],
            },
            {
              id: "web-ui",
              step: "03",
              label: "Modular UI System",
              caption: "Radix UI · shadcn · Tailwind v4",
              detail:
                "Accessible UI primitives (modals, carousels, cards, forms, and responsive navigation) styled with CSS tokens and Tailwind v4.",
              tech: ["components/ui/*", "Radix UI", "Tailwind v4"],
            },
            {
              id: "web-ux",
              step: "04",
              label: "Search & Contact",
              caption: "Live filter · WhatsApp",
              detail:
                "Instant search and category filtering, technical product detail modal, and client-validated contact form with direct WhatsApp option.",
              tech: ["React 18", "Client validation", "WhatsApp"],
            },
          ],
        },
      },
    },
    decisions: {
      eyebrow: "ENGINEERING NOTES",
      title: "Technical decisions separated by project.",
      subtitle:
        "Each note belongs strictly to one real project—no mixed scopes or unrelated stacks.",
      cards: [
        {
          projectTag: ".NET SAAS · GRUPO MARPA IT",
          featured: true,
          title: "Multitenancy, UPDLOCK locking & Azure F1 to IIS migration",
          excerpt:
            "Logical isolation via JWT-driven EF Core global query filters, sequential folio allocation with UPDATE ... WITH (UPDLOCK), 315+ xUnit tests, and migration off Azure App Service (F1) to Windows Server/IIS with DPAPI and Serilog.",
          tags: [".NET 10", "UPDLOCK", "IIS · DPAPI"],
          meta: "Production · Backend & Ops",
        },
        {
          projectTag: "PYTHON · NETWORK SENTINEL",
          title: "Multi-threaded RLock capture and defensive local auditing",
          excerpt:
            "Separated PyShark/TShark packet capture, TTL DNS caching, and 2s psutil polling onto dedicated threads coordinated via RLock, bounded RAM stores, SQLite MAC+subnet persistence, and non-destructive TCP/HTTP/TLS checks.",
          tags: ["Python", "RLock", "SQLite"],
          meta: "Open Source · Networking",
        },
        {
          projectTag: "NEXT.JS & TS · GRUPO SPRING",
          title: "Real-time filterable catalog on modular Radix UI primitives",
          excerpt:
            "Clean Next.js 14 App Router frontend backed by strictly typed catalog data in lib/data.ts, live search across 10 categories, detailed product specification modals, and client-validated contact with WhatsApp handoff.",
          tags: ["Next.js 14", "TypeScript", "Radix / shadcn"],
          meta: "Open Source · Frontend",
        },
      ],
    },
    journey: {
      leftEyebrow: "EXPERIENCE & CERTIFICATIONS",
      experienceTitle: "Junior .NET Developer — GRUPO MARPA IT",
      experiencePeriod: "Aug 2026 – Present · Hidalgo, Mexico",
      experienceSummary:
        "Full-stack engineering with .NET 10, ASP.NET Core Web API, EF Core, SQL Server, and Blazor WASM (PWA): multitenancy, concurrency, 315+ xUnit tests, CFDI 4.0 compliance, and IIS migration.",
      certificationsEyebrow: "CERTIFICATIONS & LANGUAGES",
      certifications: [
        {
          title: "IBM SkillsBuild Data Analytics Certificate",
          meta: "IBM SkillsBuild · Dec 2025",
        },
        {
          title: "Responsive Web Design Certification",
          meta: "freeCodeCamp · Jul 2025",
        },
      ],
      languagesLine: "Languages: Spanish (Native) · English (B1)",
      rightEyebrow: "ENGINEERING JOURNEY",
      rightTitle: "Academic and engineering progression.",
      steps: [
        {
          period: "2022",
          org: "ITSOEH · Hidalgo",
          title: "Started B.S. in ICT",
          detail:
            "Core foundations in software engineering, data structures, networking, and relational databases.",
        },
        {
          period: "2025",
          org: "Open Source & Certificates",
          title: "Python, Networking & Next.js",
          detail:
            "Built Network Sentinel (PyShark/SQLite/Streamlit) and Grupo Spring (Next.js 14/TS); freeCodeCamp & IBM.",
        },
        {
          period: "Aug 2026",
          org: "GRUPO MARPA IT",
          title: "Junior .NET Developer",
          detail:
            "End-to-end delivery of a multi-tenant .NET 10 SaaS platform, 315+ xUnit tests, and IIS deployment.",
        },
        {
          period: "Dec 2026",
          org: "ITSOEH",
          title: "Graduation & Internship Completion",
          detail:
            "Completing B.S. in ICT and ready to join remote or Mexico-based backend/full-stack teams.",
        },
      ],
    },
    footer: {
      role: "Junior .NET Developer · Backend & Full-Stack",
      disciplines: "C# · .NET · SQL Server · Blazor · Python · Next.js / TypeScript",
      downloadCv: "Download CV (PDF)",
      timeLabel: "LOCAL TIME & AVAILABILITY",
      timeCity: "HIDALGO, MX",
      timeAvailability: "REMOTE · MX",
      exploreTitle: "EXPLORE",
      workTitle: "PROJECTS",
      contactTitle: "CONTACT",
      copyEmail: "Copy email",
      copied: "Email copied!",
      tagline: "Built with Next.js, TypeScript, and Tailwind CSS.",
    },
  },
};
