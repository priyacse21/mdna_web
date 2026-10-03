import React from "react";
import ProcessSteps from "../../components/common/ProcessSteps/ProcessSteps";
import SectionEyebrow from "../../components/common/SectionEyebrow";
import { steps } from "./data/homedata";

export default function MovementSection() {
  return (
    <section className="bg-[#0d151d] text-[#f8f8f7] py-[40px] px-4 md:px-6 lg:py-[100px] lg:px-[max(12vw,40px)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-5 lg:gap-[7vw] mb-12 lg:mb-20">
        <div>
          <SectionEyebrow className="mb-7 max-md:mb-5">How the system moves</SectionEyebrow>
          <h2 className="text-[clamp(3.3rem,6vw,6.8rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-2">
            Start where
            <br />
            you are.
            <br />
            Move from
            <br />
            there.
          </h2>
        </div>
        <p className="max-w-[540px] mb-2 text-[#758595] text-[13px] leading-[1.75]">
          There is no single starting point. The route is simple: identify the need, focus the work, act on the right capability, then determine the next move.
        </p>
      </div>

      <ProcessSteps
        steps={steps.map(([title, description, label], index) => ({
          number: `0${index + 1}`,
          title,
          description,
          tag: label,
        }))}
      />
    </section>
  );
}
