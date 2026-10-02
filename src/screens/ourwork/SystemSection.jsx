import { useState } from "react";
import { systemNodes } from "./data/ourworkData";

const nodePositions = [
  "left-[10%]",
  "left-[30%]",
  "left-[50%]",
  "left-[70%]",
  "left-[90%]",
];

export default function SystemSection() {
  const [activeKey, setActiveKey] = useState("lead");
  const active = systemNodes.find((n) => n.key === activeKey);

  return (
    <section aria-labelledby="system-title" className="bg-[#121b23] text-white overflow-hidden py-[126px] font-['Poppins',Arial,sans-serif]">
      <div className="w-[min(calc(100%-52px),1440px)] sm:w-[min(calc(100%-64px),1440px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-[60px] items-end">
          <div>
            <div className="font-mono uppercase tracking-[1.8px] text-[10px] text-[#a604d6] mb-4">
              01 — The mDNA system
            </div>
            <h2 className="text-[clamp(44px,5.8vw,82px)] leading-[0.96] tracking-[-4px] font-medium m-0" id="system-title">
              FIVE ENTRY POINTS.
              <br />
              ONE MARKETING SYSTEM.
            </h2>
          </div>
          <p className="max-w-[680px] text-[#8d979f] leading-[1.85] text-[15px] font-light m-0 mt-6 lg:mt-0">
            Five capabilities, connected around different business needs.
            Start with the one that matters now; move into the wider system
            when the need changes.
          </p>
        </div>

        <div
          className="mt-[68px] relative min-h-[470px] border-t border-b border-white/13 overflow-x-auto overflow-y-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        >
          <div className="absolute top-[19px] left-[22px] text-[#606b73] font-mono text-[9px]">
            SELECT A NODE / EXPLORE A CAPABILITY
          </div>

          <div className="absolute left-[8%] right-[8%] top-1/2 h-[1px] bg-white/17 min-w-[700px]" />

          <div className="min-w-[700px] h-[470px] relative">
            {systemNodes.map((node, index) => {
              const isActive = activeKey === node.key;
              return (
                <div
                  key={node.key}
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] text-center ${nodePositions[index]}`}
                >
                  <button
                    type="button"
                    aria-label={`Select ${node.label}`}
                    onClick={() => setActiveKey(node.key)}
                    className={`w-[94px] h-[94px] border bg-[#10171e] rotate-45 cursor-pointer transition-all duration-300 flex items-center justify-center mx-auto ${
                      isActive
                        ? "border-[#a604d6] shadow-[0_0_0_10px_rgba(166,4,214,0.06)]"
                        : "border-white/20 hover:border-[#a604d6]"
                    }`}
                  >
                    <span className="-rotate-45 font-mono text-[10px] text-[#9ba4aa]">
                      {node.num}
                    </span>
                  </button>
                  <div className="mt-[26px] text-[12px] font-medium text-white">
                    {node.label}
                  </div>
                  <div className="font-mono text-[9px] text-[#69747c] mt-1.5">
                    {node.sub}
                  </div>
                </div>
              );
            })}

            <div aria-live="polite" className="absolute left-1/2 bottom-6 -translate-x-1/2 w-[min(650px,88%)] text-center">
              <div className="text-[22px] font-medium text-white">
                {active.detailName}
              </div>
              <div className="text-[#879198] text-[12px] leading-[1.7] mt-[7px] mx-auto max-w-[590px]">
                {active.detailCopy}
              </div>
              <a
                href={active.href}
                className="inline-flex mt-3.5 text-white font-mono text-[10px] border-b border-[#a604d6] pb-1 no-underline hover:text-[#a604d6] transition-colors"
              >
                Explore {active.detailName} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}