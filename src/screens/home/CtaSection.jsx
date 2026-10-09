
import Button from "../../components/common/Button";
export default function CtaSection() {
  return (
    <section
      className="relative min-h-[600px] bg-[#0d151d] text-[#f8f8f7] grid place-items-center content-center text-center py-[100px] px-[30px] overflow-hidden before:content-[''] before:absolute before:w-[680px] before:h-[680px] before:border before:border-white/8 before:rounded-full before:pointer-events-none"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="absolute w-[450px] h-[450px] border border-[#bd00f2]/35 rounded-full pointer-events-none"
      />

      <div className="relative z-1 max-w-3xl flex flex-col items-center">
        <h2 className="text-[clamp(3.3rem,6.5vw,7.4rem)] leading-[0.92] tracking-[-0.075em] uppercase font-bold text-balance mb-5">
          Ready to make
          <br />
          your next
          <br />
          <span className="text-[#bd00f2]">marketing move?</span>
        </h2>

        <p className="max-w-[520px] text-[#B8C1CC] text-[18px] leading-[1.7] mb-7">
          Start with the need that matters most - pipeline, visibility, credibility, clarity or capability.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          <Button to="/contact" variant="purple" icon="↓" >Talk to mDNA  </Button>
          <Button to ="/services" variant="black" icon="↗" >Explore Services </Button>
        </div>
      </div>
    </section>
  );
}
