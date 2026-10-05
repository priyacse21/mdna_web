import { useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Props:
 * - heading      : string (use \n for line break)
 * - description  : string
 * - lenses       : [{ id, label, title, text, nodes, lines }]
 *     nodes: [{ label, x, y }]            (x, y in %)
 * - lines       : [[x1, y1, x2, y2], ...]  (in %, shared, no animation)
 * - footnote     : string
 */
export default function LensExplorer({
  heading,
  description,
  lenses = [],
  lines = [],
  footnote = "Model / Illustrative map — no live data",
}) {
  const [activeId, setActiveId] = useState(lenses[0]?.id);
  const activeIndex = Math.max(0, lenses.findIndex((l) => l.id === activeId));
  const active = lenses[activeIndex];

  if (!active) return null;

  return (
    <section className="bg-[#f8f8f6] px-6 py-16 text-[#111218]">
      {/* Heading */}
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
        <h2 className="whitespace-pre-line text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-[80px]">
          {heading}
        </h2>
        <p className="max-w-[300px] text-[18px] leading-relaxed text-[#1113B4452218]/60">
          {description}
        </p>
      </div>

      {/* Tabs + map */}
      <div className="mt-14 grid border-t border-[#111218]/10 lg:grid-cols-[234px_1fr]">
        {/* Left tabs */}
        <ul role="tablist" className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible lg:pt-3">
          {lenses.map((l, i) => {
            const isActive = l.id === activeId;
            return (
              <li key={l.id} className="shrink-0 lg:shrink">
                <button
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(l.id)}
                  className={`flex h-[59px] w-full items-center gap-8 px-5 text-left text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b400e6] ${
                    isActive
                      ? "bg-[#111218] text-white"
                      : "text-[#111218] hover:bg-[#111218]/5"
                  }`}
                >
                  <span className="font-mono text-[10px] text-[#b400e6]">
                    {pad(i + 1)}
                  </span>
                  <span>{l.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right map panel */}
        <div
          role="tabpanel"
          className="relative min-h-[560px] overflow-hidden border-l border-[#111218]/10 bg-[#f1f0ea] bg-[linear-gradient(to_right,rgba(17,18,24,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,18,24,0.07)_1px,transparent_1px)] bg-[size:48px_48px]"
        >
          {/* Lines (static, same for all lenses) */}
          <div className="absolute inset-0">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {lines.map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#111218"
                strokeOpacity="0.45"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          </div>

          {/* Text */}
          <div className="relative z-10 p-8 sm:p-[45px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em]">
              Lens / {pad(activeIndex + 1)}
            </p>
            <h3 className="mt-2 max-w-[560px] text-4xl font-semibold leading-[0.95] tracking-tighter sm:text-[52px]">
              {active.title}
            </h3>
            <p className="mt-5 max-w-[360px] text-sm leading-relaxed text-[#111218]/70">
              {active.text}
            </p>
          </div>

          {/* Nodes (zoom layer) */}
          <div
            key={`${active.id}-nodes`}
            className="absolute inset-0 z-10 motion-safe:animate-[mapZoom_.55s_cubic-bezier(.2,.7,.2,1)]"
          >
          {active.nodes.map((n) => (
            <div
              key={n.label}
              className="absolute z-10"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span className="absolute left-0 top-0 grid h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rotate-45 place-items-center border border-[#111218] bg-white">
                <span className="h-2 w-2 bg-[#b400e6]" />
              </span>
              <span className="absolute left-3 top-4 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.1em] text-[#111218]/80">
                {n.label}
              </span>
            </div>
          ))}

          </div>

          <p className="absolute bottom-4 right-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#111218]/50">
            {footnote}
          </p>
        </div>
      </div>
    </section>
  );
}