import { Link } from "react-router-dom";
import SectionEyebrow from "../../components/common/SectionEyebrow";

export default function CtaSection() {
  return (
    <section className="bg-[#10171e] text-white py-[40px] sm:py-[60px] lg:py-[100px]  md:py-12 font-['Poppins',Arial,sans-serif]">
      <div className="w-[calc(100%-48px)] lg:w-[calc(100%-clamp(24px,5vw,72px)*2)] max-w-[1400px] mx-auto">
        <SectionEyebrow>
          What's Next
        </SectionEyebrow>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-[30px] mt-2.5">
          <h2 className="text-[clamp(34px,4vw,58px)] leading-[1.05] tracking-[-0.04em] m-0 font-normal">
            And we're just getting started.
          </h2>
          <Link
            to="/contact"
            className="bg-[#a604d6] text-white py-[13px] px-[18px] text-[12px] font-semibold whitespace-nowrap no-underline inline-block self-start md:self-auto hover:bg-[#bd00f2] transition-colors"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </section>
  );
}