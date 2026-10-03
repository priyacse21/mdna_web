
import { useState } from "react";
import { items } from "./data/insightsData";
import SectionEyebrow from "../../components/common/SectionEyebrow";


const ContentIndexSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f3f1eb] py-[40px] sm:py-[60px] lg:py-[100px] font-sans text-[#111318]">
      <div className="mx-auto w-[min(calc(100%-72px),1440px)] max-[900px]:w-[min(calc(100%-48px),1440px)] max-[600px]:w-[calc(100%-48px)]">
        <div className="grid grid-cols-[25%_1fr] gap-[50px] max-[900px]:grid-cols-1 max-[900px]:gap-5">
          <SectionEyebrow className="pt-[5px] max-[900px]:pt-0">
            <b className="font-medium text-[#b400e8]"></b> CONTENT INDEX
          </SectionEyebrow>

          <div>
            <div className="border-t border-[#111318]/[0.15]">
              {items.map((item, index) => (
                <button
                  key={item.num}
                  type="button"
                  aria-pressed={activeIndex === index}
                  className={`group relative grid w-full grid-cols-[54px_1fr_auto] items-center gap-5 border-0 border-b border-[#111318]/[0.15] bg-transparent py-5 text-left font-sans text-inherit transition duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] before:absolute before:bottom-[-1px] before:left-0 before:h-0.5 before:w-0 before:bg-[#b400e8] before:transition-[width] before:duration-[350ms] before:ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:before:w-full focus-visible:before:w-full max-[600px]:grid-cols-[34px_1fr] max-[600px]:gap-[11px] max-[600px]:py-[18px] ${activeIndex === index ? "before:w-full" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-[#747980]">{item.num}</span>
                  <span>
                    <h2 className={`m-0 text-[clamp(24px,3vw,42px)] leading-none tracking-[-0.045em] font-semibold transition duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-2 ${activeIndex === index ? "translate-x-2" : ""}`}>{item.title}</h2>
                    <p className="mt-[6px] mb-0 text-[13px] leading-[1.45] text-[#666b70]">{item.desc}</p>
                  </span>
                  <span className="font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase whitespace-nowrap text-[#b400e8] max-[600px]:col-start-2 max-[600px]:mt-[-4px] max-[600px]:text-[9px]">COMING SOON</span>
                </button>
              ))}
            </div>

            <div className="mt-[10px] flex h-8 items-center justify-between font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-[#747980]">
              <span>EDITORIAL LIBRARY</span>
              <span className="mx-4 h-px flex-1 bg-[#111318]/[0.15]"></span>
              <span className="text-[#111318]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentIndexSection;