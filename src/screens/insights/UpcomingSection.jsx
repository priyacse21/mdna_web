
import { drafts } from "./data/insightsData";

const UpcomingSection = () => {
  return (
    <section aria-labelledby="upcoming-title" className="mt-[54px] border-t border-[#111318]/[0.15] pt-12 font-sans">
      <div className="mx-auto w-[min(calc(100%-72px),1440px)] max-[900px]:w-[min(calc(100%-48px),1440px)] max-[600px]:w-[calc(100%-48px)]">
        <div className="mb-[25px] grid grid-cols-[25%_1fr] gap-[50px] max-[900px]:grid-cols-1 max-[900px]:gap-1">
          <div className="pt-[5px] font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-[#747980] max-[900px]:pt-0">
            <b className="font-medium text-[#b400e8]">03</b> / UPCOMING
          </div>
          <div>
            <h2 className="mt-[7px] mb-3 text-[clamp(38px,5vw,68px)] leading-[0.94] tracking-[-0.06em] font-bold max-[600px]:text-[45px]" id="upcoming-title">Perspectives in the works.</h2>
            <p className="mb-0 max-w-[530px] text-[14px] leading-[1.55] text-[#656a70]">
              A first set of ideas is being developed. More insights will
              appear here soon.
            </p>
          </div>
        </div>

        <div className="mb-[50px] grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
          {drafts.map((draft) => (
            <article className="group relative min-h-[165px] overflow-hidden border border-[#111318]/[0.24] bg-white/[0.18] px-[22px] pt-[21px] pb-5 transition duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-[#b400e8] after:transition-transform after:duration-[400ms] hover:-translate-y-[3px] hover:bg-white hover:after:scale-x-100 max-[600px]:min-h-[150px] max-[600px]:p-[19px]" key={draft.title}>
              <div className="mb-[17px] font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-[#b400e8]">Draft Insight</div>
              <h3 className="mb-[19px] max-w-[500px] text-[clamp(18px,2vw,25px)] leading-[1.08] tracking-[-0.035em] font-semibold">{draft.title}</h3>
              <div className="flex items-center justify-between text-[11px] text-[#747980]">
                <span>Draft article concept</span>
                <span className="font-mono text-[9px] leading-[1.2] tracking-[0.14em] uppercase">In development</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;