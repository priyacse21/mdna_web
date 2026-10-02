
const InsightsHero = () => {
  return (
    <section aria-labelledby="page-title" className="relative grid min-h-[78svh] grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] overflow-hidden bg-[#111318] font-sans text-white max-[900px]:grid-cols-1 max-[900px]:min-h-0">
      <div className="relative z-[2] flex items-end py-[40px] sm:py-[60px] lg:py-[100px] pr-[7vw] pl-[max(36px,calc((100vw-1440px)/2))] max-[900px]:min-h-[59svh] max-[900px]:px-6">
        <div>
          <div className="font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-white/[0.48]">01 / Insights</div>
          <h1 className="mt-5 mb-6 max-w-[850px] text-[clamp(58px,7.2vw,108px)] leading-[0.9] tracking-[-0.065em] font-bold max-[600px]:text-[clamp(48px,15vw,72px)]" id="page-title">
            Insights for sharper <span className="block text-[#b400e8]">marketing decisions.</span>
          </h1>
          <p className="m-0 max-w-[540px] text-[clamp(16px,1.25vw,19px)] leading-[1.55] text-white/[0.62] max-[600px]:text-[15px]">Draft articles are being prepared. More perspectives are coming soon.</p>
        </div>
      </div>

      <div aria-hidden="true" className="relative overflow-hidden border-l border-white/[0.11] bg-[#0d0f14] max-[900px]:h-[39svh] max-[900px]:min-h-[290px] max-[900px]:border-l-0 max-[900px]:border-t">
        <div className="absolute top-7 right-7 z-[3] font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-white/[0.32]">THE INDEX / 001</div>

        <div className="absolute inset-[13%_8%_10%_10%] rotate-[-7deg] transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:48px_48px] [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)]" />
          <span className="absolute left-[8%] top-[18%] whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] text-white transition duration-[450ms] before:absolute before:top-1/2 before:left-[-15px] before:h-[7px] before:w-[7px] before:-translate-y-1/2 before:rotate-45 before:bg-[#b400e8] before:shadow-[0_0_22px_rgba(180,0,232,0.55)]">IDEA</span>
          <span className="absolute left-[46%] top-[8%] whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] text-white/[0.45] transition duration-[450ms]">RESEARCH</span>
          <span className="absolute left-[67%] top-[31%] whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] text-white/[0.45] transition duration-[450ms]">BLOG</span>
          <span className="absolute left-[20%] top-[45%] whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] text-white/[0.45] transition duration-[450ms]">PERSPECTIVE</span>
          <span className="absolute left-[55%] top-[59%] whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] text-white/[0.45] transition duration-[450ms]">CASE STUDY</span>
          <span className="absolute left-[10%] top-[76%] whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] text-white/[0.45] transition duration-[450ms]">WHITE PAPER</span>
          <span className="absolute left-[70%] top-[81%] whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] text-white/[0.45] transition duration-[450ms]">INSIGHT</span>

          <i className="absolute left-[15%] top-[29%] h-px w-[38%] origin-left rotate-[-18deg] bg-[#b400e8]/[0.52] opacity-[0.55]" />
          <i className="absolute left-[48%] top-[39%] h-px w-[32%] origin-left rotate-[28deg] bg-[#b400e8]/[0.52] opacity-[0.55]" />
          <i className="absolute left-[24%] top-[64%] h-px w-[42%] origin-left rotate-[-13deg] bg-[#b400e8]/[0.52] opacity-[0.55]" />
          <i className="absolute left-[29%] top-[26%] h-[5px] w-[5px] rotate-45 bg-[#b400e8] shadow-[0_0_18px_rgba(180,0,232,0.5)]" />
          <i className="absolute left-[63%] top-[42%] h-[5px] w-[5px] rotate-45 bg-[#b400e8] shadow-[0_0_18px_rgba(180,0,232,0.5)]" />
          <i className="absolute left-[39%] top-[61%] h-[5px] w-[5px] rotate-45 bg-[#b400e8] shadow-[0_0_18px_rgba(180,0,232,0.5)]" />
          <i className="absolute left-[73%] top-[82%] h-[5px] w-[5px] rotate-45 bg-[#b400e8] shadow-[0_0_18px_rgba(180,0,232,0.5)]" />
        </div>

        <div className="absolute bottom-[26px] left-[10%] max-w-[230px] font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-white/[0.28]">
          A growing body of perspectives, research and ideas.
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;