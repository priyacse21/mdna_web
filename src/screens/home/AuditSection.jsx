import NeedList from "../../components/common/NeedList/NeedList";
import { audits } from "./data/homedata";

export default function AuditSection() {
  return (
    <section className="bg-[#f2f0ea] text-[#10161d] min-h-[600px] py-[90px] px-4 md:px-6 lg:py-[14vw] lg:px-[max(12vw,40px)] grid grid-cols-1 lg:grid-cols-2 items-center gap-[55px] lg:gap-[8vw]">
      <div>
        <p className="eyebrow">04 - Start with clarity</p>
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
            className="button button-primary"
            href="#contact"
          >
            Book a Free Audit -&gt;
          </a>
          <a
            className="button button-outline border-current text-[#10161d] hover:bg-[#10161d] hover:text-white transition-colors"
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
