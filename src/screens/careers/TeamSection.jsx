

const TeamSection = () => {
  return (
    <section className="bg-[#f3f1eb] py-[40px] sm:py-[60px] lg:py-[100px] font-sans text-[#111318]">
      <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[0.35fr_1fr] gap-[65px] px-12 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:px-7 max-[560px]:px-6">
        <div className="pt-2 font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b6a67]">
          <b className="font-medium text-[#b400e8]">02</b> / THE TEAM
        </div>
        <div>
          <p className="mb-7 max-w-[1000px] text-[clamp(40px,4.8vw,72px)] leading-[1.03] tracking-[-0.055em] font-bold max-[560px]:text-[38px]">
            Different questions. Different problems. Room to contribute.
          </p>
          <p className="m-0 max-w-[800px] text-[20px] leading-[1.55] text-[#35363a] max-[560px]:text-[17px]">
            Good work needs more than one kind of thinking. We're interested
            in people who bring a point of view, stay curious and want to
            keep getting better at what they do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;