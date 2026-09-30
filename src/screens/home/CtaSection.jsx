import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section
      className="relative min-h-[620px] bg-[#0d151d] text-[#f8f8f7] grid place-items-center content-center text-center py-[100px] px-[30px] overflow-hidden before:content-[''] before:absolute before:w-[680px] before:h-[680px] before:border before:border-white/8 before:rounded-full before:pointer-events-none"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] border border-[#bd00f2]/35 rounded-full pointer-events-none"
      />

      <div className="relative z-1 max-w-3xl flex flex-col items-center">
        <p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-violet max-md:mb-5 max-md:text-[8px]">07 - The next move</p>

        <h2 className="text-[clamp(3.3rem,6.5vw,7.4rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-5">
          Ready to make
          <br />
          your next
          <br />
          <span className="text-[#bd00f2]">marketing move?</span>
        </h2>

        <p className="max-w-[520px] text-[#8997a3] text-[12px] leading-[1.7] mb-7">
          Start with the need that matters most - pipeline, visibility, credibility, clarity or capability.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          <Link className="inline-flex min-h-[45px] cursor-pointer items-center gap-[14px] px-[17px] text-[11px] font-bold no-underline transition-all duration-200 max-md:text-[10px] bg-violet text-white" to="/contact">
            Talk to mDNA -&gt;
          </Link>
          <Link
            className="inline-flex min-h-[45px] cursor-pointer items-center gap-[14px] px-[17px] text-[11px] font-bold no-underline transition-all duration-200 max-md:text-[10px] border border-current border-white/40 text-white hover:border-[#bd00f2] hover:bg-[#bd00f2]/10 transition-colors"
            to="/services"
          >
            Explore Services -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
