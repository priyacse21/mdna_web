import { signals } from "./data/ourworkData";
import SectionTitle from "../../components/common/SectionTitle";

export default function MarketingSection() {
  return (
    <section aria-labelledby="problem-title" className="py-[88px] lg:py-[126px] bg-[#f3f1eb] text-[#10171e] font-['Poppins',Arial,sans-serif]">
      <div className="w-[min(calc(100%-52px),1440px)] sm:w-[min(calc(100%-64px),1440px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-10 sm:gap-[55px] lg:gap-20 items-end">
          <div>
            <SectionTitle className="mb-4">
               The marketing problem
            </SectionTitle>
            <h2 className="text-[clamp(32px,4.3vw,60px)] leading-[1.03] tracking-[-3px] font-medium m-0" id="problem-title">
              MORE MARKETING
              <br />
              ISN'T ALWAYS
              <br />
              THE <span className="text-[#a604d6]">ANSWER.</span>
            </h2>
            <p className="max-w-[680px] text-[#5e676e] leading-[1.85] text-[15px] font-light mt-6">
              The next move depends on the problem in front of you. Sometimes
              you need more pipeline. Sometimes you need visibility,
              credibility, clarity or a stronger marketing function.
            </p>
          </div>

          <div className="relative min-h-[355px] sm:min-h-[420px] border border-[#10171e]/15 overflow-hidden p-6 sm:p-[34px] before:content-[''] before:absolute before:w-[390px] before:h-[390px] before:border before:border-[#a604d6]/25 before:-right-[190px] before:-top-[160px] before:rotate-45">
            <div className="font-mono uppercase tracking-[1.8px] text-[10px] text-[#a604d6] mb-4">
              WHERE THE NEED SHOWS UP
            </div>

            <div className="relative z-2 grid gap-[13px] mt-7">
              {signals.map((signal) => (
                <div
                  className="flex items-center justify-between border border-[#10171e]/15 p-[18px_19px] bg-white/20"
                  key={signal.num}
                >
                  <span className="font-mono text-[10px] text-[#69737a]">{signal.num}</span>
                  <strong className="text-[12px] font-medium">{signal.text}</strong>
                  <i className="w-[7px] h-[7px] bg-[#a604d6] block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}