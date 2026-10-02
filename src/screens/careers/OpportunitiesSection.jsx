

const OpportunitiesSection = () => {
  return (
    <section className="bg-[#111318] py-[90px] pb-[95px] font-sans text-white max-[560px]:py-[70px]">
      <div className="mx-auto w-full max-w-[1380px] px-12 max-[900px]:px-7 max-[560px]:px-6">
        <div className="mb-12 flex items-end justify-between gap-[60px] max-[900px]:grid max-[900px]:grid-cols-1 max-[900px]:gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#aaa9a5]">
              <span className="text-[#b400e8]">03</span> / OPPORTUNITIES
            </div>
            <h2 className="mt-[9px] mb-0 text-[clamp(44px,5vw,72px)] leading-none tracking-[-0.055em] font-bold max-[560px]:text-[43px]">
              We're building
              <br />
              the team.
            </h2>
          </div>
          <p className="m-0 max-w-[470px] text-[16px] leading-[1.55] text-[#c9c7c1]">
            There are no open roles to share right now. When the right
            opportunity takes shape, you'll find it here.
          </p>
        </div>

        <div className="grid min-h-[180px] grid-cols-[140px_1fr_220px] items-center gap-[30px] border-y border-white/[0.15] max-[900px]:min-h-[175px] max-[900px]:grid-cols-[90px_1fr] max-[560px]:grid-cols-[55px_1fr] max-[560px]:gap-[15px]" tabIndex={0}>
          <div className="text-[44px] tracking-[-0.05em] font-bold text-[#b400e8] max-[560px]:self-start max-[560px]:pt-[30px] max-[560px]:text-[32px]">00</div>
          <div>
            <div className="mb-2 text-[clamp(29px,3vw,44px)] tracking-[-0.04em] font-bold max-[560px]:text-[28px]">Open opportunities</div>
            <div className="text-[14px] text-[#aaa9a5]">
              Nothing listed yet. Check back soon.
            </div>
          </div>
          <div className="justify-self-end border border-[#b400e8]/70 px-3 py-[10px] font-mono text-[11px] tracking-[0.08em] uppercase before:mr-[9px] before:inline-block before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#b400e8] before:shadow-[0_0_0_5px_rgba(180,0,232,0.1)] max-[900px]:col-start-2 max-[900px]:justify-self-start max-[900px]:mb-[22px] max-[560px]:col-start-2">Coming soon</div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;