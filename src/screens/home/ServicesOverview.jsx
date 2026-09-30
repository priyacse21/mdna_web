export default function ServicesOverview() {
  const services = [
    ['01', 'Lead Generation', 'PIPELINE'],
    ['02', 'Content, Search & AI Visibility', 'VISIBILITY'],
    ['03', 'Digital PR', 'CREDIBILITY'],
    ['04', 'Audits & Diagnostics', 'CLARITY'],
    ['05', 'Consulting', 'CAPABILITY'],
  ];

  return (
    <section className="bg-[#0d151d] text-[#f8f8f7] py-[90px] px-4 md:px-6 lg:py-[8vw] lg:px-[max(12vw,40px)]" id="system">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-5 lg:gap-[7vw]">
        <div>
          <p className="eyebrow">01 - The mDNA system</p>
          <h2 className="text-[clamp(3.3rem,6vw,6.8rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-2">
            Five entry points.
            <br />
            One marketing
            <br />
            system.
          </h2>
        </div>
        <p className="max-w-[540px] mb-2 text-[#758595] text-[13px] leading-[1.75]">
          Five capabilities, connected around different business needs. Start with the one that matters now; move into the wider system when the need changes.
        </p>
      </div>

      <div
        className="relative min-h-[320px] mt-[70px] border border-white/14 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:38px_38px] grid grid-cols-[repeat(5,170px)] lg:grid-cols-5 gap-4 pt-[90px] px-7 pb-[30px] overflow-x-auto"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, .06) 1px, transparent 1px)",
        }}
      >
        <p className="absolute top-[15px] left-[15px] text-[#52616f] font-mono text-[9px] uppercase tracking-wider m-0">
          Select a node / explore a capability
        </p>

        {services.map(([number, title, label], index) => {
          const isActive = index === 0;
          return (
            <div className="text-center" key={number}>
              <div
                className={`w-[90px] h-[90px] mx-auto mb-5 grid place-items-center rotate-45 border transition-colors ${
                  isActive ? "border-[#bd00f2]" : "border-white/14"
                }`}
              >
                <small className="-rotate-45 block text-[#bd00f2] font-mono text-[10px]">
                  {number}
                </small>
              </div>
              <strong className="block text-[10px] not-italic font-semibold text-white">
                {title}
              </strong>
              <em className="block mt-1.5 text-[#607080] font-mono text-[9px] not-italic uppercase">
                {label}
              </em>
            </div>
          );
        })}

        <div className="col-span-full text-center mt-4">
          <h3 className="m-0 text-[17px] font-semibold">Lead Generation</h3>
          <p className="my-1.5 text-[#73818e] text-[10px]">
            Identify, target and message ideal buyers.
          </p>
          <a
            href="#contact"
            className="text-[#bd00f2] font-mono text-[10px] hover:underline"
          >
            Explore Lead Generation ↗
          </a>
        </div>
      </div>
    </section>
  );
}
