import React from "react";
import SectionTitle from "../../components/common/SectionTitle";

export default function BeliefSection() {
  return (
    <section className="py-[40px] sm:py-[60px] lg:py-[100px] font-['Poppins',Arial,sans-serif] text-[#171b20]">
      <div className="w-[calc(100%-48px)] lg:w-[calc(100%-clamp(24px,5vw,72px)*2)] max-w-[1400px] mx-auto">
        <SectionTitle>
          The Belief
        </SectionTitle>
        <p className="text-[clamp(28px,4vw,58px)] leading-[1.1] tracking-[-0.045em] max-w-[1150px] m-0 mt-2.5 font-normal">
          We believe that great work isn't measured by how many people are
          in the room but by{" "}
          <em className="text-[#a604d6] not-italic font-medium">
            how much we can make happen together.
          </em>
        </p>
      </div>
    </section>
  );
}