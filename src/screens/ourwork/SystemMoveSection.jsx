import { steps } from "./data/ourworkData";

export default function SystemMoveSection() {
  return (
    <section aria-labelledby="journey-title" className="py-[88px] lg:py-[126px] bg-[#10171e] text-white font-['Poppins',Arial,sans-serif]">
      <div className="w-[min(calc(100%-52px),1440px)] sm:w-[min(calc(100%-64px),1440px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-6 lg:gap-[60px] items-end mb-12 lg:mb-[74px]">
          <div>
            <div className="font-mono uppercase tracking-[1.8px] text-[10px] text-[#a604d6] mb-4">
              03 — How the system moves
            </div>
            <h2 className="text-[clamp(44px,5.8vw,82px)] leading-[0.96] tracking-[-4px] font-medium m-0" id="journey-title">
              START WHERE YOU ARE.
              <br />
              MOVE FROM THERE.
            </h2>
          </div>
          <p className="max-w-[680px] text-[#8d979f] leading-[1.85] text-[15px] font-light m-0">
            There is no single starting point. The route is simple: identify
            the need, focus the work, act on the right capability, then
            determine the next move.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-[16px] left-0 right-0 h-[1px] bg-white/18 hidden md:block" />
          <div className="absolute top-[16px] left-0 w-[52%] h-[1px] bg-[#a604d6] hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[30px]">
            {steps.map((step) => {
              const isActive = step.active;
              return (
                <article
                  key={step.num}
                  className="relative"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-6 relative z-2 transition-all duration-300 ${
                      isActive
                        ? "bg-[#a604d6] border border-[#a604d6] shadow-[0_0_0_6px_rgba(166,4,214,0.15)] text-white"
                        : "bg-[#10171e] border border-white/25 text-[#9ba4aa]"
                    }`}
                  >
                    <span className="font-mono text-[10px]">{step.num}</span>
                  </div>
                  <h3 className="text-[19px] font-medium m-0 mb-2.5 text-white">
                    {step.title}
                  </h3>
                  <p className="text-[#8c979e] text-[13px] leading-[1.7] m-0 mb-4">
                    {step.desc}
                  </p>
                  <div className="font-mono text-[9px] text-[#a604d6] tracking-widest uppercase">
                    {step.word}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}