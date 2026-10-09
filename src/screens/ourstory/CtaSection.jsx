import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";

export default function CtaSection() {
  return (
    <section className="bg-[#10171e] text-white py-[40px] sm:py-[60px] lg:py-[100px]  md:py-12 font-['Poppins',Arial,sans-serif]">
      <div className="w-[calc(100%-48px)] lg:w-[calc(100%-clamp(24px,5vw,72px)*2)] max-w-[1400px] mx-auto">
        <SectionTitle>
          What's Next
        </SectionTitle>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-[30px] mt-2.5">
          <h2 className="text-[clamp(34px,4vw,58px)] leading-[1.05] tracking-[-0.04em] m-0 font-normal">
            And we're just getting started.
          </h2>
          <Button
            className="self-start whitespace-nowrap md:self-auto"
            to="/contact"
            variant="purple"
            icon="→"
          >
            Start a conversation
          </Button>
        </div>
      </div>
    </section>
  );
}