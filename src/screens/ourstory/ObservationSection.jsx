import { useState } from "react";
import SectionEyebrow from "../../components/common/SectionEyebrow";

const qualities = ["Resourceful", "Hands-on", "Fast-moving", "Effective"];

export default function ObservationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className=" text-[#171b20] py-[40px] sm:py-[60px] lg:py-[100px] font-['Poppins',Arial,sans-serif]">
      <div className="w-[calc(100%-48px)] lg:w-[calc(100%-clamp(24px,5vw,72px)*2)] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[0.3fr_1fr] gap-7 md:gap-[6vw]">
        <SectionEyebrow>
          The Observation
        </SectionEyebrow>

        <div>
          <h2 className="text-[clamp(28px,3.2vw,45px)] leading-[1.1] tracking-[-0.035em] font-semibold m-0 mb-4">
            Getting on the map is harder than it looks.
          </h2>
          <p className="text-[15px] leading-[1.7] max-w-[850px] m-0">
            Our founders saw this firsthand while working with clients
            navigating the challenges of going to market — figuring out how
            to tell their story, reach the right people and build a
            presence that matched the value they offered.
          </p>

          <SectionEyebrow className="mt-7">
            The Approach
          </SectionEyebrow>
          <p className="text-[15px] leading-[1.7] max-w-[850px] m-0 mt-2">
            What stood out was not just the challenge, but the approach our
            team took to solving it:
          </p>

          <div
            aria-label="Four qualities"
            className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-[#ddd] mt-5"
            role="tablist"
          >
            {qualities.map((word, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={word}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`border-0 bg-transparent text-left py-[17px] pr-2 font-semibold text-[clamp(15px,1.5vw,21px)] font-['Poppins',sans-serif] cursor-pointer outline-none transition-colors ${
                    isActive
                      ? "text-[#a604d6]"
                      : "text-[#999] hover:text-[#a604d6]"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}