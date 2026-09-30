import NeedList from "../../components/common/NeedList/NeedList";
import  {homeneeds}  from "../home/data/homedata.jsx";

export default function ProblemSection() {
  return (
    <section className="bg-[#f2f0ea] text-[#10161d] min-h-[680px] py-[90px] px-4 md:px-6 lg:py-[14vw] lg:px-[max(12vw,40px)] grid grid-cols-1 lg:grid-cols-2 items-center gap-[55px] lg:gap-[8vw]">
      <div>
        <p className="mb-7 font-mono text-[10px] leading-[1.4] font-medium tracking-[0.16em] uppercase text-violet max-md:mb-5 max-md:text-[8px]">00 - The marketing problem</p>

        <h2 className="text-[3.5rem] lg:text-[clamp(3.2rem,5vw,6rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-[34px]">
          More marketing
          <br />
          isn't always
          <br />
          the <span className="text-[#bd00f2]">answer.</span>
        </h2>

        <p className="max-w-[600px] text-[#52667c] text-[15px] leading-[1.85] m-0">
          The next move depends on the problem in front of you.
          Sometimes you need more pipeline. Sometimes you need
          visibility, credibility, clarity or a stronger marketing
          function.
        </p>
      </div>

      <NeedList
        title="Where the need shows up"
        needs={homeneeds}
        variant="simple"
        showFooter
      />
    </section>
  );
}