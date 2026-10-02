import { useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Reusable accordion/tab showcase section.
 *
 * Props:
 * - eyebrowIndex   : string  -> "03"
 * - eyebrowLabel   : string  -> "The lead generation system"
 * - heading        : string
 * - description    : string
 * - panelLabel     : string  -> top-right label in detail panel
 * - codePrefix     : string  -> bottom-left label, e.g. "mDNA / LG"
 * - items          : [{ id, title, tagline, impact, ctaLabel, ctaHref, footerFlow }]
 * - defaultActiveId: string (optional)
 */
export default function ServiceShowcase({
  eyebrowIndex,
  eyebrowLabel,
  heading,
  description,
  panelLabel,
  codePrefix,
  items = [],
  defaultActiveId,
}) {
  const [activeId, setActiveId] = useState(defaultActiveId ?? items[0]?.id);

  const activeIndex = Math.max(
    0,
    items.findIndex((s) => s.id === activeId)
  );
  const active = items[activeIndex];

  if (!active) return null;

  return (
    <section className="bg-[#111218] px-6 py-16 text-white">
      {/* Eyebrow */}
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
        <span className="text-[#b400e6]">{eyebrowIndex}</span> / {eyebrowLabel}
      </p>

      {/* Heading + description */}
      <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:items-end">
        <h2 className="max-w-[760px] text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-[88px]">
          {heading}
        </h2>
        <p className="max-w-[400px] text-base leading-relaxed text-white/70 lg:pb-4">
          {description}
        </p>
      </div>

      {/* List + detail */}
      <div className="mt-14 grid border border-white/10 lg:grid-cols-[455px_1fr]">
        {/* Left list */}
        <ul role="tablist" className="flex flex-col border-white/10 lg:border-r">
          {items.map((s, i) => {
            const isActive = s.id === activeId;
            return (
              <li key={s.id} className="border-b border-white/10 last:border-b-0">
                <button
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(s.id)}
                  className={`flex h-[72px] w-full items-center gap-8 px-6 text-left text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${
                    isActive
                      ? "bg-white text-[#111218]"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-[#b400e6]" : "text-white/40"
                    }`}
                  >
                    {pad(i + 1)}
                  </span>
                  <span className="flex-1">{s.title}</span>
                  <span
                    aria-hidden
                    className={`text-xl font-light transition-transform duration-300 ${
                      isActive ? "rotate-45 text-[#b400e6]" : "text-white/40"
                    }`}
                  >
                    +
                  </span>
                </button>
              </li>
            );
          })}
          <li aria-hidden className="hidden flex-1 lg:block" />
        </ul>

        {/* Right detail */}
        <div
          role="tabpanel"
          key={active.id}
          className="relative min-h-[620px] overflow-hidden bg-[#141621] bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] px-6 py-6 motion-safe:animate-[fadeIn_.35s_ease-out]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[160px] top-[300px] h-[520px] w-[520px] rounded-full border border-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[60px] top-[390px] h-[330px] w-[330px] rounded-full border border-[#b400e6]/40"
          />

          <div className="relative flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            <span>
              {pad(activeIndex + 1)} / {pad(items.length)}
            </span>
            <span>{panelLabel}</span>
          </div>

          <div className="relative mt-24 md:px-6">
            <h3 className="text-6xl font-semibold tracking-tighter md:text-7xl">
              {active.title}
            </h3>
            <p className="mt-4 text-lg text-white/60">{active.tagline}</p>

            <div className="mt-8 border-l-2 border-[#b400e6] pl-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#b400e6]">
                Impact
              </p>
              <p className="mt-1 max-w-[520px] text-sm text-white">
                {active.impact}
              </p>
            </div>

            {active.ctaLabel && (
              <a
                href={active.ctaHref ?? "#contact"}
                className="mt-8 inline-flex items-center gap-6 bg-[#b400e6] px-5 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#c61af5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {active.ctaLabel}
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>

          <div className="absolute inset-x-6 bottom-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            <span>
              {codePrefix} / {pad(activeIndex + 1)}
            </span>
            <span>{active.footerFlow}</span>
          </div>
        </div>
      </div>
    </section>
  );
}