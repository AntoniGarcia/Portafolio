"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Check,
  Database,
  FileCode2,
  Layers,
  LayoutGrid,
  Lock,
  MonitorSmartphone,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import {
  PROJECT_ORDER,
  type ProjectArchitectureSpec,
  type ProjectId,
} from "@/data/content";

interface ProjectArchitectureExplorerProps {
  selectedProject: ProjectId;
  onSelectProject: (id: ProjectId) => void;
  nodeHint: string;
  specs: Record<ProjectId, ProjectArchitectureSpec>;
}

const NODE_ICON_MAP: Record<string, typeof ShieldCheck> = {
  "saas-client": MonitorSmartphone,
  "saas-domain": Layers,
  "saas-sql": Database,
  "saas-ops": ServerCog,
  "sen-capture": Activity,
  "sen-sec": ShieldCheck,
  "sen-audit": Database,
  "sen-ui": MonitorSmartphone,
  "web-router": Layers,
  "web-data": FileCode2,
  "web-ui": LayoutGrid,
  "web-ux": MonitorSmartphone,
};

export function ProjectArchitectureExplorer({
  selectedProject,
  onSelectProject,
  nodeHint,
  specs,
}: ProjectArchitectureExplorerProps) {
  const spec = specs[selectedProject];
  const [activeNodeId, setActiveNodeId] = useState<string>(spec.nodes[0].id);

  useEffect(() => {
    setActiveNodeId(specs[selectedProject].nodes[0].id);
  }, [selectedProject, specs]);

  const activeNode =
    spec.nodes.find((n) => n.id === activeNodeId) ?? spec.nodes[0];
  const topNodes = spec.nodes.slice(0, 2);
  const bottomNodes = spec.nodes.slice(2, 4);

  return (
    <div>
      {/* Selector de proyecto (3 pestañas grandes) */}
      <div
        role="tablist"
        aria-label="Selector de arquitectura por proyecto"
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {PROJECT_ORDER.map((projectId) => {
          const item = specs[projectId];
          const isSelected = projectId === selectedProject;
          return (
            <button
              key={projectId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectProject(projectId)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border px-4 py-3.5 text-left transition-all duration-150 ${
                isSelected
                  ? "border-[#050505] bg-[#050505] text-white shadow-[0_12px_28px_rgba(5,5,5,0.16)]"
                  : "border-black/10 bg-white text-[#050505] hover:border-black/25"
              }`}
            >
              <div className="min-w-0">
                <span
                  className={`mono-label block text-[10px] ${
                    isSelected ? "text-white/65" : "text-[#2c3c5d]"
                  }`}
                >
                  {item.tabNumber} · {item.tabStack}
                </span>
                <span className="mt-1 block truncate text-sm font-semibold">
                  {item.tabLabel}
                </span>
              </div>
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  isSelected ? "bg-[#7c96c7]" : "bg-black/15"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Contenido del proyecto seleccionado: Izquierda resumen conciso, Derecha diagrama dedicado */}
      <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.92fr_1.18fr] lg:gap-10">
        {/* Resumen conciso */}
        <div className="surface-card rounded-xl p-6 sm:p-7">
          <div className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-[#f7f7f5] px-2.5 py-1 font-mono text-[10.5px] text-[#2c3c5d]">
            {!spec.repoUrl && <Lock className="h-3 w-3" />}
            <span>{spec.badge}</span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#050505]">
            {spec.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#6a6a6a]">
            {spec.summary}
          </p>

          <ul className="mt-5 space-y-2.5 border-t border-black/10 pt-5">
            {spec.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[#222222]"
              >
                <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#2c3c5d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {spec.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-black/10 bg-[#f7f7f5] px-2.5 py-1 font-mono text-[11px] text-[#222222]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-black/10 pt-5">
            {spec.repoUrl && spec.repoCta ? (
              <div className="flex flex-col gap-2">
                <a
                  href={spec.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 rounded-lg bg-[#050505] px-4 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
                >
                  <span>{spec.repoCta}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="text-xs text-[#6a6a6a]">{spec.repoNote}</p>
              </div>
            ) : (
              <p className="text-xs leading-relaxed text-[#6a6a6a]">
                {spec.repoNote}
              </p>
            )}
          </div>
        </div>

        {/* Diagrama interactivo dedicado al proyecto activo */}
        <div className="surface-card overflow-hidden rounded-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 bg-[#fafaf8] px-5 py-3.5">
            <span className="mono-label text-[10.5px] font-semibold text-[#2c3c5d]">
              {spec.tabLabel}
            </span>
            <span className="text-xs text-[#6a6a6a]">{nodeHint}</span>
          </div>

          <div className="diagram-grid relative border-b border-black/10 px-5 py-6 sm:px-6">
            {/* Conectores SVG hacia el núcleo central */}
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
              viewBox="0 0 600 280"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M155 72 L300 140 M445 72 L300 140 M155 208 L300 140 M445 208 L300 140"
                stroke="#2c3c5d"
                strokeOpacity="0.35"
                strokeWidth="1.3"
                className="animate-path-drift"
              />
            </svg>

            <div className="relative z-10 flex flex-col gap-4">
              {/* Fila superior (2 nodos) */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {topNodes.map((node) => {
                  const Icon = NODE_ICON_MAP[node.id] ?? Layers;
                  const isActive = node.id === activeNode.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      aria-pressed={isActive}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3.5 py-3 text-left transition-all duration-150 ${
                        isActive
                          ? "border-[#050505] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                          : "border-black/10 bg-white/95 hover:border-black/25"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${
                          isActive
                            ? "border-[#2c3c5d] bg-[#2c3c5d] text-white"
                            : "border-black/10 bg-[#f7f7f5] text-[#2c3c5d]"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold text-[#050505]">
                          {node.step} · {node.label}
                        </span>
                        <span className="mt-0.5 block font-mono text-[10px] text-[#6a6a6a]">
                          {node.caption}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Núcleo central del proyecto */}
              <div className="flex justify-center py-1">
                <div className="animate-node-float inline-flex items-center gap-3 rounded-lg border border-black bg-[#050505] px-5 py-3 text-white shadow-[0_14px_34px_rgba(5,5,5,0.2)]">
                  <span className="h-2 w-2 rounded-full bg-[#7c96c7]" />
                  <div>
                    <div className="text-xs font-semibold tracking-tight">
                      {spec.centerTitle}
                    </div>
                    <div className="mono-label text-[10px] text-white/65">
                      {spec.centerSub}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fila inferior (2 nodos) */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {bottomNodes.map((node) => {
                  const Icon = NODE_ICON_MAP[node.id] ?? Layers;
                  const isActive = node.id === activeNode.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNodeId(node.id)}
                      aria-pressed={isActive}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3.5 py-3 text-left transition-all duration-150 ${
                        isActive
                          ? "border-[#050505] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                          : "border-black/10 bg-white/95 hover:border-black/25"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${
                          isActive
                            ? "border-[#2c3c5d] bg-[#2c3c5d] text-white"
                            : "border-black/10 bg-[#f7f7f5] text-[#2c3c5d]"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold text-[#050505]">
                          {node.step} · {node.label}
                        </span>
                        <span className="mt-0.5 block font-mono text-[10px] text-[#6a6a6a]">
                          {node.caption}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Línea de flujo concisa */}
              <div className="rounded-md border border-black/10 bg-white/90 px-3.5 py-2 text-center font-mono text-[10.5px] text-[#222222]">
                {spec.flowLine}
              </div>
            </div>
          </div>

          {/* Ficha breve del nodo seleccionado */}
          <div className="bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="mono-label text-[10.5px] font-semibold text-[#2c3c5d]">
                {activeNode.step} · {activeNode.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-black/10 bg-[#f7f7f5] px-2 py-0.5 font-mono text-[10px] text-[#222222]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-[#222222]">
              {activeNode.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
