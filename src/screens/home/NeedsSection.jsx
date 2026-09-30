import NeedList from "../../components/common/NeedList/NeedList";
import { needs } from "./data/homedata";

export default function NeedsSection() {
  return (
    <section className="bg-[#f2f0ea] text-[#10161d] block min-h-[680px] py-[90px] px-4 md:px-6 lg:py-[14vw] lg:px-[max(12vw,40px)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-5 lg:gap-[7vw] mb-[42px]">
        <div>
          <p className="eyebrow">
            02 - Where should we start?
          </p>

          <h2 className="text-[clamp(3.3rem,6vw,6.8rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-2">
            What do you
            <br />
            need
            <br />
            to move
            <br />
            forward?
          </h2>
        </div>

        <p className="max-w-[540px] mb-2 text-[#758595] text-[13px] leading-[1.75]">
          Choose the situation that sounds most like yours.
          We'll point you toward the mDNA capability built
          around that need.
        </p>
      </div>

      <NeedList
        needs={needs}
        variant="detailed"
      />
    </section>
  );
}