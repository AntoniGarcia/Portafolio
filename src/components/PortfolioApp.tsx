"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  GraduationCap,
  Layers,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { COPY, PROFILE, type Lang, type ProjectId } from "@/data/content";
import { ProjectVisual } from "@/components/ProjectVisuals";
import { ProjectArchitectureExplorer } from "@/components/ProjectArchitectureExplorer";

const SIDEBAR_ICONS = [Layers, ShieldCheck, GraduationCap];

export function PortfolioApp() {
  const [lang, setLang] = useState<Lang>("es");
  const [selectedProject, setSelectedProject] = useState<ProjectId>("saas");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState<string>("--:--");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const paramLang = params.get("lang");
      if (paramLang === "en" || paramLang === "es") {
        setLang(paramLang);
        document.documentElement.lang = paramLang;
      } else {
        const saved = localStorage.getItem("portfolio-lang");
        if (saved === "en" || saved === "es") {
          setLang(saved);
          document.documentElement.lang = saved;
        }
      }

      const paramProject = params.get("project");
      if (
        paramProject === "saas" ||
        paramProject === "sentinel" ||
        paramProject === "webser"
      ) {
        setSelectedProject(paramProject);
      }
    } catch {
      // Ignorar si localStorage no está disponible
    }
  }, []);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("es-MX", {
          timeZone: "America/Mexico_City",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setLocalTime(formatted);
      } catch {
        setLocalTime("CST");
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const changeLang = (next: Lang) => {
    setLang(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem("portfolio-lang", next);
    } catch {
      // Ignorar errores de almacenamiento
    }
  };

  const inspectProjectArchitecture = (id: ProjectId) => {
    setSelectedProject(id);
    const el = document.getElementById("arquitectura");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const t = COPY[lang];

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-[#f7f7f5] text-[#050505]">
      {/* NAVBAR FIJA ESTILO GLASS EDITORIAL */}
      <header className="sticky top-0 z-50 h-20 border-b border-black/10 bg-[#f7f7f5]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            className="text-base font-semibold tracking-tight text-[#050505] transition-opacity hover:opacity-75"
          >
            {PROFILE.brand}
            <span className="text-[#2c3c5d]">.</span>
          </a>

          <nav
            aria-label="Principal"
            className="hidden items-center gap-8 text-sm text-[#222222] md:flex"
          >
            <a href="#proyectos" className="transition-colors hover:text-[#050505]">
              {t.nav.projects}
            </a>
            <a href="#arquitectura" className="transition-colors hover:text-[#050505]">
              {t.nav.architecture}
            </a>
            <a href="#decisiones" className="transition-colors hover:text-[#050505]">
              {t.nav.engineering}
            </a>
            <a href="#trayectoria" className="transition-colors hover:text-[#050505]">
              {t.nav.journey}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-3 text-xs font-medium"
              role="group"
              aria-label="Idioma / Language"
            >
              <button
                type="button"
                onClick={() => changeLang("es")}
                aria-pressed={lang === "es"}
                className={`relative cursor-pointer py-1 transition-colors ${
                  lang === "es"
                    ? "font-semibold text-[#050505]"
                    : "text-[#6a6a6a] hover:text-[#050505]"
                }`}
              >
                ES
                {lang === "es" && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#2c3c5d]" />
                )}
              </button>
              <button
                type="button"
                onClick={() => changeLang("en")}
                aria-pressed={lang === "en"}
                className={`relative cursor-pointer py-1 transition-colors ${
                  lang === "en"
                    ? "font-semibold text-[#050505]"
                    : "text-[#6a6a6a] hover:text-[#050505]"
                }`}
              >
                EN
                {lang === "en" && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#2c3c5d]" />
                )}
              </button>
            </div>

            <a
              href="#contacto"
              className="group hidden items-center gap-1.5 rounded-lg bg-[#050505] px-4 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <span>{t.nav.connect}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={PROFILE.resumePath}
              download="CV_Luis_Antonio_Serrano_Garcia.pdf"
              className="hidden items-center gap-1.5 rounded-lg border border-black/15 bg-white px-3.5 py-2.5 text-xs font-medium text-[#050505] transition-colors hover:border-black/30 lg:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{t.nav.resume}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menú"
              aria-expanded={mobileMenuOpen}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-black/10 bg-white md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-b border-black/10 bg-[#f7f7f5] px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a
                href="#proyectos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1"
              >
                {t.nav.projects}
              </a>
              <a
                href="#arquitectura"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1"
              >
                {t.nav.architecture}
              </a>
              <a
                href="#decisiones"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1"
              >
                {t.nav.engineering}
              </a>
              <a
                href="#trayectoria"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1"
              >
                {t.nav.journey}
              </a>
              <div className="mt-2 flex flex-wrap gap-2 border-t border-black/10 pt-2">
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#050505] px-4 py-2 text-xs font-medium text-white"
                >
                  {t.nav.connect}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={PROFILE.resumePath}
                  download="CV_Luis_Antonio_Serrano_Garcia.pdf"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-black/15 bg-white px-3.5 py-2 text-xs font-medium text-[#050505]"
                >
                  <Download className="h-3.5 w-3.5" />
                  {t.hero.secondaryCta}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* BANDA 1: HERO ASIMÉTRICO EDITORIAL */}
        <section className="hero-gradient border-b border-black/10">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div className="animate-rise">
              <p className="mono-label text-[11px] font-medium text-[#222222]">
                {t.hero.eyebrow}
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-[#050505] sm:text-6xl">
                {t.hero.firstLine}
                <br />
                {t.hero.secondLine}
              </h1>

              <div className="mt-6 h-[1.5px] w-7 bg-[#2c3c5d]" />

              <p className="mt-6 max-w-xl text-base leading-8 text-[#6a6a6a] sm:text-lg">
                {t.hero.lead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#proyectos"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#050505] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={PROFILE.resumePath}
                  download="CV_Luis_Antonio_Serrano_Garcia.pdf"
                  className="group inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white px-5 py-3 text-sm font-medium text-[#050505] transition-colors hover:border-black/30"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowDown className="h-4 w-4 transition-transform duration-150 group-hover:translate-y-0.5" />
                </a>
              </div>

              <div className="mt-10">
                <p className="mono-label text-[10px] text-[#6a6a6a]">
                  {t.hero.coreStackLabel}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {t.hero.coreStack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#050505]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2c3c5d]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha: Panel monocromo */}
            <div className="animate-rise lg:w-full lg:max-w-[500px] lg:justify-self-end">
              <div className="surface-card relative overflow-hidden rounded-xl">
                <div className="flex items-center justify-between border-b border-black/10 bg-[#fafaf8] px-5 py-3.5">
                  <span className="mono-label text-[10.5px] font-medium text-[#2c3c5d]">
                    {t.hero.panelBadge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#222222]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2c3c5d]" />
                    {t.hero.panelStatus}
                  </span>
                </div>

                <div className="diagram-grid relative border-b border-black/10 px-6 py-7">
                  <div className="rounded-lg bg-[#050505] p-5 text-white shadow-[0_18px_40px_rgba(5,5,5,0.18)]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="mono-label text-[10px] text-white/60">
                        BACKEND · NETWORKS · WEB
                      </span>
                      <Code2 className="h-4 w-4 text-white/70" />
                    </div>
                    <h2 className="mt-2.5 text-xl font-semibold tracking-tight text-white">
                      {t.hero.panelTitle}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {t.hero.panelCaption}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] text-white/85">
                      <span className="rounded bg-white/15 px-2 py-1 text-white">
                        .NET 10 / C#
                      </span>
                      <span className="text-white/40">·</span>
                      <span className="rounded bg-white/10 px-2 py-1">
                        SQL Server
                      </span>
                      <span className="text-white/40">·</span>
                      <span className="rounded bg-white/10 px-2 py-1">
                        Python
                      </span>
                      <span className="text-white/40">·</span>
                      <span className="rounded bg-white/10 px-2 py-1">
                        Next.js 14
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2">
                  {t.hero.panelItems.map((item) => (
                    <div key={item.label} className="bg-white px-5 py-3.5">
                      <div className="mono-label text-[10px] text-[#6a6a6a]">
                        {item.label}
                      </div>
                      <div className="mt-1 font-mono text-xs font-medium text-[#050505]">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANDA 2: PROYECTOS DESTACADOS + SIDEBAR ENFOQUE ACTUAL */}
        <section id="proyectos" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <p className="mono-label text-[11px] font-medium text-[#6a6a6a]">
                {t.projects.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#2c3c5d]/60" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#050505] sm:text-4xl">
              {t.projects.title}
            </h2>
            <p className="mt-2 text-sm text-[#6a6a6a]">{t.projects.hint}</p>

            <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_295px]">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {t.projects.items.map((project) => {
                  const isActive = project.id === selectedProject;
                  return (
                    <article
                      key={project.id}
                      className={`surface-card surface-card-hover group flex flex-col overflow-hidden rounded-lg ${
                        isActive ? "ring-1 ring-[#050505]" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => inspectProjectArchitecture(project.id)}
                        className="cursor-pointer text-left"
                        aria-label={`${project.archActionLabel}: ${project.title}`}
                      >
                        <ProjectVisual id={project.id} />
                      </button>

                      <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <p className="mono-label text-[10px] text-[#2c3c5d]">
                            {project.category}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#050505]">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#6a6a6a]">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-5">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded border border-black/10 bg-[#f7f7f5] px-2 py-0.5 font-mono text-[10.5px] text-[#222222]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-4 flex items-center justify-between gap-2 border-t border-black/10 pt-3.5">
                            <button
                              type="button"
                              onClick={() =>
                                inspectProjectArchitecture(project.id)
                              }
                              className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#050505] transition-colors hover:text-[#2c3c5d]"
                            >
                              <span>{project.archActionLabel}</span>
                              <ArrowDown className="h-3.5 w-3.5" />
                            </button>

                            {project.repoUrl && project.repoLabel && (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-[#6a6a6a] transition-colors hover:text-[#050505]"
                              >
                                <span>{project.repoLabel}</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <aside className="flex flex-col justify-between rounded-lg border border-black/10 bg-[#fafaf8] p-6">
                <div>
                  <p className="mono-label text-[11px] font-medium text-[#6a6a6a]">
                    {t.projects.sidebarEyebrow}
                  </p>
                  <div className="mt-5 space-y-5">
                    {t.projects.sidebarItems.map((item, idx) => {
                      const Icon = SIDEBAR_ICONS[idx % SIDEBAR_ICONS.length];
                      return (
                        <div
                          key={item.label}
                          className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0"
                        >
                          <div className="flex items-center gap-2 text-[#2c3c5d]">
                            <Icon className="h-4 w-4" />
                            <span className="mono-label text-[10px] font-semibold">
                              {item.label}
                            </span>
                          </div>
                          <h3 className="mt-2 text-sm font-semibold text-[#050505]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-[#6a6a6a]">
                            {item.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 border-t border-black/10 pt-4">
                  <a
                    href="#trayectoria"
                    className="group inline-flex items-center gap-1 text-xs font-semibold text-[#050505] hover:text-[#2c3c5d]"
                  >
                    <span>{t.projects.sidebarCta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BANDA 3: BARRA KPI + TARJETA ENFOQUE DE INGENIERÍA */}
        <section className="bg-white pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1120px] space-y-8 px-5 sm:px-8">
            <div className="surface-card grid grid-cols-1 divide-y divide-black/10 overflow-hidden rounded-lg sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              {t.stats.map((stat) => (
                <div key={stat.value} className="p-6 sm:p-7">
                  <div className="tabular-nums text-3xl font-semibold tracking-tight text-[#050505] sm:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#6a6a6a]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="surface-card grid grid-cols-1 items-center gap-8 rounded-lg p-7 sm:p-9 lg:grid-cols-[1fr_1.35fr]">
              <div>
                <p className="mono-label text-[11px] font-medium text-[#2c3c5d]">
                  {t.focus.eyebrow}
                </p>
                <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-[#050505] sm:text-3xl">
                  {t.focus.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6a6a6a]">
                  {t.focus.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.focus.pills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fafaf8] px-3.5 py-1.5 text-xs font-medium text-[#222222]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2c3c5d]" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BANDA 4: VISOR INTERACTIVO DE ARQUITECTURA POR PROYECTO */}
        <section
          id="arquitectura"
          className="border-y border-black/10 bg-[#f7f7f5] py-16 sm:py-24"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <p className="mono-label text-[11px] font-medium text-[#2c3c5d]">
                  {t.architecture.eyebrow}
                </p>
                <span className="h-px w-6 bg-[#2c3c5d]" />
              </div>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#050505] sm:text-5xl">
                {t.architecture.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6a6a6a] sm:text-base">
                {t.architecture.subtitle}
              </p>
            </div>

            <div className="mt-9">
              <ProjectArchitectureExplorer
                selectedProject={selectedProject}
                onSelectProject={setSelectedProject}
                nodeHint={t.architecture.nodeHint}
                specs={t.architecture.specs}
              />
            </div>
          </div>
        </section>

        {/* BANDA 5: NOTAS DE INGENIERÍA (SEPARADAS POR PROYECTO) */}
        <section id="decisiones" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <p className="mono-label text-[11px] font-medium text-[#6a6a6a]">
                {t.decisions.eyebrow}
              </p>
              <span className="h-px w-6 bg-[#2c3c5d]/60" />
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#050505] sm:text-4xl">
              {t.decisions.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6a6a6a] sm:text-base">
              {t.decisions.subtitle}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {t.decisions.cards.map((card) => (
                <article
                  key={card.title}
                  className="surface-card surface-card-hover flex flex-col justify-between rounded-lg p-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="mono-label text-[10px] font-semibold text-[#2c3c5d]">
                        {card.projectTag}
                      </span>
                      {card.featured && (
                        <span className="mono-label rounded-full bg-[#050505] px-2.5 py-0.5 text-[9.5px] text-white">
                          {lang === "es" ? "PRODUCCIÓN" : "PRODUCTION"}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3.5 text-lg font-semibold leading-snug tracking-tight text-[#050505]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#6a6a6a]">
                      {card.excerpt}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-black/10 bg-[#f7f7f5] px-2 py-0.5 font-mono text-[10.5px] text-[#222222]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-black/10 pt-3">
                      <span className="mono-label text-[10px] text-[#6a6a6a]">
                        {card.meta}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BANDA 6: EXPERIENCIA, CERTIFICACIONES Y TIMELINE HORIZONTAL */}
        <section
          id="trayectoria"
          className="border-t border-black/10 bg-[#f7f7f5] py-16 sm:py-24"
        >
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.45fr]">
            <div>
              <p className="mono-label text-[11px] font-medium text-[#6a6a6a]">
                {t.journey.leftEyebrow}
              </p>

              <div className="mt-4 border-y border-black/10 py-5">
                <h3 className="text-base font-semibold text-[#050505]">
                  {t.journey.experienceTitle}
                </h3>
                <p className="mono-label mt-1 text-[10.5px] text-[#2c3c5d]">
                  {t.journey.experiencePeriod}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#6a6a6a]">
                  {t.journey.experienceSummary}
                </p>
              </div>

              <p className="mono-label mt-6 text-[10.5px] font-medium text-[#6a6a6a]">
                {t.journey.certificationsEyebrow}
              </p>
              <ul className="mt-3 divide-y divide-black/10 border-y border-black/10">
                {t.journey.certifications.map((cert) => (
                  <li key={cert.title} className="py-3">
                    <div className="text-sm font-medium text-[#050505]">
                      {cert.title}
                    </div>
                    <div className="mono-label mt-0.5 text-[10px] text-[#6a6a6a]">
                      {cert.meta}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-medium text-[#222222]">
                {t.journey.languagesLine}
              </p>
            </div>

            <div>
              <p className="mono-label text-[11px] font-medium text-[#6a6a6a]">
                {t.journey.rightEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#050505] sm:text-3xl">
                {t.journey.rightTitle}
              </h2>

              <div className="relative mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[11px] right-4 left-4 hidden h-px bg-black/15 lg:block"
                />

                {t.journey.steps.map((step, index) => (
                  <div key={step.period} className="relative">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border ${
                          index >= 2
                            ? "border-[#050505] bg-[#050505]"
                            : "border-black/25 bg-white"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            index >= 2 ? "bg-white" : "bg-[#2c3c5d]"
                          }`}
                        />
                      </span>
                      <span className="mono-label text-[10.5px] font-semibold text-[#2c3c5d]">
                        {step.period}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="mono-label text-[10px] text-[#6a6a6a]">
                        {step.org}
                      </div>
                      <h3 className="mt-1 text-sm font-semibold leading-snug text-[#050505]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#6a6a6a]">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BANDA 7: FOOTER OSCURO #050505 */}
      <footer
        id="contacto"
        className="relative overflow-hidden bg-[#050505] text-white"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 380 220"
          className="pointer-events-none absolute right-0 bottom-0 h-56 w-96 opacity-[0.07]"
          fill="none"
        >
          <path
            d="M40 190 Q140 70 250 130 T370 50 M10 140 Q120 170 220 90 T360 150"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <circle cx="140" cy="112" r="4" fill="#ffffff" />
          <circle cx="250" cy="130" r="5" fill="#ffffff" />
          <circle cx="320" cy="84" r="3.5" fill="#ffffff" />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_2fr]">
            <div>
              <a
                href="#top"
                className="inline-flex items-center gap-1.5 text-lg font-semibold tracking-tight text-white"
              >
                <span>{PROFILE.brand}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#7c96c7]" />
              </a>

              <p className="mt-3 text-sm font-medium text-white/90">
                {t.footer.role}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                {t.footer.disciplines}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={PROFILE.resumePath}
                  download="CV_Luis_Antonio_Serrano_Garcia.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{t.footer.downloadCv}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-white/35 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#7c96c7]" />
                      <span>{t.footer.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{t.footer.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-7 max-w-xs rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="mono-label text-[10px] text-white/50">
                  {t.footer.timeLabel}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <div className="mono-label text-[9.5px] text-white/55">
                      {t.footer.timeCity}
                    </div>
                    <div className="tabular-nums mt-1 font-mono text-base font-medium text-white">
                      {localTime}
                    </div>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <div className="mono-label text-[9.5px] text-white/55">
                      STATUS
                    </div>
                    <div className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {t.footer.timeAvailability}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="mono-label text-[10.5px] text-white/45">
                  {t.footer.exploreTitle}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                  <li>
                    <a href="#proyectos" className="hover:text-white">
                      {t.nav.projects}
                    </a>
                  </li>
                  <li>
                    <a href="#arquitectura" className="hover:text-white">
                      {t.nav.architecture}
                    </a>
                  </li>
                  <li>
                    <a href="#decisiones" className="hover:text-white">
                      {t.nav.engineering}
                    </a>
                  </li>
                  <li>
                    <a href="#trayectoria" className="hover:text-white">
                      {t.nav.journey}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="mono-label text-[10.5px] text-white/45">
                  {t.footer.workTitle}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                  <li>
                    <button
                      type="button"
                      onClick={() => inspectProjectArchitecture("saas")}
                      className="cursor-pointer hover:text-white"
                    >
                      {lang === "es"
                        ? "SaaS Multitenant (.NET)"
                        : "Multi-Tenant SaaS (.NET)"}
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AntoniGarcia/network-sentinel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white"
                    >
                      Network Sentinel
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AntoniGarcia/Web-ser"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white"
                    >
                      Grupo Spring
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="mono-label text-[10.5px] text-white/45">
                  {t.footer.contactTitle}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                  <li>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-xs whitespace-nowrap hover:text-white"
                    >
                      {PROFILE.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                      className="font-mono text-xs hover:text-white"
                    >
                      {PROFILE.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white"
                    >
                      LinkedIn
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
            <div>
              © {new Date().getFullYear()} {PROFILE.name}
            </div>
            <div>{t.footer.tagline}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
