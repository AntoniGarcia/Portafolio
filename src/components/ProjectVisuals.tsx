import type { ProjectId } from "@/data/content";

export function ProjectVisual({ id }: { id: ProjectId }) {
  if (id === "saas") {
    return (
      <div className="project-visual-frame relative flex h-44 items-center justify-center overflow-hidden p-5">
        <svg
          viewBox="0 0 320 140"
          className="h-full w-full max-w-[300px]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M84 44 L124 68 M84 98 L124 74 M196 70 L236 44 M196 70 L236 98"
            stroke="#2c3c5d"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            className="animate-path-drift"
          />
          <rect x="10" y="26" width="74" height="34" rx="6" fill="#ffffff" stroke="#050505" strokeOpacity="0.14" />
          <text x="20" y="40" fill="#6a6a6a" fontSize="7" fontFamily="monospace">TENANT JWT</text>
          <text x="20" y="52" fill="#050505" fontSize="8.5" fontWeight="600">CuentaId</text>

          <rect x="10" y="82" width="74" height="34" rx="6" fill="#ffffff" stroke="#050505" strokeOpacity="0.14" />
          <text x="20" y="96" fill="#6a6a6a" fontSize="7" fontFamily="monospace">POLICIES</text>
          <text x="20" y="108" fill="#050505" fontSize="8.5" fontWeight="600">66 Permisos</text>

          <rect x="120" y="42" width="80" height="56" rx="8" fill="#050505" />
          <circle cx="132" cy="54" r="2.2" fill="#7c96c7" />
          <text x="138" y="56.5" fill="#ffffff" fillOpacity="0.7" fontSize="6.8" fontFamily="monospace">.NET 10</text>
          <text x="130" y="74" fill="#ffffff" fontSize="9.5" fontWeight="600">SaaS Core</text>
          <text x="130" y="87" fill="#ffffff" fillOpacity="0.65" fontSize="7" fontFamily="monospace">EF · IIS</text>

          <rect x="236" y="26" width="74" height="34" rx="6" fill="#ffffff" stroke="#050505" strokeOpacity="0.14" />
          <text x="245" y="40" fill="#2c3c5d" fontSize="7" fontFamily="monospace">T-SQL LOCK</text>
          <text x="245" y="52" fill="#050505" fontSize="8.5" fontWeight="600">UPDLOCK</text>

          <rect x="236" y="82" width="74" height="34" rx="6" fill="#ffffff" stroke="#050505" strokeOpacity="0.14" />
          <text x="245" y="96" fill="#6a6a6a" fontSize="7" fontFamily="monospace">QUALITY</text>
          <text x="245" y="108" fill="#050505" fontSize="8.5" fontWeight="600">315+ xUnit</text>
        </svg>
      </div>
    );
  }

  if (id === "sentinel") {
    return (
      <div className="project-visual-frame relative flex h-44 items-center justify-center overflow-hidden p-5">
        <svg
          viewBox="0 0 320 140"
          className="h-full w-full max-w-[300px]"
          fill="none"
          aria-hidden="true"
        >
          <rect x="16" y="14" width="288" height="112" rx="8" fill="#ffffff" stroke="#050505" strokeOpacity="0.12" />
          <line x1="16" y1="36" x2="304" y2="36" stroke="#050505" strokeOpacity="0.08" />
          <circle cx="30" cy="25" r="2.6" fill="#050505" fillOpacity="0.2" />
          <circle cx="40" cy="25" r="2.6" fill="#050505" fillOpacity="0.2" />
          <text x="54" y="28" fill="#6a6a6a" fontSize="7.2" fontFamily="monospace">
            IPV4/IPV6 · RLOCK · 2S REFRESH
          </text>
          <rect x="244" y="20" width="48" height="11" rx="3" fill="#050505" />
          <text x="251" y="27.8" fill="#ffffff" fontSize="6.5" fontFamily="monospace">PYSHARK</text>

          <line x1="28" y1="58" x2="292" y2="58" stroke="#2c3c5d" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="4 4" />
          <text x="218" y="54" fill="#2c3c5d" fontSize="6.5" fontFamily="monospace">TCP/HTTP/TLS AUDIT</text>

          <path
            d="M28 106 L54 96 L78 100 L104 82 L130 88 L156 54 L182 74 L208 64 L234 90 L260 72 L290 80"
            stroke="#050505"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 106 L54 96 L78 100 L104 82 L130 88 L156 54 L182 74 L208 64 L234 90 L260 72 L290 80 L290 114 L28 114 Z"
            fill="#2c3c5d"
            fillOpacity="0.08"
          />
          <circle cx="156" cy="54" r="4" fill="#2c3c5d" />
          <circle cx="156" cy="54" r="8" stroke="#2c3c5d" strokeOpacity="0.28" />
        </svg>
      </div>
    );
  }

  return (
    <div className="project-visual-frame relative flex h-44 items-center justify-center overflow-hidden p-5">
      <svg
        viewBox="0 0 320 140"
        className="h-full w-full max-w-[300px]"
        fill="none"
        aria-hidden="true"
      >
        <rect x="18" y="14" width="284" height="112" rx="8" fill="#ffffff" stroke="#050505" strokeOpacity="0.12" />
        <line x1="18" y1="34" x2="302" y2="34" stroke="#050505" strokeOpacity="0.08" />
        <rect x="30" y="21" width="44" height="6" rx="2" fill="#050505" />
        <rect x="206" y="22" width="24" height="4" rx="2" fill="#050505" fillOpacity="0.2" />
        <rect x="236" y="22" width="24" height="4" rx="2" fill="#050505" fillOpacity="0.2" />
        <rect x="266" y="21" width="26" height="6" rx="3" fill="#2c3c5d" />

        <rect x="30" y="44" width="80" height="68" rx="5" fill="#f7f7f5" stroke="#050505" strokeOpacity="0.1" />
        <rect x="38" y="52" width="64" height="28" rx="3" fill="#2c3c5d" fillOpacity="0.14" />
        <rect x="38" y="88" width="44" height="5" rx="2" fill="#050505" fillOpacity="0.7" />
        <rect x="38" y="98" width="56" height="4" rx="2" fill="#050505" fillOpacity="0.22" />

        <rect x="120" y="44" width="80" height="68" rx="5" fill="#f7f7f5" stroke="#050505" strokeOpacity="0.1" />
        <rect x="128" y="52" width="64" height="28" rx="3" fill="#050505" fillOpacity="0.08" />
        <rect x="128" y="88" width="48" height="5" rx="2" fill="#050505" fillOpacity="0.7" />
        <rect x="128" y="98" width="52" height="4" rx="2" fill="#050505" fillOpacity="0.22" />

        <rect x="210" y="44" width="80" height="68" rx="5" fill="#050505" />
        <text x="219" y="64" fill="#ffffff" fontSize="8" fontWeight="600">Next.js 14</text>
        <text x="219" y="77" fill="#ffffff" fillOpacity="0.65" fontSize="6.6" fontFamily="monospace">RADIX · TS</text>
        <rect x="219" y="90" width="54" height="12" rx="3" fill="#ffffff" fillOpacity="0.16" />
        <text x="224" y="98.5" fill="#ffffff" fontSize="6.3" fontFamily="monospace">10 CATS</text>
      </svg>
    </div>
  );
}
