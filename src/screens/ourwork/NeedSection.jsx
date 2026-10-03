import { useState } from "react";
import { rows } from "./data/ourworkData";
import SectionEyebrow from "../../components/common/SectionEyebrow";

export default function NeedSection() {
  const [activeKey, setActiveKey] = useState("lead");

  return (
    <section aria-labelledby="start-title" className="py-[88px] lg:py-[126px] bg-[#f3f1eb] text-[#10171e] font-['Poppins',Arial,sans-serif]" id="start">
      <div className="w-[min(calc(100%-52px),1440px)] sm:w-[min(calc(100%-64px),1440px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-[60px] items-end mb-8 lg:mb-[50px]">
          <div>
            <SectionEyebrow className="mb-4">
              Where should we start?
            </SectionEyebrow>
            <h2 className="text-[clamp(44px,5.8vw,82px)] leading-[0.96] tracking-[-4px] font-medium m-0" id="start-title">
              WHAT DO YOU NEED
              <br />
              TO MOVE FORWARD?
            </h2>
          </div>
          <p className="max-w-[680px] text-[#5e676e] leading-[1.85] text-[15px] font-light m-0">
            Choose the situation that sounds most like yours. We'll point you
            toward the mDNA capability built around that need.
          </p>
        </div>

        <div className="border-t border-[#10171e]/15" role="list">
          {rows.map((row) => {
            const isActive = activeKey === row.key;
            return (
              <div
                key={row.key}
                className={`grid grid-cols-[40px_1fr_24px] md:grid-cols-[50px_1.5fr_1fr_30px] items-center gap-3 sm:gap-5 py-5 sm:py-6 border-b border-[#10171e]/15 cursor-pointer transition-colors ${
                  isActive ? "bg-[#a604d6]/[0.04]" : "hover:bg-[#a604d6]/[0.04]"
                }`}
                data-key={row.key}
                role="listitem"
                tabIndex={0}
                onClick={() => setActiveKey(row.key)}
                onFocus={() => setActiveKey(row.key)}
              >
                <div className="font-mono text-[10px] sm:text-[11px] text-[#a604d6]">{row.num}</div>
                <div className="text-[16px] sm:text-[19px] font-medium text-[#10171e]">{row.question}</div>
                <div className="font-mono text-[10px] sm:text-[11px] text-[#79838a] uppercase hidden md:block">
                  {row.category}
                </div>
                <div
                  className={`text-right text-[18px] transition-transform duration-300 ${
                    isActive ? "rotate-90 text-[#a604d6]" : "text-[#10171e]"
                  }`}
                >
                  →
                </div>

                {isActive && (
                  <div className="col-span-full pt-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-[#10171e]/10 mt-2">
                    <p className="m-0 text-[13px] text-[#555e65] max-w-[600px]">
                      <strong className="block text-[14px] text-[#10171e] mb-1 font-semibold">
                        {row.startLabel}
                      </strong>
                      {row.desc}
                    </p>
                    <a
                      className="font-mono text-[11px] text-[#a604d6] underline whitespace-nowrap self-start sm:self-auto"
                      href={row.href}
                    >
                      {row.cta}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="font-mono text-[9px] text-[#8c959b] mt-3.5 tracking-wider">
          HOVER / FOCUS / CLICK TO EXPAND
        </div>
      </div>
    </section>
  );
}