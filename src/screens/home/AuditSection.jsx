import NeedList from "../../components/common/NeedList/NeedList";
import SectionEyebrow from "../../components/common/SectionEyebrow";
import { audits } from "./data/homedata";

export default function AuditSection() {
  return (
    <section className="bg-[#f2f0ea] text-[#10161d] min-h-[600px] py-[40px] px-4 md:px-6 lg:py-[100px] lg:px-[max(12vw,40px)] grid grid-cols-1 lg:grid-cols-2 items-center gap-[55px] lg:gap-[8vw]">
      <div>
        <SectionEyebrow className="mb-7 max-md:mb-5">Start with clarity</SectionEyebrow>
        <h2 className="text-[3.5rem] lg:text-[clamp(3.3rem,5.5vw,6.3rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-[34px]">
          Don't know
          <br />
          where to start?
          <br />
          Start with
          <br />
          <span className="text-[#bd00f2]">clarity.</span>
        </h2>
        <p className="max-w-[600px] text-[#52667c] text-[15px] leading-[1.85] mb-8">
          Understand what is working, what isn't and what deserves attention before you invest further.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            className="inline-flex min-h-[45px] cursor-pointer items-center gap-[14px] px-[17px] text-[11px] font-bold no-underline transition-all duration-200 max-md:text-[10px] bg-violet text-white"
            href="#contact"
          >
            Book a Free Audit -&gt;
          </a>
          <a
            className="inline-flex min-h-[45px] cursor-pointer items-center gap-[14px] px-[17px] text-[11px] font-bold no-underline transition-all duration-200 max-md:text-[10px] border border-current text-[#10161d] hover:bg-[#10161d] hover:text-white transition-colors"
            href="#contact"
          >
            Explore Audits &amp; Diagnostics -&gt;
          </a>
        </div>
      </div>

      <NeedList needs={audits} variant="simple" />
    </section>
  );
}
