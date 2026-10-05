import React from "react";
import SectionTitle from "../../components/common/SectionTitle";

export default function OurStoryHero() {
  return (
    <section className="bg-[#10171e] text-white py-[40px] sm:py-[60px] lg:py-[100px] font-['Poppins',Arial,sans-serif]">
      <div className="w-[calc(100%-48px)] lg:w-[calc(100%-clamp(24px,5vw,72px)*2)] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-7 md:gap-[6vw] items-center">
        <div>
          <SectionTitle>
            Our Story
          </SectionTitle>
          <h1 className="text-[clamp(40px,5vw,72px)] leading-[1.03] tracking-[-0.045em] font-bold my-3.5 mb-[18px]">
            Great businesses can still struggle to get on the map.
          </h1>
          <p className="text-[17px] leading-[1.6] text-[#d6d9de] max-w-[650px] m-0">
            mDNA began with a simple observation — and a different way of
            responding to the challenges businesses face when going to
            market.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="h-[170px] md:h-[260px] relative before:content-[''] before:absolute before:inset-[12%] before:border before:border-white/17 before:-skew-y-[10deg] before:-rotate-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        >
          <i className="absolute w-[11px] h-[11px] rounded-full bg-[#a604d6] shadow-[0_0_0_8px_rgba(166,4,214,0.13)] left-[28%] top-[34%]" />
          <i className="absolute w-[11px] h-[11px] rounded-full bg-[#a604d6] shadow-[0_0_0_8px_rgba(166,4,214,0.13)] left-[67%] top-[58%]" />
          <i className="absolute w-[11px] h-[11px] rounded-full bg-[#a604d6] shadow-[0_0_0_8px_rgba(166,4,214,0.13)] left-[48%] top-[77%]" />
        </div>
      </div>
    </section>
  );
}