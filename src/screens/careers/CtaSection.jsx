
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";

const CtaSection = () => {
  return (
    <section className="bg-[#b400e8] py-[40px] sm:py-[60px] lg:py-[100px] font-sans text-white">
      <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[1fr_auto] items-end gap-[50px] px-12 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:px-7 max-[560px]:px-6">
        <div>
          <SectionTitle className="!text-white before:!bg-white">WHAT'S NEXT</SectionTitle>
          <h2 className="mt-2 mb-4 max-w-[850px] text-[clamp(44px,5vw,72px)] leading-none tracking-[-0.055em] font-bold max-[560px]:text-[43px]">Looking for what comes next?</h2>
          <p className="m-0 text-[18px] text-[#f2dcfa]">Explore the work. See the kind of thinking behind mDNA.</p>
        </div>

        <div className="flex flex-wrap gap-[10px]">
          <Button to="/services" variant="purple" icon="→">
            Explore Our Services
          </Button>
          <Button to="/contact" variant="black" icon="→">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;