import React from "react";

export default function BeliefSection() {
  return (
    <section className="py-[50px] font-['Poppins',Arial,sans-serif] text-[#171b20]">
      <div className="w-[calc(100%-48px)] lg:w-[calc(100%-clamp(24px,5vw,72px)*2)] max-w-[1400px] mx-auto">
        <div className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-[#a604d6]">
          05 — The Belief
        </div>
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