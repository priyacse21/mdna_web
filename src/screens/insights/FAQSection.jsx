
import { Link } from "react-router-dom";
import { faqs } from "./data/insightsData";
import SectionTitle from "../../components/common/SectionTitle";


const FAQContactSection = () => {
  return (
    <div className="grid grid-cols-2 gap-[70px] bg-[#111318] px-[7vw] py-[40px] sm:py-[60px] lg:py-[100px] font-sans text-white max-[900px]:grid-cols-1 max-[900px]:gap-[42px] max-[900px]:px-6">
      <section aria-labelledby="faq-title">
        <SectionTitle>FAQs</SectionTitle>
        <h2 className="mt-[10px] mb-5 text-[clamp(38px,4vw,58px)] leading-[0.95] tracking-[-0.055em] font-bold">
          A little more <span className="text-[#b400e8]">context.</span>
        </h2>

        {faqs.map((item) => (
          <div className="border-t border-white/[0.14] py-[14px] last:border-b" key={item.q}>
            <div className="mb-[7px] text-[16px] font-semibold">{item.q}</div>
            <div className="max-w-[650px] text-[#B8C1CC] text-[15px] leading-[1.6] text-white/[0.56]">{item.a}</div>
          </div>
        ))}
      </section>

      <section aria-labelledby="cta-title" className="flex items-end justify-between gap-[30px] max-[900px]:flex-col max-[900px]:items-start">
        <div>
          <SectionTitle className="mb-3">KEEP IN TOUCH</SectionTitle>
          <h2 className="m-0 max-w-[700px] text-[clamp(30px,4vw,55px)] leading-[0.95] tracking-[-0.055em] font-bold" id="cta-title">
            Have a question worth <span className="text-[#b400e8]">exploring?</span>
          </h2>
        </div>
        <Link
       className="inline-flex min-h-12 items-center justify-center gap-[12px] whitespace-nowrap border border-white bg-white px-8 font-mono text-[10px] tracking-[0.1em] uppercase text-[#111318] no-underline transition duration-200 hover:border-[#b400e8] hover:bg-[#b400e8] hover:text-white"
         to="/contact"> Talk to Us <span className="text-[14px]">↗</span>
          </Link>
      </section>
    </div>
  );
};

export default FAQContactSection;