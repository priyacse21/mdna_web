
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-[#b400e8] py-[40px] sm:py-[60px] lg:py-[100px] font-sans text-white">
      <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[1fr_auto] items-end gap-[50px] px-12 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:px-7 max-[560px]:px-6">
        <div>
          <div className="font-mono text-[11px] tracking-[0.08em] uppercase">04 / WHAT'S NEXT</div>
          <h2 className="mt-2 mb-4 max-w-[850px] text-[clamp(44px,5vw,72px)] leading-none tracking-[-0.055em] font-bold max-[560px]:text-[43px]">Looking for what comes next?</h2>
          <p className="m-0 text-[#f2dcfa]">Explore the work. See the kind of thinking behind mDNA.</p>
        </div>

        <div className="flex flex-wrap gap-[10px]">
          <a className="border border-white bg-white px-[18px] py-[14px] text-[13px] font-bold text-[#111318] no-underline" href="/our-work">
            Explore Our Work →
          </a>
          <Link className="border border-white bg-transparent px-[18px] py-[14px] text-[13px] font-bold text-white no-underline" to="/contact">
            Talk to Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;