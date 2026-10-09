
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import { GraphicNetwork } from "../../components/common/Graphic";

const HeroSection = () => {
  return (
    <section className="flex min-h-[690px] items-center overflow-hidden bg-[#111318] py-[40px] sm:py-[60px] lg:py-[100px] font-sans text-white">
      <div className="box-border grid w-full max-w-[1380px] grid-cols-[1.05fr_0.95fr] items-center gap-[65px] mx-auto px-12 max-[900px]:grid-cols-1 max-[900px]:gap-[30px] max-[900px]:px-7 max-[560px]:px-6">
        <div>
          <SectionTitle className="mb-6">
            <b className="font-medium text-[#b400e8]"></b> CAREERS
          </SectionTitle>
          <h1 className="m-0 mb-7 text-[clamp(55px,6.6vw,100px)] leading-[0.93] tracking-[-0.065em] font-extrabold max-[560px]:text-[clamp(50px,14vw,68px)]">
            Come make
            <br />
            things happen.
          </h1>
          <p className="mb-8 max-w-[620px] text-[18px] leading-[1.55] text-[#d9d7d1] max-[560px]:text-[16px]">
            mDNA brings strategy, creativity and execution together. We're
            building a place for people who want to think deeply, make
            things well and contribute to work that moves businesses
            forward.
          </p>
          <Button href="#opportunities" variant="purple" icon="↓">
            See Opportunities
          </Button>
        </div>

        <div className="h-[400px] max-[900px]:h-[320px] max-[560px]:mx-[-10px] max-[560px]:h-[270px] relative">
          <GraphicNetwork
            className="h-full w-full"
            viewBox="0 0 620 410"
          >
            <ellipse cx="315" cy="205" rx="210" ry="125" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <ellipse cx="315" cy="205" rx="130" ry="78" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

            <text x="64" y="88" fill="#a7a6a3" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="0.08em">
              INPUT
            </text>
            <text x="230" y="148" fill="#fff" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="0.08em">
              CONTRIBUTE
            </text>
            <text x="426" y="103" fill="#a7a6a3" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="0.08em">
              IDEA
            </text>
            <text x="322" y="326" fill="#a7a6a3" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="0.08em">
              CRAFT
            </text>
            <text x="475" y="280" fill="#a7a6a3" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="0.08em">
              MOMENTUM
            </text>
            <text x="135" y="360" fill="#a7a6a3" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="0.08em">
              CONNECT
            </text>
          </GraphicNetwork>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;