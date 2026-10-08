import { useRef, useState } from 'react';

const pad = (value) => String(value).padStart(2, '0');

export default function AuditSurfaceExplorer({ items = [] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const tabRefs = useRef([]);
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === activeId));
  const active = items[activeIndex];

  if (!active) return null;

  const handleKeyDown = (event, index) => {
    const steps = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0 : items.length - 1;
      setActiveId(items[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
      return;
    }

    const step = steps[event.key];
    if (!step) return;

    event.preventDefault();
    const nextIndex = (index + step + items.length) % items.length;
    setActiveId(items[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
      <div className="grid min-h-[440px] grid-cols-[180px_1fr] max-[767px]:grid-cols-1">
        <aside className="border-r border-white/10 bg-[#0d1118] p-4 max-[767px]:border-r-0 max-[767px]:border-b">
          <div className="mb-3 border-b border-white/10 pb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
            Audit surface
          </div>
          <div aria-label="Audit surfaces" className="flex flex-col max-[767px]:flex-row max-[767px]:gap-1 max-[767px]:overflow-x-auto" role="tablist">
            {items.map((item, index) => {
              const isActive = item.id === active.id;
              return (
                <button
                  key={item.id}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  id={`audit-surface-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="audit-surface-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`relative min-h-9 shrink-0 px-1 text-left font-mono text-[9px] uppercase tracking-[0.16em] transition-colors max-[767px]:px-2 ${
                    isActive
                      ? 'bg-white/[0.06] text-white'
                      : 'text-white/45 hover:text-white'
                  }`}
                >
                  {item.surfaceLabel}
                  {isActive && (
                    <span aria-hidden="true" className="absolute inset-y-0 right-0 w-px bg-[#bd00f2] max-[767px]:inset-x-0 max-[767px]:inset-y-auto max-[767px]:bottom-0 max-[767px]:h-px max-[767px]:w-auto" />
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        <div
          id="audit-surface-panel"
          role="tabpanel"
          aria-labelledby={`audit-surface-tab-${active.id}`}
          aria-live="polite"
          className="relative overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:72px_72px]"
        >
          <div key={active.id} className="h-full motion-safe:animate-[auditSurfaceSlide_.38s_cubic-bezier(.2,.7,.2,1)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
              <span>{active.consoleLabel}</span>
              <span className="text-right">Model / illustrative / {pad(items.length)} layers</span>
            </div>

            <div className="grid grid-cols-3 border-b border-white/10 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/40 max-[767px]:grid-cols-1 max-[767px]:gap-3">
              <div className="border-r border-white/10 pr-4 max-[767px]:border-r-0 max-[767px]:pr-0">
                <p className="m-0 mb-2">Inspect</p>
                <h3 className="m-0 text-[16px] font-medium normal-case tracking-normal text-white">{active.inspect}</h3>
              </div>
              <div className="border-r border-white/10 px-4 max-[767px]:border-r-0 max-[767px]:px-0">
                <p className="m-0 mb-2">Look for</p>
                <h3 className="m-0 text-[16px] font-medium normal-case tracking-normal text-white">{active.lookFor}</h3>
              </div>
              <div className="pl-4 max-[767px]:pl-0">
                <p className="m-0 mb-2">Output</p>
                <h3 className="m-0 text-[16px] font-medium normal-case tracking-normal text-white">{active.output}</h3>
              </div>
            </div>

            <div className="space-y-4 px-5 py-6 max-[767px]:py-5">
              {active.signals.map((signal) => (
                <div key={signal.label} className="grid grid-cols-[82px_1fr] items-center gap-4 max-[767px]:grid-cols-[68px_1fr]">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/45">{signal.label}</span>
                  <div
                    aria-label={signal.label}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={signal.value}
                    className="h-[3px] bg-white/10"
                    role="meter"
                  >
                    <div className="h-full bg-[#bd00f2] transition-[width] duration-500" style={{ width: `${signal.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
