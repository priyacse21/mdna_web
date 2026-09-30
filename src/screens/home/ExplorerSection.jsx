import { useRef, useState } from "react";
import { points } from "./data/homedata";

const dotPositions = [
  "left-[20%] top-[22%]",
  "left-[75%] top-[22%]",
  "left-[17%] top-[70%]",
  "left-[80%] top-[70%]",
  "left-[50%] top-[12%]",
];

const labelPositions = [
  "left-[22%] top-[16%]",
  "right-[11%] top-[16%]",
  "left-[13%] top-[75%]",
  "right-[10%] top-[75%]",
  "left-1/2 top-[7%] -translate-x-1/2",
];

export default function ExplorerSection() {
  const [activeKey, setActiveKey] = useState("lead");
  const tabRefs = useRef([]);
  const active = points.find((p) => p.key === activeKey);

  const handleKeyDown = (e, index) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!step) return;

    e.preventDefault();
    const next = (index + step + points.length) % points.length;
    setActiveKey(points[next].key);
    tabRefs.current[next]?.focus();
  };

  return (
    <section aria-labelledby="signature-title" className="relative bg-[#121b23] text-white overflow-hidden py-[88px] lg:py-[126px] font-['Poppins',Arial,sans-serif]">
      <div className="w-[min(calc(100%-52px),1440px)] sm:w-[min(calc(100%-64px),1440px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-5 lg:gap-[60px] items-end">
          <div>
            <div className="font-mono uppercase tracking-[1.8px] text-[10px] text-[#a604d6] mb-4">
              05 — One business. Different starting points.
            </div>
            <h2 className="text-[44px] lg:text-[clamp(44px,5.8vw,82px)] leading-[0.96] tracking-[-2.5px] lg:tracking-[-4px] font-medium m-0" id="signature-title">
              CHOOSE YOUR
              <br />
              STARTING POINT.
            </h2>
          </div>
          <p className="max-w-[680px] text-[#8d979f] leading-[1.85] text-[15px] font-light m-0 mt-6 lg:mt-0">
            The right entry point changes with the problem. Select one to see
            how that starting point connects into the wider mDNA system.
          </p>
        </div>

        <div aria-label="mDNA starting points" className="flex gap-[7px] flex-wrap mt-9" role="tablist">
          {points.map((point, index) => {
            const isTabActive = activeKey === point.key;
            return (
              <button
                key={point.key}
                ref={(el) => (tabRefs.current[index] = el)}
                type="button"
                role="tab"
                aria-selected={isTabActive}
                tabIndex={isTabActive ? 0 : -1}
                className={`border py-2.5 px-[13px] font-mono text-[9px] tracking-[0.8px] cursor-pointer transition-all duration-300 ${
                  isTabActive
                    ? "text-white border-[#a604d6] bg-[#a604d6]/8"
                    : "text-[#8f999f] border-white/13 bg-transparent hover:text-white hover:border-[#a604d6]"
                }`}
                onClick={() => setActiveKey(point.key)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {point.tab}
              </button>
            );
          })}
        </div>

        <div
          className="mt-9 border border-white/13 min-h-[500px] sm:min-h-[490px] relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        >
          <div className="absolute left-5 top-[19px] text-[#59646c] font-mono text-[9px] z-4">
            ILLUSTRATIVE SYSTEM — NOT LIVE DATA
          </div>

          {/* Rings */}
          <div className="absolute border border-[#a604d6]/[0.22] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] sm:w-[310px] sm:h-[310px] pointer-events-none" />
          <div className="absolute border border-white/8 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[455px] sm:h-[455px] pointer-events-none" />

          {/* SVG line from center to active dot */}
          <svg aria-hidden="true" className="absolute inset-0 w-full h-full z-1 pointer-events-none">
            <line
              key={active.key}
              x1="50%"
              y1="50%"
              x2={`${active.x}%`}
              y2={`${active.y}%`}
              className="stroke-[#a604d6] stroke-[1]"
            />
          </svg>

          {/* Center Box */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-[105px] sm:h-[105px] bg-[#10171e] border border-[#a604d6] flex items-center justify-center text-center text-[10px] sm:text-[13px] font-semibold z-3 after:content-[''] after:absolute after:-inset-3 after:border after:border-[#a604d6]/[0.18] after:rotate-45">
            mDNA
            <br />
            system
          </div>

          {/* Dots */}
          {points.map((point, index) => {
            const isDotActive = activeKey === point.key;
            return (
              <div
                key={point.key}
                className={`absolute w-3 h-3 rounded-full bg-[#10171e] border -translate-x-1/2 -translate-y-1/2 z-3 transition-all duration-300 ${
                  dotPositions[index]
                } ${
                  isDotActive
                    ? "bg-[#a604d6] border-[#a604d6] shadow-[0_0_0_9px_rgba(166,4,214,0.09)]"
                    : "border-white/35"
                }`}
              />
            );
          })}

          {/* Labels */}
          {points.map((point, index) => {
            const isLabelActive = activeKey === point.key;
            return (
              <div
                key={point.key}
                className={`absolute font-mono text-[7px] sm:text-[10px] transition-colors duration-300 ${
                  labelPositions[index]
                } ${isLabelActive ? "text-white" : "text-[#747f87]"}`}
              >
                {point.tab}
              </div>
            );
          })}

          <div aria-live="polite" className="absolute left-1/2 bottom-4 sm:bottom-[26px] -translate-x-1/2 w-[min(680px,86%)] text-center z-4">
            <strong className="text-[17px] sm:text-[21px] font-medium block">
              {active.title}
            </strong>
            <p className="text-[#7e8991] text-[9px] sm:text-[11px] leading-[1.7] max-w-[580px] mx-auto mt-1.5 mb-0">
              {active.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}