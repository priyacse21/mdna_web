
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";

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

        <div className="h-[400px] max-[900px]:h-[320px] max-[560px]:mx-[-10px] max-[560px]:h-[270px]">
          <svg
            className="h-full w-full"
            viewBox="0 0 620 410"
            role="img"
            aria-label="Abstract constellation representing individual contribution becoming collective momentum"
          >
            <ellipse cx="315" cy="205" rx="210" ry="125" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <ellipse cx="315" cy="205" rx="130" ry="78" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

            <line x1="90" y1="105" x2="260" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 7" />
            <line x1="260" y1="170" x2="445" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 7" />
            <line x1="260" y1="170" x2="350" y2="300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 7" />
            <line x1="350" y1="300" x2="505" y2="255" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 7" />
            <line x1="90" y1="105" x2="350" y2="300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 7" />
            <line x1="445" y1="120" x2="505" y2="255" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 7" />
            <line x1="350" y1="300" x2="175" y2="335" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 7" />

            <circle cx="90" cy="105" r="6" fill="#111318" stroke="#fff" strokeWidth="1.2" />
            <circle cx="260" cy="170" r="9" fill="#b400e8" stroke="#b400e8" strokeWidth="1.2" />
            <circle cx="445" cy="120" r="6" fill="#111318" stroke="#fff" strokeWidth="1.2" />
            <circle cx="350" cy="300" r="8" fill="#111318" stroke="#fff" strokeWidth="1.2" />
            <circle cx="505" cy="255" r="6" fill="#111318" stroke="#fff" strokeWidth="1.2" />
            <circle cx="175" cy="335" r="5" fill="#111318" stroke="#fff" strokeWidth="1.2" />

            <circle cx="260" cy="170" r="3" fill="#b400e8" />
            <circle cx="350" cy="300" r="3" fill="#b400e8" />

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
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;