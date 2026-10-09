import SectionTitle from "../../components/common/SectionTitle";
import { Circle } from "../../components/common/Graphic";

export default function CompanySection() {
  return (
    <section className="bg-[#f5f4f7] text-[#171b20] py-[40px] sm:py-[60px] lg:py-[100px]  md:py-12 font-['Poppins',Arial,sans-serif]">
      <div className="w-[calc(100%-48px)] lg:w-[calc(100%-clamp(24px,5vw,72px)*2)] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.65fr] gap-7 md:gap-[6vw] items-center">
        <div>
          <SectionTitle>
            The Company
          </SectionTitle>
          <h2 className="text-[clamp(28px,3.2vw,45px)] leading-[1.1] tracking-[-0.035em] font-semibold m-0 my-4">
            That approach became mDNA.
          </h2>
          <p className="text-[18px] text-[#3B4452] leading-[1.7] max-w-[850px] m-0">
            Today, we are a small, dynamic team with a big appetite for
            getting things done. We bring together people who genuinely
            love what they do — and who are constantly deepening their
            craft.
          </p>
        </div>

        <div aria-hidden="true" className="h-[150px] md:h-[190px]">
          <svg viewBox="0 0 500 190" fill="none" className="w-full h-full">
            <path
              d="M40 130L150 50L275 125L405 35M150 50L220 160L405 35M275 125L460 150"
              stroke="#a604d6"
              strokeOpacity=".5"
            />
            <Circle cx="40" cy="130" r="7" fill="#a604d6" />
            <Circle cx="150" cy="50" r="7" fill="#10171e" />
            <Circle cx="275" cy="125" r="8" fill="#a604d6" />
            <Circle cx="405" cy="35" r="7" fill="#10171e" />
            <Circle cx="220" cy="160" r="6" fill="#a604d6" />
            <Circle cx="460" cy="150" r="5" fill="#10171e" />
          </svg>
        </div>
      </div>
    </section>
  );
}